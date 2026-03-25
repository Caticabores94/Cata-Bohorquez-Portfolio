import { useEffect, useRef, useState } from "react";

type AmbientVideoProps = {
  className: string;
  eager?: boolean;
  poster?: string;
  src: string;
};

export default function AmbientVideo({ className, eager = false, poster, src }: AmbientVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLElement | null>(null);
  const [isNearViewport, setIsNearViewport] = useState(eager);
  const [shouldRenderVideo, setShouldRenderVideo] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      setShouldRenderVideo(false);
      return;
    }

    if (navigator.connection?.saveData) {
      setShouldRenderVideo(false);
    }
  }, []);

  useEffect(() => {
    if (eager || typeof window === "undefined" || !containerRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsNearViewport(true);
          observer.disconnect();
        }
      },
      { rootMargin: "240px 0px" }
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [eager]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldRenderVideo || !isNearViewport) {
      return;
    }

    video.load();

    const startPlayback = async () => {
      try {
        await video.play();
      } catch {
        // Keep the video visible even if autoplay is blocked by the environment.
      }
    };

    void startPlayback();
  }, [isNearViewport, shouldRenderVideo, src]);

  const attachContainerRef = (node: HTMLElement | null) => {
    containerRef.current = node;
  };

  if (shouldRenderVideo && isNearViewport) {
    return (
      <video
        autoPlay
        className={className}
        loop
        muted
        playsInline
        poster={poster}
        preload={eager ? "metadata" : "none"}
        ref={videoRef}
      >
        <source src={src} type="video/mp4" />
      </video>
    );
  }

  if (poster) {
    return (
      <img
        alt=""
        aria-hidden="true"
        className={className}
        decoding="async"
        loading={eager ? "eager" : "lazy"}
        ref={attachContainerRef}
        src={poster}
      />
    );
  }

  return <div aria-hidden="true" className={className} ref={attachContainerRef} />;
}

import { useEffect, useRef, useState } from "react";

type AmbientVideoProps = {
  className: string;
  poster?: string;
  src: string;
};

export default function AmbientVideo({ className, poster, src }: AmbientVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [shouldRenderVideo, setShouldRenderVideo] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      setShouldRenderVideo(false);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldRenderVideo) {
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
  }, [shouldRenderVideo, src]);

  return (
    <div style={{ display: "contents" }}>
      {shouldRenderVideo ? (
        <video
          autoPlay
          className={className}
          loop
          muted
          playsInline
          poster={poster}
          preload="metadata"
          ref={videoRef}
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : poster ? (
        <img alt="" aria-hidden="true" className={className} decoding="async" loading="eager" src={poster} />
      ) : (
        <div aria-hidden="true" className={className} />
      )}
    </div>
  );
}

import { useEffect, useRef, useState } from "react";

type AmbientVideoProps = {
  className: string;
  poster?: string;
  src: string;
};

type SaveDataNavigator = Navigator & {
  connection?: {
    saveData?: boolean;
  };
};

export default function AmbientVideo({ className, poster, src }: AmbientVideoProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [shouldRenderVideo, setShouldRenderVideo] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (navigator as SaveDataNavigator).connection;
    const hasSaveData = connection?.saveData ?? false;
    const isSmallViewport = window.innerWidth < 768;

    if (mediaQuery.matches || hasSaveData || isSmallViewport) {
      setShouldRenderVideo(false);
      return;
    }

    const node = containerRef.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "240px 0px" }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} style={{ display: "contents" }}>
      {shouldRenderVideo ? (
        <video
          autoPlay
          className={className}
          loop
          muted
          playsInline
          poster={poster}
          preload="none"
        >
          {shouldLoad ? <source src={src} type="video/mp4" /> : null}
        </video>
      ) : poster ? (
        <img alt="" aria-hidden="true" className={className} decoding="async" loading="eager" src={poster} />
      ) : (
        <div aria-hidden="true" className={className} />
      )}
    </div>
  );
}

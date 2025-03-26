import { useEffect } from "react";
import gsap from "gsap";

const useHomeTDAnimation = (
  containerRef: React.RefObject<HTMLDivElement | null>,
  enabled: boolean
) => {
  useEffect(() => {
    if (!enabled || !containerRef.current) return;

    gsap.set(containerRef.current, { x: "-100vw" });

    gsap.to(containerRef.current, {
      x: "100vw",
      duration: 4,
      ease: "linear",
      onComplete: () => {
        if (containerRef.current) {
          gsap.set(containerRef.current, { display: "none" });
        }
      },
    });

    return () => {
      if (containerRef.current) {
        gsap.killTweensOf(containerRef.current);
      }
    };
  }, [enabled, containerRef]);
};

export default useHomeTDAnimation;

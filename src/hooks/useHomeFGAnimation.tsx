import { useEffect } from "react";
import gsap from "gsap";

const useHomeFGAnimation = (
  containerRef: React.RefObject<HTMLDivElement | null>,
  enabled: boolean
) => {
  useEffect(() => {
    if (!enabled || !containerRef.current) return;

    gsap.set(containerRef.current, { x: "-50vw" });

    gsap.to(containerRef.current, {
      x: "30vw",
      duration: 3,
      ease: "linear",
    });
  }, [enabled, containerRef]);
};

export default useHomeFGAnimation;

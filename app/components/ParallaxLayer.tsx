"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function ParallaxLayer({
  children,
  strength = 28,
  zoom = 1,
}: {
  children: ReactNode;
  strength?: number;
  zoom?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      node.style.transform = zoom !== 1 ? `scale(${zoom})` : "";
      return;
    }

    const update = () => {
      const rect = node.parentElement?.getBoundingClientRect();
      if (!rect) return;
      const offset =
        ((rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight) *
        strength;
      const scale = zoom !== 1 ? ` scale(${zoom})` : "";
      node.style.transform = `translate3d(0, ${offset}px, 0)${scale}`;
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [strength, zoom]);

  return (
    <div
      ref={ref}
      className="absolute inset-[-12%] will-change-transform"
      style={{ transformOrigin: "center center" }}
    >
      {children}
    </div>
  );
}

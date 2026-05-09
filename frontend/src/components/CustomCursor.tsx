"use client";
import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const ring = document.getElementById("cursor-ring");
    if (!cursor || !ring) return;

    let mx = 0, my = 0, rx = 0, ry = 0;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = mx + "px";
      cursor.style.top = my + "px";
    };

    const animateRing = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx + "px";
      ring.style.top = ry + "px";
      rafId = requestAnimationFrame(animateRing);
    };

    // Event delegation so dynamically rendered elements are also covered
    const onOver = (e: MouseEvent) => {
      if ((e.target as Element).closest("a, button")) {
        ring.style.width = "56px";
        ring.style.height = "56px";
        ring.style.borderColor = "var(--g300)";
      }
    };

    const onOut = (e: MouseEvent) => {
      if ((e.target as Element).closest("a, button")) {
        ring.style.width = "36px";
        ring.style.height = "36px";
        ring.style.borderColor = "var(--g400)";
      }
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    rafId = requestAnimationFrame(animateRing);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div className="cursor" id="cursor" />
      <div className="cursor-ring" id="cursor-ring" />
    </>
  );
}

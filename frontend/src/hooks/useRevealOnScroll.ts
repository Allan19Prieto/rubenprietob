import { useEffect } from "react";

export function useRevealOnScroll() {
  useEffect(() => {
    const reveals = document.querySelectorAll<Element>(".reveal");

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        visible.forEach((entry, i) => {
          setTimeout(() => entry.target.classList.add("visible"), i * 100);
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.08 }
    );

    reveals.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

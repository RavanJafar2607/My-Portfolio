import { useEffect, useRef } from "react";

export function useScroolAnimation() {
  const divRef = useRef(null);
  useEffect(() => {
    const observe = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          divRef.current.classList.add("active");
        } else {
          divRef.current.classList.remove("active");
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      },
    );
    if (divRef.current) {
      observe.observe(divRef.current);
    }
    return () => {
      if (divRef.current) {
        observe.unobserve(divRef.current);
      }
    };
  }, []);
  return divRef;
}

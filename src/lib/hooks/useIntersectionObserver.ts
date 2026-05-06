import { RefObject, useEffect } from "react";

export const useIntersectionObserver = (
  targetRef: RefObject<Element | null>,
  onIntersect: () => void,
  rootRef?: RefObject<Element | null>,
) => {
  useEffect(() => {
    const el = targetRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) onIntersect();
      },
      { root: rootRef?.current ?? null, threshold: 0 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [targetRef, onIntersect, rootRef]);
};

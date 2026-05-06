import { RefObject, useEffect, useLayoutEffect, useRef } from "react";

export const useIntersectionObserver = (
  targetRef: RefObject<Element | null>,
  onIntersect: () => void,
  rootRef?: RefObject<Element | null>,
) => {
  const callbackRef = useRef(onIntersect);

  useLayoutEffect(() => {
    callbackRef.current = onIntersect;
  });

  useEffect(() => {
    const el = targetRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) callbackRef.current();
      },
      { root: rootRef?.current ?? null, threshold: 0 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [targetRef, rootRef]);
};

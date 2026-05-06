import { RefObject, useEffect, useLayoutEffect, useRef } from "react";

export const useIntersectionObserver = (
  targetRef: RefObject<Element | null>,
  onIntersect: () => void,
  rootRef?: RefObject<Element | null>,
  reconnectOn?: unknown,
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
    // reconnectOn이 바뀌면(새 페이지 도착) observer를 재연결해서
    // sentinel이 아직 뷰포트 안에 있으면 다시 발동되도록 한다
  }, [targetRef, rootRef, reconnectOn]);
};

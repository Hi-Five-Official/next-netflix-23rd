import { useRef } from "react";

export const useDragScroll = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const lastX = useRef(0);
  const lastTime = useRef(0);
  const velocity = useRef(0);
  const rafId = useRef<number | null>(null);

  const cancelMomentum = () => {
    if (rafId.current !== null) {
      cancelAnimationFrame(rafId.current);
      rafId.current = null;
    }
  };

  const applyMomentum = () => {
    if (!ref.current || Math.abs(velocity.current) < 0.5) return;
    ref.current.scrollLeft += velocity.current;
    velocity.current *= 0.92;
    rafId.current = requestAnimationFrame(applyMomentum);
  };

  const onMouseDown = (e: React.MouseEvent) => {
    cancelMomentum();
    isDragging.current = true;
    startX.current = e.pageX - (ref.current?.offsetLeft ?? 0);
    scrollLeft.current = ref.current?.scrollLeft ?? 0;
    lastX.current = e.pageX;
    lastTime.current = performance.now();
    velocity.current = 0;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !ref.current) return;
    e.preventDefault();
    const x = e.pageX - ref.current.offsetLeft;
    const now = performance.now();
    const dt = now - lastTime.current;
    const dx = e.pageX - lastX.current;

    if (dt > 0) {
      // scrollLeft 변화량 기준 속도 (frame당)
      velocity.current = -(dx / dt) * 16;
    }

    ref.current.scrollLeft = scrollLeft.current - (x - startX.current);
    lastX.current = e.pageX;
    lastTime.current = now;
  };

  const stopDragging = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    applyMomentum();
  };

  return { ref, onMouseDown, onMouseMove, onMouseUp: stopDragging, onMouseLeave: stopDragging };
};

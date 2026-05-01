"use client";

import { useDragScroll } from "@/lib/hooks/useDragScroll";

const DragScrollCarousel = ({ children }: { children: React.ReactNode }) => {
  const { ref, onMouseDown, onMouseMove, onMouseUp, onMouseLeave } = useDragScroll();

  return (
    <div
      ref={ref}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
      className="flex cursor-pointer gap-1.75 overflow-hidden select-none"
    >
      {children}
    </div>
  );
};

export default DragScrollCarousel;

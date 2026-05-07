"use client";

import "swiper/css";

import { memo } from "react";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import MediaThumbnail from "@/components/home/MediaThumbnail";
import { TmdbMedia } from "@/types/home";

interface MediaCardCarouselProps {
  items: TmdbMedia[];
  shape?: "rect" | "circle";
  size?: "small" | "large";
}

const MediaCardCarousel = memo(function MediaCardCarousel({
  items,
  shape = "rect",
  size = "small",
}: MediaCardCarouselProps) {
  return (
    <Swiper
      modules={[FreeMode]}
      freeMode={{ momentum: true }}
      grabCursor
      slidesPerView="auto"
      spaceBetween={7}
    >
      {items.map(item => (
        <SwiperSlide key={item.id} style={{ width: "auto" }}>
          <MediaThumbnail item={item} shape={shape} size={size} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
});

export default MediaCardCarousel;

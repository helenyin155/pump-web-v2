import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper/core";

import { Card } from "./Card";

SwiperCore.use([Navigation, Pagination]);

export function CardCarousel({ slides, ...props }) {
  return (
    <div {...props}>
      <Swiper
        id="swiper-replace"
        slidesPerView={1}
        spaceBetween={30} 
        loop={true} 
        loopFillGroupWithBlank={true} 
        pagination={{
          "clickable": true
        }} 
        navigation={true}
        breakpoints={{
          1400: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          950: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={`${slide.title}__swiper__slide`}>
            <SCard
              key={slide.title}
              title={slide.title}
              description={slide.description}
              thumbnail={slide.thumbnail}
              style={{ marginBottom: "50px" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

const SCard = styled(Card)`
  margin: auto;
`;

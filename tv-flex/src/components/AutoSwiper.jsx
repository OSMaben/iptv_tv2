import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import imageUrlBuilder from "@sanity/image-url";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import SanityClient from "../client";

const builder = imageUrlBuilder(SanityClient);

export default function AutoSwiper({ slides, className }) {
  function urlFor(source) {
    console.log("====================================");
    console.log(source);
    console.log("====================================");

    return builder.image(source);
  }

  const [state, setState] = useState([]);
  useEffect(() => {
    const query = '*[_type == "movie"]';

    SanityClient.fetch(query).then((movie) => {
      setState(movie);
    });
  }, []);
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={15}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        centeredSlidesBounds
        breakpoints={{
          300: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
      >
        {state.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              src={urlFor(item.poster.asset._ref)}
              className="w-full h-full"
              alt={`slide-${index}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

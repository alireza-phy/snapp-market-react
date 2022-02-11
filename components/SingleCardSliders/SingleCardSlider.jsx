import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import ProductData from "../ProductData/ProductData";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "swiper/css";
function SingleSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
          "--swiper-navigation-size": "15px !important",
          border: "1px solid rgba(223,219,219,1)",
          padding: "5px",
          borderRadius: "5px",
        }}
        autoHeight={true}
        zoom={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src={ProductData[0].images[0].url} width="250" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ProductData[0].images[1].url} width="250" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={ProductData[0].images[0].url} width="250" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ProductData[0].images[1].url} width="250" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default SingleSlider;

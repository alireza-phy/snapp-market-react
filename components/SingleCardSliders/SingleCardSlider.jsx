import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import ProductData from "../ProductData/ProductData";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css";

function SingleSlider({currentProduct}) {
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
          {
              currentProduct.images.map(item =>
                  <SwiperSlide key={item.id}>
                      <img src={item.url} width="250" />
                  </SwiperSlide>
              )
          }
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
          {
              currentProduct.images.map(item =>
                  <SwiperSlide key={item.id}>
                      <img src={item.url} width="250"/>
                  </SwiperSlide>
              )
          }
      </Swiper>
    </>
  );
}
export default SingleSlider;

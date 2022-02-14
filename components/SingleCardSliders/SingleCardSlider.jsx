import React, { useState } from "react";
import {
  MagnifierContainer,
  Magnifier,
  MagnifierPreview,
  MagnifierZoom,
} from "react-image-magnifiers";
import Box from "@mui/material/Box";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import ProductData from "../ProductData/ProductData";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css";
import { current } from "@reduxjs/toolkit";

function SingleSlider({ currentProduct }) {
  const [show, setShow] = useState(false);
  const[img,setImg] =useState(currentProduct.images[0].url)
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <MagnifierContainer  style={{ display: "flex", flexDirection: "row" }} >
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
            "--swiper-navigation-size": "15px !important",
            border: "1px solid rgba(223,219,219,1)",
            padding: "5px",
            borderRadius: "5px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          autoHeight={true}
          zoom={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          {currentProduct.images.map((item) => (
            <SwiperSlide
              onMouseEnter={() => setShow(true)}
              onMouseLeave={() => setShow(false)}
              sx={{ width: "19.9rem" }}
              key={item.id}
            >
              <MagnifierPreview
                overlayOpacity={0}
                overlayBoxColor={"transparent"}
                overlayBoxOpacity={0.2}
                overlayBoxImage={
                  item.url
                }
                cursorStyle={"crosshair"}
                imageSrc={item.url}
              />
              {/* <img src={item.url} width="250" /> */}
            </SwiperSlide>
          ))}
        </Swiper>
        <Box
          sx={{
            display: show ? "flex" : "none",
            backgroundColor: "white !important",
            border: "none",
            borderRadius: "6px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "30rem",
            height: "20rem",
            overflow: "hidden",
            position: "absolute",
            right: "45rem",
            zIndex: 100,
          }}
        >
                    <MagnifierZoom 
                    style={{ width: "30rem", height: "30rem", margin: "auto",transitionSpeed:"opacity 300ms ease-in 0s",}}
                    imageSrc={currentProduct.images[0].url}
                  />
        </Box>
      </MagnifierContainer>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {currentProduct.images.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.url} width="250" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
export default SingleSlider;

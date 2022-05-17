import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Card1 from "./Card1";
import Card3 from "./Card3";
import Card4 from "./Card4";
import Img1 from "../style/images/img1.PNG";
import Img4 from "../style/images/img4.PNG";
import Img3 from "../style/images/Img3.PNG";
import { FreeMode, Navigation, Thumbs } from "swiper";

import "../style/Slider.css";
function Slider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
          height: "65vh",
          width: "70%",
          marginBottom: "10px",
        }}
        // loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <Card1 />
        </SwiperSlide>
        <SwiperSlide>
          <Card3 />
        </SwiperSlide>
        <SwiperSlide>
          <Card4 />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        style={{ width: "70%", height: "20vh" }}
        // loop={true}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img alt="okk" src={Img1} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="okk" src={Img3} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="okk" src={Img4} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;

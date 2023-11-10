import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

const Blogs = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when component mounts
}, []);


  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
         <SwiperSlide>
        {/* <img src={require("../images/t3c.jpg")} width="50%" height="50%" alt="Slide 1" /> */}
      </SwiperSlide>
      <SwiperSlide>
        {/* <img src={require("../images/t3.jpg")} width="100%" alt="Slide 2" /> */}
      </SwiperSlide>
      <SwiperSlide>
        <img src={require("../images/t7.jpg")} width="100%" alt="Slide 3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={require("../images/t8.jpg")} width="100%" alt="Slide 4" />
      </SwiperSlide>
      <SwiperSlide>
        {/* <img src={require("../images/t3.jpg")} width="100%" alt="Slide 5" /> */}
      </SwiperSlide>
      <SwiperSlide>
        {/* <img src={require("../images/t3c.jpg")} width="100%" alt="Slide 6" /> */}
      </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Blogs;

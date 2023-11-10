import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

const CenteredSlider = () => {

  const navigate = useNavigate()


  const boxLink = (pageNumber) => {

        if (pageNumber === 1) {
            navigate("/nakshatra-foods")
        }
        else if (pageNumber === 2) {
            navigate("/nakshatra-characteristics")
        }
        else if (pageNumber === 3) {
            navigate("/nakshatra-deities")
        }
        else if (pageNumber === 4) {
            navigate("/nakshatra-likes-dislikes")
        }
        else if (pageNumber === 5) {
            navigate("/tithi-foods")
        }
        else if (pageNumber === 6) {
            navigate("/tithi-characteristics")
        }
        else if (pageNumber === 7) {
            navigate("/tithi-deities")
        }
        else if (pageNumber === 8) {
            navigate("/tithi-likes-dislikes")
        }

    }




  return (

    <>
      <Swiper
        slidesPerView={1.5}
        spaceBetween={20}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          992: {
            slidesPerView: 2,
          },
          1300: {
            slidesPerView: 1.5,
          }
        }}
      >
        <SwiperSlide>
          <img onClick={() => boxLink(1)} src={require("../images/boxesImages/food1.jpg")} onContextMenu={(e)=>e.preventDefault()}/>
          <div className="centered-text" onClick={() => boxLink(1)}>Nakshatra Foods</div>
        </SwiperSlide >
        <SwiperSlide >
          <img onClick={() => boxLink(2)} src={require("../images/boxesImages/char1.jpg")} onContextMenu={(e)=>e.preventDefault()}/>
          <div className="centered-text" onClick={() => boxLink(2)}>Nakshatra Characteristics</div>
        </SwiperSlide>
        <SwiperSlide>
          <img onClick={() => boxLink(3)} src={require("../images/boxesImages/deity1.png")} onContextMenu={(e)=>e.preventDefault()}/>
          <div className="centered-text" onClick={() => boxLink(3)}>Nakshatra Deity</div>
        </SwiperSlide>
        <SwiperSlide>
          <img onClick={() => boxLink(4)} src={require("../images/boxesImages/likes11.jpg")} onContextMenu={(e)=>e.preventDefault()}/>
          <div className="centered-text" onClick={() => boxLink(4)}>Nakshatra Likes and Disikes</div>
        </SwiperSlide>
        <SwiperSlide>
          <img onClick={() => boxLink(5)} src={require("../images/boxesImages/food2.jpg")} onContextMenu={(e)=>e.preventDefault()}/>
          <div className="centered-text" onClick={() => boxLink(5)}>Tithi Food</div>
        </SwiperSlide>
        <SwiperSlide>
          <img onClick={() => boxLink(6)} src={require("../images/boxesImages/char22.jpg")} onContextMenu={(e)=>e.preventDefault()}/>
          <div className="centered-text" onClick={() => boxLink(6)}>Tithi Characteristics</div>
        </SwiperSlide>
        <SwiperSlide>
          <img onClick={() => boxLink(7)} src={require("../images/boxesImages/deity2.png")} onContextMenu={(e)=>e.preventDefault()}/>
          <div className="centered-text" onClick={() => boxLink(7)}>Tithi Deity</div>
        </SwiperSlide>
        <SwiperSlide>
          <img onClick={() => boxLink(8)} src={require("../images/boxesImages/likes22.jpg")} onContextMenu={(e)=>e.preventDefault()}/>
          <div className="centered-text" onClick={() => boxLink(8)}>Tithi Likes& Disikes</div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default CenteredSlider;
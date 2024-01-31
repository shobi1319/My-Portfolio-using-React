import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import the Swiper styles
import './Portfolio.css';
import Project from '../../img/project.png';
import Java from '../../img/java.png';
import Online from '../../img/online.PNG';
import Slide from '../../img/slide.PNG';
import { useContext } from "react";
import { themeContext } from "../../../src/Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      <Swiper
        spaceBetween={30}
        slidesPerView={2}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Online} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Java} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Project} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;

import React from "react";
import { useState } from "react";
import SectionHeading from "./SectionHeading";
import "./StyleSheet.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import t1 from "./assets/doozy media from wix/Testimonial 1.png";
import t2 from "./assets/doozy media from wix/Testimonial 2.png";
import t3 from "./assets/doozy media from wix/Testimonial 3.png";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [t1, t2, t3];

function TestimonialsSection() {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    //initialSlide: 2,
    //centerMode: true,
    //centerPadding: "60px",
  };
  return (
    <div className="divTestimonialMain" id="testimonials">
      <SectionHeading titleText="Testimonials" />
      <div className="divSlider">
        <Slider className="sliderTestimonial" {...settings}>
          <div>
            <img className="imgTestimonial" src={t1} />
          </div>
          <div>
            <img className="imgTestimonial" src={t2} />
          </div>
          <div>
            <img className="imgTestimonial" src={t3} />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default TestimonialsSection;

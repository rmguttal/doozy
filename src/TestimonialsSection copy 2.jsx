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
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };
  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const { imageIndex, setImageIndex } = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };
  return (
    <div>
      <SectionHeading titleText="Testimonials" />
      <div className="divSlider">
        <Slider {...settings}>
          {images.map((img, idx) => {
            <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
              <img src={img} alt={img} />
            </div>;
          })}
        </Slider>
      </div>
    </div>
  );
}

export default TestimonialsSection;
/*
.slide img {
  width: 20rem;
  margin: 0 auto;
}

.slide {
  transform: scale(0.2);
  transition: transform 300ms;
  opacity: 0.5;
}

.activeSlide {
  transform: scale(1.1);
  opacity: 1;
}

.arrow {
  background-color: white;
  position: absolute;
  cursor: pointer;
  z-index: 10;
}

.arrow svg {
  transition: color 300ms;
}

.arrow svg:hover {
  color: brown;
}

.next {
  right: 0%;
  top: 50%;
}

.prev {
  left: 0%;
  top: 50%;
}

*/

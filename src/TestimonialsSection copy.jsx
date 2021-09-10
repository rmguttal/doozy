import React from "react";
import SectionHeading from "./SectionHeading";
import "./StyleSheet.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import t1 from "./assets/doozy media from wix/Testimonial 1.png";
import t2 from "./assets/doozy media from wix/Testimonial 2.png";
import t3 from "./assets/doozy media from wix/Testimonial 3.png";
import Slider from "react-slick";

const images = [t1, t2, t3];

function TestimonialsSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="divTestimonialMain">
      <SectionHeading titleText="Testimonials" />
      <Slider {...settings}>
        {/* {images.map((img, idx) => {
          <img src={img} alt={img} />;
        })} */}
        {/* <div>
          <p>asdfasd</p>
        </div> */}
        {/* <div>
          <img src={t1} style={{ height: "20em", width: "auto" }} />
          <img src={t1} style={{ height: "20em", width: "auto" }} />
          <img src={t1} style={{ height: "20em", width: "auto" }} />
        </div> */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={t1}
            style={{ height: "20em", width: "auto", alignSelf: "center" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={t1}
            style={{ height: "20em", width: "auto", alignSelf: "center" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={t1}
            style={{ height: "20em", width: "auto", alignSelf: "center" }}
          />
        </div>
      </Slider>
    </div>
  );
}

export default TestimonialsSection;

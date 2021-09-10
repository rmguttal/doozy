import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import ScrollToSection from "./ScrollToSection";

function HeaderMenu() {
  return (
    <div className="divHeaderMenuMain">
      <ScrollToSection titleText="About Us" idTxt="aboutUs" />
      <ScrollToSection titleText="Doozy Treats" idTxt="treatsMenu" />
      <ScrollToSection titleText="Testimonials" idTxt="testimonials" />
      <ScrollToSection titleText="Contact" idTxt="contacts" />
    </div>
  );
}

export default HeaderMenu;

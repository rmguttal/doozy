import React from "react";
import "./StyleSheet.css";
import { animateScroll as scroll } from "react-scroll";

function Footer() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div className="divFooterMain">
      <button className="btnBackToTop" onClick={scrollToTop}>
        Back to Top
      </button>
    </div>
  );
}

export default Footer;

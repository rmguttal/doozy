import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

function ScrollToSection({ titleText, idTxt }) {
  return (
    <div className="btnHeaderMenu">
      <Link
        activeClass="active"
        to={idTxt}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        {titleText}
      </Link>
    </div>
  );
}

export default ScrollToSection;

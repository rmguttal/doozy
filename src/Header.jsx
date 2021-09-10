/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import tableVideo from "./assets/doozy media from wix/tableVideo.mp4";
import logo from "./assets/doozy media from wix/Doozy Logo_FINAL copy.png";
import HeaderMenu from "./HeaderMenu";

function Header() {
  return (
    <div className="divHeaderMain">
      <div className="divHeaderLogo">
        <img src={logo} className="imgHeaderLogo" />
      </div>
      <div className="divHeaderVideo">
        <video className="videoHeaderVideo" autoPlay loop muted>
          <source src={tableVideo} type="video/mp4" />
        </video>
      </div>
      <HeaderMenu />
    </div>
  );
}

export default Header;

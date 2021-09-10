import React from "react";
import "./StyleSheet.css";

function MenuCard({ sourceImage, titleText, descTxt }) {
  return (
    <div className="divMenuCard">
      <img className="imgMenuCardItem" src={sourceImage} />
      <div className="divMenuCardOverlay">
        <p className="pMenuCardOverlayTxt">{descTxt}</p>
      </div>
      <div className="divMenuCardtxt">{titleText}</div>
    </div>
  );
}

export default MenuCard;

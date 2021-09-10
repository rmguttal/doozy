import React from "react";
import dunkVideo from "./assets/doozy media from wix/28 - InShot_20210809_162640100.mp4";

function MiddleVideo() {
  return (
    <div style={styles.videoDiv}>
      <video autoPlay loop muted style={styles.videoStyle}>
        <source src={dunkVideo} type="video/mp4" />
      </video>
    </div>
  );
}

const styles = {
  videoDiv: {
    height: "35em",
    width: "100%",
    //position: "absolute",
  },
  videoStyle: {
    height: "35em",
    width: "100%",
    opacity: "1",
    objectPosition: "center 10%",
    objectFit: "cover",
  },
};

export default MiddleVideo;

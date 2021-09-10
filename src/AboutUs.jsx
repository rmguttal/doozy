import React from "react";
import SectionHeading from "./SectionHeading";
import img1 from "./assets/doozy media from wix/IMG-20210325-WA0014_edited.jpg";
import img2 from "./assets/doozy media from wix/IMG_2511.JPG_edited.jpg";

function AboutUs({ id }) {
  return (
    <div style={styles.main} id={id}>
      <SectionHeading titleText="About Us" />
      <div style={styles.boxDiv}>
        <div>
          <img src={img1} style={styles.img1} />
        </div>
        <div style={styles.textBox}>
          <div style={styles.txtTitle}>Our Story</div>
          <div style={styles.txtDesc}>
            At Doozy, we strive to elevate simple whole ingredients to gourmet
            flavours. Nothing makes us happier than freshly made food and that
            is why our orders start with using fresh ingredients.
          </div>
        </div>
      </div>
      <div style={styles.boxDiv}>
        <div style={styles.textBox}>
          <div style={styles.txtTitle}>We Believe</div>
          <div style={styles.txtDesc}>
            We wish to make your everyday into a little celebration. Whether it
            is some 'me time' with your daily joyous cuppa that you look forward
            to or eating sweet treats with your loved ones. We would love for
            you to think of Doozy's heartwarming and cozy treats in every such
            celebration
          </div>
        </div>
        <div>
          <img src={img2} style={styles.img1} />
        </div>
      </div>
    </div>
  );
}

const styles = {
  main: {
    margin: "4em 2em",
  },
  boxDiv: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
  },
  textBox: {
    borderWidth: "1px",
    border: "1px solid black",
    width: "30em",
    padding: "2em",
    margin: "0.5em",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Montserrat",
    borderRadius: "3px",
  },
  txtTitle: {
    fontSize: "1.5em",
    marginBottom: "1em",
  },
  txtDesc: {
    textAlign: "justify",
    verticalAlign: "middle",
  },
  img1: {
    height: "20em",
    width: "auto",
    borderRadius: "3px",
    objectFit: "cover",
    objectPosition: "50% 50%",
    imageRendering: "pixelated",
  },
};

export default AboutUs;

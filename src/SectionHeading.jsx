import React from "react";
import Divider from "./Divider";

function SectionHeading({ titleText }) {
  return (
    <div style={styles.mainDiv}>
      <div style={styles.secondDiv}>
        <Divider />
      </div>
      <div style={styles.txtDiv}>{titleText}</div>
      <div style={styles.secondDiv}>
        <Divider />
      </div>
    </div>
  );
}

const styles = {
  mainDiv: {
    display: "flex",
    width: "100%",
    marginBottom: "2em",
    flexDiretion: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  secondDiv: {
    flexGrow: "10",
  },
  txtDiv: {
    fontFamily: "Montserrat",
    fontSize: "3em",
    fontWeight: "400",
    padding: "0em 1.5em",
  },
};

export default SectionHeading;

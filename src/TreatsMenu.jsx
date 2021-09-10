import React from "react";
import SectionHeading from "./SectionHeading";
import MenuCard from "./MenuCard";
import DM from "./assets/doozy media from wix/DM.jpg";
import dac from "./assets/doozy media from wix/dac.jpg";
import of from "./assets/doozy media from wix/of.jpg";
import healer from "./assets/doozy media from wix/healer.jpg";
import khaara from "./assets/doozy media from wix/khaara.jpg";
import assorted from "./assets/doozy media from wix/assorted.jpg";
import dmBites from "./assets/doozy media from wix/dmBites.jpg";
import dacBites from "./assets/doozy media from wix/dacBites.jpg";
import pupNibbles from "./assets/doozy media from wix/pupNibbles.jpg";
import bananaLoaf from "./assets/doozy media from wix/bananaLoaf.jpg";
import spLoaf from "./assets/doozy media from wix/spLoaf.jpg";

const dmTxt =
  "Indulge in our favorite triple chocolate fudge cookie and satisfy the cookie monster within you.";

const dacTxt =
  "Dunk-a-Chunk of the classic chocolate chunk cookie with melt in the mouth milk chocolate & dark chocolate chunks";
const ofTxt =
  "Feel at home with our heartwarming oats and walnut bite-sized cookies.";
const healerTxt =
  "Power up with our grandma's beverage recipe that has the healing power of turmeric, jaggery and ginger in a cookie.";
const khaaraTxt =
  "Our traditional savory cookie loaded with curry leaves, dry fenugreek, carom seeds and green chilli with a hint of sweetness";
const assortedTxt =
  "Our 2 dozen assorted cookies box when you can't quite decide on one type.";
const dmBitesTxt =
  "The goodness of Doozy Monster in a bite-sized snack. Get a bag of 30 and dunk it, top it or snack on it!";
const dacBitesTxt =
  "The goodness of Dunk-a-Chunk in a bite-sized snack. Get a bag of 30 and dunk it, top it or snack on it!";
const pupNibblesTxt =
  "Treat your four legged friend with bite-sized cookies made with sweet potato, cilantro, dried cranberries, peanut butter, oats and whole wheat flour.";
const bananaLoafTxt =
  "Moist and soft with the perfect sweetness to keep you wanting for more. Doozy's all time bestselling Banana Bread Loaf Cake.";
const spLoafTxt =
  "Zesty, mildly sweet and spiced orange loaf cake topped with candied orange to pair with your hot cuppa.";

function TreatsMenu() {
  return (
    <div style={styles.main} id="treatsMenu">
      <SectionHeading titleText="Treats Menu" />
      <MenuCard sourceImage={DM} titleText="Doozy Monster" descTxt={dmTxt} />
      <MenuCard sourceImage={dac} titleText="Dunk-a-Chunk" descTxt={dacTxt} />
      <MenuCard sourceImage={of} titleText="Old-Fashioned" descTxt={ofTxt} />
      <MenuCard sourceImage={healer} titleText="Healer" descTxt={healerTxt} />
      <MenuCard
        sourceImage={khaara}
        titleText="Khaara Biscuit"
        descTxt={khaaraTxt}
      />
      <MenuCard
        sourceImage={assorted}
        titleText="Assorted Box"
        descTxt={assortedTxt}
      />
      <MenuCard
        sourceImage={dmBites}
        titleText="Doozy Monster Bites"
        descTxt={dmBitesTxt}
      />
      <MenuCard
        sourceImage={dacBites}
        titleText="Dunk-a-Chunk Bites"
        descTxt={dacBitesTxt}
      />
      <MenuCard
        sourceImage={pupNibbles}
        titleText="Pup Nibbles"
        descTxt={pupNibblesTxt}
      />
      <MenuCard
        sourceImage={bananaLoaf}
        titleText="Banana Bread Loaf"
        descTxt={bananaLoafTxt}
      />
      <MenuCard
        sourceImage={spLoaf}
        titleText="Spiced Orange Loaf"
        descTxt={spLoafTxt}
      />
      <div></div>
    </div>
  );
}

const styles = {
  main: {
    margin: "0em 5em",
    marginTop: "3em",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  img: {
    height: "20em",
    width: "auto",
  },
};

export default TreatsMenu;

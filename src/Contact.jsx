import React from "react";
import SectionHeading from "./SectionHeading";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

function Contact() {
  return (
    <div className="divContactMain" id="contacts">
      <SectionHeading titleText="Contact" />
      <p className="pContactPhoneNumber">+1 214 600 2079</p>
      <div className="divContactIcons">
        <FaWhatsapp
          size="2em"
          href="www.google.com"
          style={{ cursor: "pointer" }}
          onClick={() =>
            window.open(
              "https://api.whatsapp.com/send/?phone=12146002079&text&app_absent=0",
              "_blank"
            )
          }
        />
        <FaInstagram
          size="2em"
          style={{ cursor: "pointer" }}
          onClick={() =>
            window.open("https://www.instagram.com/getdoozy/", "_blank")
          }
        />
      </div>
    </div>
  );
}

export default Contact;

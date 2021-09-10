import React from "react";
import AboutUs from "./AboutUs";

import Header from "./Header";
import MiddleVideo from "./MiddleVideo";
import TestimonialsSection from "./TestimonialsSection";
import TreatsMenu from "./TreatsMenu";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <AboutUs id="aboutUs" />
      <MiddleVideo />
      <TreatsMenu id="treatsMenu" />
      <TestimonialsSection id="testimonials" />
      <Contact id="contacts" />
      <Footer />
    </div>
  );
}

export default App;

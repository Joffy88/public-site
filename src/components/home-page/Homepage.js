import React from "react";
import Navbar from "../key/Navbar";
import LandingScreen from "./FrontPage";
import ContactLinks from "../key/ContactLinks";
import GalleryApp from "../portfolio-gallery/GalleryApp";

function Homepage() {
  return (
    <div id="homepage">
      <Navbar />
      <LandingScreen />
      <GalleryApp />
      <ContactLinks />
    </div>
  );
}

export default Homepage;

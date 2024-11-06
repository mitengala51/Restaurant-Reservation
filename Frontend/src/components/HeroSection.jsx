import React from "react";
import Navbar from "./Navbar";

export default function HeroSection() {
  return (
    <section id="heroSection" className="heroSection">
        <Navbar />
      <div className="container">
        <div className="banner">
          <div className="largeBox">
            <h1 className="title">Delecious</h1>
          </div>
          <div className="combined_boxes">
            <div className="imageBox">
              <img src="/hero1.png" alt="hero1"></img>
            </div>
            <div className="TextandLogo">
              <div className="textWithSvg">
                <h1 className="title">Food</h1>
                <h1 className="title dishes_title">Dishes</h1>
                <img src="/threelines.svg" alt="three" />
              </div>
              <img src="/logo.svg" alt="logo" className="logo"></img>
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="imageBox">
            <img src="/hero2.png" alt="hero2"></img>
          </div>
          <h1 className="title dishes_title">Dishes</h1>
        </div>
      </div>
    </section>
  );
}

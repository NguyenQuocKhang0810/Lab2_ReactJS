import React from "react";
import Header from "./Header";

const Banner = () => {
  return (
    <div className="hero_area">
      <Header></Header>
      <div className="bg-box">
        <img src="/pizza1.jpg" alt="" />
        <div className="overlay"></div>
      </div>
    </div>
  );
};

export default Banner;

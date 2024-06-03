"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Page = () => {
  var settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
    autoPlaySpeed: 2000,
  };
  return (
    <>
      <Slider {...settings} className="h-96">
        <div className="relative h-96 w-full rounded-lg bg-cover bg-center flex items-center justify-center">
          <img
            src="/banner.webp"
            alt=""
            className="absolute w-full h-full object-cover"
          />
          <div className="absolute w-full h-full bg-black bg-opacity-75">
            <div>
              <h1 className="text-white ">For Millions of Users</h1>
              <h1 className="text-white text-2xl bg-[#FF9315] ">
                Embracing Technology Empowering Business
              </h1>
            </div>
          </div>
        </div>
        <div>
          <h1>READY TO BUILD YOUR WEB PRESENCE?</h1>
          <h1>Embracing Technology Empowering Business</h1>
        </div>
      </Slider>
    </>
  );
};

export default Page;

"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Page(){
  var settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <>
      <div>
        <Slider {...settings}>
        <div className="relative lg:h-screen h-[550px] w-full rounded-lg bg-cover bg-center flex items-center justify-center">
          <img
            src="banner3.avif"
            alt=""
            className="absolute w-full h-full object-cover"
          />
          <div className="absolute w-full h-full bg-black bg-opacity-75 text-center lg:gap-0 gap-5 flex flex-col justify-center items-center ">
            <div className="space-y-5">
              <h1 className="text-white font-bold text-sm">For Millions of Users</h1>
              <h1 className="text-white  md:text-5xl text-xl font-bold">
                <span className="sha">Transforming Lives</span>,One Smile at a Time
              </h1>
              <button className="bg-white p-3 px-8 rounded-md w-fit hover:bg-primary duration-500 hover:text-white">Get a Quote</button>
            </div>
          </div>

        </div>
        <div className="relative lg:h-screen h-[550px] w-full rounded-lg bg-cover bg-center flex items-center justify-center">
          <img
            src="banner3.avif"
            alt=""
            className="absolute w-full h-full object-cover"
          />
          <div className="absolute w-full h-full bg-black bg-opacity-75 text-center lg:gap-0 gap-5 flex flex-col justify-center items-center ">
            <div className="space-y-5">
              <h1 className="text-white font-bold text-sm">For Millions of Users</h1>
              <h1 className="text-white  md:text-5xl text-xl font-bold">
                <span className="sha">At the heart of everything we do,</span> 
              </h1>
              <h1 className="text-white  md:text-5xl text-xl font-bold">See how we've made a difference..</h1>
              <button className="bg-white p-3 px-8 rounded-md w-fit hover:bg-primary duration-500 hover:text-white">Get a Quote</button>
            </div>
          </div>

        </div>
        </Slider>
      </div>
    </>
  );
};



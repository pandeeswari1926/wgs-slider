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
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <>
      <Slider {...settings} className="lg:h-screen h-[550px]">
        <div className="relative lg:h-screen h-[550px] w-full rounded-lg bg-cover bg-center flex items-center justify-center">
          <img
            src="/banner.webp"
            alt=""
            className="absolute w-full h-full object-cover"
          />
          <div className="absolute w-full h-full bg-black bg-opacity-75 lg:text-start text-center lg:gap-0 gap-5 flex-col-reverse flex lg:flex-row items-center justify-center ">
            <div className=" lg:w-1/2 md:pl-10 space-y-7">
              <h1 className="text-white font-bold text-sm">For Millions of Users</h1>
              <h1 className="text-white  md:text-5xl text-xl font-bold">
                <span className="sha">Embracing Technology</span> Empowering Business
              </h1>
              <button className="bg-white p-3 px-8 rounded-md w-fit hover:bg-primary duration-500 hover:text-white">Get a Quote</button>
            </div>
            <div className="lg:w-1/2 lg:block  px-5">
                <img src="image2.png" alt="" className="w-full h-full"/>
            </div>
          </div>

        </div>
        <div className="relative lg:h-screen h-[550px] w-full rounded-lg bg-cover bg-center flex items-center justify-center">
          <img
            src="/banner.webp"
            alt=""
            className="absolute w-full h-full object-cover"
          />
          <div className="absolute w-full h-full bg-black bg-opacity-75 lg:text-start text-center flex lg:gap-0 gap-5 flex-col-reverse lg:flex-row items-center justify-center ">
            <div className=" lg:w-1/2 md:pl-10 space-y-7">
              <h1 className="text-white  md:text-5xl text-xl font-bold">
                <span className="sha">READY TO BUILD YOUR </span> WEB PRESENCE?
              </h1>
              <p className="text-white text-sm font-bold leading-loose">GET A HEAD START WITH FREE DOMAIN & HOSTING LIMITED TIME OFFER, DON'T MISS OUT!</p>
              <button className="bg-white p-3 px-8 rounded-md w-fit hover:bg-primary duration-500 hover:text-white">Get a Quote</button>
            </div>
            <div className="lg:w-1/2 lg:block px-5">
                <img src="/image1.png" alt="" className="w-full h-full"/>
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
};

export default Page;

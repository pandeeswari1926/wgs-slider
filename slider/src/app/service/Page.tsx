"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CountUp from "react-countup";

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
      <Slider {...settings}>
        <div className="w-full h-full  lg:h-[550px] xl:h-[650px] lg:bg-contain cover  relative bg-no-repeat pb-5">
          <div>
            <div className="w-1/2">
              <div className="lg:absolute top-10 lg:pl-16 left-4">
                <div className="flex flex-col gap-3 w-full  pt-10   lg:pt-0 lg:w-[90%] justify-center md:justify-start md:items-start items-center text-justify md:text-start lg:px-0 md:px-10 px-7">
                  <p className="text-primary font-semibold md:text-xl text-3xl lg:pt-6 ">
                    WHO WE ARE
                  </p>
                  <p className="font-semibold sm:text-base text-sm md:text-3xl text-grayColor ">
                    Empowering Your Digital Success - WHY Global Services
                  </p>
                  <p className=" text-sm  text-gray-500">
                    We are an innovative IT company dedicated to transforming
                    businesses through cutting-edge technology solutions. With a
                    team of skilled professionals and a passion for excellence,
                    we provide a comprehensive range of IT services tailored to
                    meet the unique needs of our clients.
                  </p>
                </div>
              </div>
              <div>
                <div className="lg:absolute relative lg:w-[70%] w-full md:top-[65%] lg:top-[43%] xl:top-[40%]  md:left-0 pl-10 z-10">
                  <div className="grid lg:grid-cols-4 grid-cols-2 p-2 justify-evenly">
                    <div className="lg:w-[60%] w-[70%]">
                      <img alt="" src="" />
                      <p className="text-center flex flex-row justify-center gap-1 md:text-3xl text-xl font-semibold pt-4 text-gray-500">
                        <CountUp
                          start={0}
                          end={100}
                          duration={3}
                          delay={0}
                        />
                        <p>+</p>
                      </p>
                      <p className="text-xs text-center text-gray-500">
                      Reduction in IT costs for many of our clients
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 absolute">
              <img src="/banner2.webp" alt="" />
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
};

export default Page;

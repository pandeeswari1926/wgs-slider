"use client"
import React, { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Page(){
    const [prev,setprev]=useState(0)
    useEffect(()=>{
        const interval=setInterval(()=>{
           setprev(prev=>(prev+3+1)%3)

        },6000)
        return ()=>clearInterval(interval)
    },[])
    useEffect(()=>{
        console.log(prev)
    })
    return(
         
       <div  className=" lg:h-screen md:h-[600px] h-[500px] w-full relative overflow-hidden">
    <img src="/aigen.jpg" className="w-full h-full -z-10 absolute top-0 left-0 object-cover"></img>
    <div className="bg-black bg-opacity-75 -z-10 absolute top-0 left-0 w-full h-full"></div>
{prev==0&&<div className="w-full h-full flex gap-5 justify-center md:justify-between items-center px-5 md:px-10 2xl:px-16">
        <div className="lg:w-[60%] h-full">
            <div className="w-full flex  items-center  h-full">
            <div className=" keys flex flex-col  md:justify-center justify-center md:items-start items-center space-y-10">
             
              <h1 className="text-white  md:text-4xl sm:text-2xl text-lg font-bold">
              <p className="text-white font-bold md:text-start text-center text-sm py-3">Boost your brand with</p>
                <div className="flex flex-col justify-center  md:items-start items-center gap-2"><span className="sha lg:text-6xl 2xl:text-8xl md:text-4xl sm:text-5xl lastwidth:text-4xl text-2xl">Digital Marketing</span> <span>Magic Today</span></div>
              </h1>
              <p className="bg-primary text-white font-semibold  px-8 py-3 rounded-md w-fit hover:bg-white duration-500 hover:text-black">Get a Quote</p>
            </div>

            </div>
        </div>
        <div className="md:w-[40%] lg:w-[50%] md:block hidden images relative">
            <div className="bg-primary w-48 h-48 absolute -z-10 -left-3 -top-3"></div>
            <div className="bg-primary w-28 h-28 absolute -z-10 -right-3 -bottom-3"></div>
            <img src="/digi.jpg" className="drop-shadow-xl object-cover  w-full md:h-[300px] h-[200px] lg:h-[380px] 2xl:h-[500px]"></img>

        </div>

    </div>}
{prev==1&&<div className="w-full h-full flex gap-5 justify-center md:justify-between items-center px-5 md:px-10 2xl:px-16">
        <div className="lg:w-[60%] h-full">
            <div className="w-full flex  items-center  h-full">
            <div className=" keys flex flex-col  md:justify-center justify-center md:items-start items-center space-y-10">
             
              <h1 className="text-white  md:text-4xl sm:text-2xl text-lg font-bold">
              <p className="text-white font-bold md:text-start text-center text-sm py-3">Transform your business with</p>
                <div className="flex flex-col justify-center  md:items-start items-center gap-2"><span className="sha lg:text-6xl 2xl:text-8xl md:text-4xl sm:text-5xl lastwidth:text-4xl text-2xl">Web Development</span> <span>Excellence Today</span></div>
              </h1>
              <p className="bg-primary text-white  px-8 py-3 rounded-md w-fit hover:bg-white duration-500 hover:text-black">Get a Quote</p>
            </div>

            </div>
        </div>
        <div className="md:w-[40%] lg:w-[50%] md:block hidden images relative">
            <div className="bg-primary w-48 h-48 absolute -z-10 -left-3 -top-3"></div>
            <div className="bg-primary w-28 h-28 absolute -z-10 -right-3 -bottom-3"></div>
            <img src="/aigen.jpg" className="drop-shadow-xl object-cover  w-full md:h-[300px] h-[200px] lg:h-[380px] 2xl:h-[500px]"></img>

        </div>

    </div>}
{prev==2&&<div className="w-full h-full flex gap-5 justify-center md:justify-between items-center px-5 md:px-10 2xl:px-16">
        <div className="lg:w-[60%] h-full">
            <div className="w-full flex  items-center  h-full">
            <div className=" keys flex flex-col  md:justify-center justify-center md:items-start items-center space-y-10">
             
              <h1 className="text-white  md:text-4xl sm:text-2xl text-lg font-bold">
              <p className="text-white font-bold md:text-start text-center text-sm py-3">Transforming Ideas into Visual Masterpieces</p>
                <div className="flex flex-col justify-center  md:items-start items-center gap-2"><span className="sha lg:text-6xl 2xl:text-8xl md:text-4xl sm:text-5xl lastwidth:text-4xl text-2xl">Graphic Design</span> <span>Empowering Business</span></div>
              </h1>
              <p className="bg-primary  text-white px-8 py-3 rounded-md w-fit hover:bg-white duration-500 hover:text-black">Get a Quote</p>
            </div>

            </div>
        </div>
        <div className="md:w-[40%] lg:w-[50%] md:block hidden images relative">
            <div className="bg-primary w-48 h-48 absolute -z-10 -left-3 -top-3"></div>
            <div className="bg-primary w-28 h-28 absolute -z-10 -right-3 -bottom-3"></div>
            <img src="/grap.jpg" className="drop-shadow-xl object-cover  w-full md:h-[300px] h-[200px] lg:h-[380px] 2xl:h-[500px]"></img>

        </div>

    </div>}
{/* {prev==1&&<div className="w-full h-full flex  items-center px-10">
        <div className="lg:w-[60%] h-full">
            <div className="w-full flex justify-center items-center  h-full">
            <div className=" keys space-y-10">
             
              <h1 className="text-white  md:text-5xl text-xl font-bold">
              <p className="text-white font-bold text-sm py-1">For Millions of Users</p>
                <span className="sha text-7xl ">Web Development</span> Empowering Business
              </h1>
              <button className="bg-primary buttons p-3 px-8 rounded-md w-fit hover:bg-white duration-500 hover:text-black">Get a Quote</button>
            </div>

            </div>
        </div>
        <div className="lg:w-[40%] images relative">
            <div className="bg-primary w-48 h-48 absolute -z-10 -left-3 -top-3"></div>
            <div className="bg-primary w-28 h-28 absolute -z-10 -right-3 -bottom-3"></div>
            <img src="/banner.webp" className="drop-shadow-xl h-[350px]  w-full"></img>

        </div>

    </div>}
{prev==2&&<div className="w-full h-full flex lg:flex-row flex-col justify-center items-center px-10">
        <div className="lg:w-[60%] h-full">
            <div className="w-full flex  items-center  h-full">
            <div className="keys space-y-10">
             
              <h1 className="text-white  md:text-5xl text-xl font-bold">
              <p className="text-white font-bold text-sm py-1">For Millions of Users</p>
                <div className="flex flex-col">
                <span className="sha text-7xl ">Digital Marketing</span> <span>Empowering Business</span>
                </div>
              </h1>
              <button className="bg-primary buttons p-3 px-8 rounded-md w-fit hover:bg-white duration-500 hover:text-black">Get a Quote</button>
            </div>

            </div>
        </div>
        <div className="lg:w-[40%] relative images">
            <div className="bg-primary w-48 h-48 absolute -z-10 -left-3 -top-3"></div>
            <div className="bg-primary w-28 h-28 absolute -z-10 -right-3 -bottom-3"></div>
            <img src="/banner.webp" className="drop-shadow-xl h-[350px]  w-full"></img>

        </div>

    </div>} */}
    
</div>
        
    )
}
import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Page(){
    return(
         
       <div  className="h-screen w-full relative overflow-hidden">
    <img src="/aigen.jpg" className="w-full h-full absolute top-0 left-0 object-cover"></img>
    <div className="bg-black bg-opacity-75 absolute top-0 left-0 w-full h-full"></div>
    <div className="w-full h-full">
        <div className="lg:w-[60%] h-full">
            <div className="w-full h-full">
                

            </div>
        </div>
        <div className="lg:w-[40%]">

        </div>

    </div>
</div>
        
    )
}
'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import MegaTab from "../mega-tab";


const HomeHero = () => {

  return (
    
    <section className="relative z-0 py-[80px] h-[425px] grid place-items-center mb-5 lg:mb-[80px]">
       
      <div className=" absolute left-0 top-0 w-full h-full  overlay z-0"></div>
      <Image
        className="absolute left-0 top-0 z-[-1] w-full h-full object-cover"
        src="/images/home/home-hero-bg.png"
        alt="Find Universities Abroad"
        width={2000}
        height={800}
        priority
      />
      <div className="container relative z-10">
        <div className="flex flex-col items-start justify-center lg:max-w-[600px] mx-auto w-full  z-10 mt-[-16px] h-full">
          <div className="flex flex-col items-center justify-center  w-full">
      
            <div  className= "mb-0 text-white text-center font-hello text-[48px]">
            <style>
            @import url('https://fonts.cdnfonts.com/css/hello');
           </style>
              
              Explore the world!</div>
            <div>
              <h1 className=" text-white mb-0 display-one text-center">
                Find your Next Stay
              </h1>
              <p className="text-white mb-0 text-center">
                Search low prices on tours, hotels, holiday, visa and much
                more...
              </p>
            </div>
          </div>
        </div>
      </div>
      <MegaTab />
    </section>
  );
};

export default HomeHero;

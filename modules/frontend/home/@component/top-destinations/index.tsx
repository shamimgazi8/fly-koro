"use client";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import TopDestinationCard from "@/modules/frontend/@common/top-destination-card";
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { AiOutlineRight } from "react-icons/ai";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
const data = [
  { img: "/images/top-destination/Ellipse 1 (1).png", country: "India", plan: "12 Tour Plans" },
  { img: "/images/top-destination/Ellipse 1 (2).png", country: "Singapore", plan: "12 Tour Plans" },
  {
    img: "/images/top-destination/Ellipse 1 (3).png",
    country: "Saudi Arabia",
    plan: "12 Tour Plans",
  },
  { img: "/images/top-destination/Ellipse 1 (4).png", country: "Nepal", plan: "12 Tour Plans" },
  { img: "/images/top-destination/Ellipse 1 (5).png", country: "Australia", plan: "12 Tour Plans" },
  { img: "/images/top-destination/Ellipse 1 (6).png", country: "USA", plan: "12 Tour Plans" },
  { img: "/images/top-d-1.jpg", country: "USA", plan: "12 Tour Plans" },
  { img: "/images/top-d-1.jpg", country: "USA", plan: "12 Tour Plans" },
  { img: "/images/top-d-1.jpg", country: "USA", plan: "12 Tour Plans" },
  { img: "/images/top-d-1.jpg", country: "USA", plan: "12 Tour Plans" },
];

const TopDestinations = () => {
  const [isActive, setIsActive] = useState(0);

  const wrapperRef = useRef(null);
  function useOutsideAlerter(ref: any) {
    useEffect(() => {
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsActive(0);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  useOutsideAlerter(wrapperRef);

  const nexHandle = () => {
    setIsActive(1);
  };
  const prevHandle = () => {
    setIsActive(2);
  };

  interface dataTypes {
    className?: string;
    style?: string;
    onClick?: Function | any;
  }

  function NextArrow(props: dataTypes) {
    const { className, onClick } = props;

    return (
      <div
        onClick={() => {
          onClick();
          nexHandle();
        }}
        className={`${className} ${
          isActive === 1 ? `arrow_active` : ``
        } believe_innovation_slider_arrow believe_innovation_slider_arrow_next work_arrow`}
      >
        {/* <span className="pointer-events-none inline-block w-[6px] h-[6px] rounded-full absolute left-[-10px] bg-body country_custom_arrow"></span> */}
        <FiChevronRight className='p-1' />
      </div>
    );
  }

  function PrevArrow(props: dataTypes) {
    const { className, onClick } = props;
    return (
      <div
        onClick={() => {
          onClick();
          prevHandle();
        }}
        className={`${className} ${
          isActive === 2 ? `arrow_active` : ``
        } believe_innovation_slider_arrow  believe_innovation_slider_arrow_prev work_arrow`}
      >
        <FiChevronLeft className="text-paragraph p-1" />
      </div>
    );
  }
  const settings = {
    infinite: true,
    autoplaySpeed: 3000,
    slidesToShow: 6,
    autoplay: true,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    className: "believe_innovation",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          autoplay: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
    ],
  };

  return (
    <section className="pt-[78px]">
      <div className="container ">
        <div>
          <h1 className=" text-[32px] leading-[44px] font-semibold text-[#000057] text-center mb-[40px]">Top Destinations</h1>
        </div>
        <Slider {...settings}>
          {data?.map((item: any, i: any) => {
            return (
              <div className=" grid grid-cols-6 gap-[30px]" key={i}>
                <TopDestinationCard data={item} />
              </div>
            ); 
          })}
        </Slider>
      </div>
    </section>
  );
};

export default TopDestinations;

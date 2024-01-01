"use client";
import React from "react";
import { Radio, Select, Space } from "antd";

import TourCart from "./@components/TourCart";
const EventLanding = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className=" flex flex-col gap-[30px]">
            <div className="w-full flex justify-between items-center mt-[40px]">
              <div>
                <h1 className="text-[18px] text-[#00000B] leading-6 font-semibold mb-[2px]">
                  10 Available Tour
                </h1>
                <p className=" text-[13px] font-normal leading-5 text-[#A5A2AD] mb-0">
                  Price includes VAT & Tex
                </p>
              </div>
              <div>
                <Radio.Group defaultValue="a" buttonStyle="solid">
                  <Radio.Button value="a">Best Match</Radio.Button>
                  <Radio.Button value="b">Low Price</Radio.Button>
                </Radio.Group>
              </div>
            </div>
            <TourCart
              SRC={"/images/Event/sajek.png"}
              TourName={"Sajek Valley Tour"}
            />
            <TourCart
              SRC={"/images/Event/kuakata.png"}
              TourName={"Kuakata Tour"}
            />
            <TourCart
              SRC={"/images/Event/cox.png"}
              TourName={"Coxs Bazar Tour"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default EventLanding;

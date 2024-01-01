"use client";
import React from "react";
import { Radio, Select, Space } from "antd";

import TourCart from "./@components/TourCart";

const HolidaysDetails = () => {
  return (
    <>
      <div className="w-full bg-[#F6F6F7] flex items-center justify-center py-5">
        <div className="bg-white py-5 px-[34px] rounded">
          <Space wrap>
            <Select
              defaultValue="Select holiday Destinations"
              style={{ width: 545 }}
              options={[
                { value: "Bandarban", label: "Bandarban" },
                { value: "Bagerhat", label: "Bagerhat" },
                { value: "Sundarban", label: "Sundarban" },
              ]}
            />
            <Select
              defaultValue="Select Day"
              style={{ width: 545 }}
              options={[
                { value: "1", label: "1" },
                { value: "2", label: "2" },
                { value: "3", label: "3" },
              ]}
            />
          </Space>
        </div>
      </div>
      <section>
        <div className="container">
          <div>
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
              SRC={"/images/holidaysDetails/sundarban.png"}
              TourName={"Sundarban Safari"}
            />
            <TourCart
              SRC={"/images/holidaysDetails/bagerhat.png"}
              TourName={"Bagerhat Tour"}
            />
            <TourCart
              SRC={"/images/holidaysDetails/Barishal.png"}
              TourName={"Barishal Tour"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HolidaysDetails;

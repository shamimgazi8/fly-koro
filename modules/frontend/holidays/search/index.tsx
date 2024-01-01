"use client";
import type { RadioChangeEvent } from "antd";
import { Checkbox, Collapse, Input, Radio, Slider } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import { SearchProps } from "antd/es/input";
import Link from "next/link";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

import { IoMoonOutline } from "react-icons/io5";
import { LuSun, LuSunset } from "react-icons/lu";
import OfferCart from "./@components/Offercart";
import SB from "./@components/SearchBox";

const { Search } = Input;

const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
  console.log(info?.source, value);
const { Panel } = Collapse;
const HolidaysSearch = () => {
  // const onChangeRadio = (key: string | string[]) => {
  //   console.log(key);
  // };
  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const [value, setValue] = useState(1);

  const [seemore, setSeemore] = useState(false);

  const [sb, setsb] = useState(false);

  const onChangeRadio = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const onChangeChecked = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
    if (e.target.checked === true) {
    }
  };
  const Seemore = () => {
    return (
      <button
        onClick={() => setSeemore(true)}
        className={
          seemore
            ? "hidden"
            : "h-auto w-[60px] text-[13px] leading-5 font-normal text-[#2689FF]"
        }
      >
        see more
      </button>
    );
  };

  return (
    <>
      <section className="bg-[#F6F6F7] pb-2 mb-[60px] ">
        <div className="max-w-[1170px] w-full mx-auto py-3 flex justify-between items-center">
          <div>
            <p className="mb-0 text-[#A5A2AD]">Tour Location</p>
            <h1 className="h3 mb-1">COX’S BAZAR</h1>
          </div>
          <div
            className={
              sb === true
                ? "px-2 py-2 bg-[#EBEBF4] text-[#00006D] rounded hover:bg-[#bebeef] transition-all cursor-pointer"
                : "hidden"
            }
            onClick={() => setsb(false)}
          >
            <RxCross2 />
          </div>

          <Link
            onClick={() => setsb(true)}
            href="#"
            className={
              sb === true
                ? "hidden"
                : "rounded-md bg-[#FF9100] text-[#FFFFFF] text-[15px] font-semibold leading-[22px] px-5 py-[10px] transition-all hover:bg-[#00006D] hover:text-white"
            }
          >
            Modify Search
          </Link>
        </div>
        {sb === true ? <SB /> : ""}
      </section>

      <section>
        <div className="container">
          <div className="grid grid-cols-[270px_1fr] gap-[30px]">
            <div className="flex flex-col gap-5">
              <div className="flex justify-between items-center ">
                <p className="mb-0 text-[15px]">Filter</p>
                <button className="btn btn-primary rounded-md px-[14px] py-[6px] text-[13px] tracking-[0.43px] transition-all ">
                  Reset Now
                </button>
              </div>
              <Collapse
                defaultActiveKey={["1"]}
                expandIconPosition="end"
                className="test "
              >
                <Panel header="Filter Price" key="1">
                  <div className="flex flex-col gap-4 ">
                    <div>
                      <Slider range defaultValue={[20, 50]} />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex flex-col gap-1 w-[109px] items-start justify-start border rounded px-3 pt-1 pb-2">
                        <p className="text-[#A5A2AD]  mb-0 text-[13px] font-normal leading-[18px] ">
                          Min price
                        </p>
                        <h5 className="w-auto h-auto mb-0 font-semibolt leading-[14px]">
                          TK 2000
                        </h5>
                      </div>

                      <div className="flex flex-col gap-1 w-[109px] items-start justify-start border rounded px-3 pt-1 pb-2">
                        <p className="text-[#A5A2AD]  mb-0 text-[13px] font-normal leading-[18px] ">
                          Min price
                        </p>
                        <h5 className="w-auto h-auto mb-0 font-semibolt leading-[14px]">
                          TK 2000
                        </h5>
                      </div>
                    </div>
                  </div>
                </Panel>
              </Collapse>
              <Collapse
                defaultActiveKey={["1"]}
                // onChange={onChangeRadio}
                expandIconPosition="end"
              >
                <Panel header="Tour Type" key="4">
                  <Radio.Group
                    onChange={onChange}
                    value={value}
                    className=" flex flex-col gap-[8px]"
                  >
                    <Radio value={1}>One Way</Radio>
                    <Radio value={2}>Round Way</Radio>
                    <Radio value={3}>Multi City</Radio>
                  </Radio.Group>
                </Panel>
              </Collapse>
              <Collapse defaultActiveKey={["1"]} expandIconPosition="end">
                <Panel header="Duration" key="4">
                  <div className="flex flex-col gap-2 text-[13px] font-normal leading-5">
                    <Checkbox>
                      <p className="mb-0 ml-3">Less than 6 hours</p>
                    </Checkbox>
                    <Checkbox>
                      <p className="mb-0 ml-3">6-12 hours</p>
                    </Checkbox>
                    <Checkbox>
                      <p className="mb-0 ml-3">12-24 hours</p>
                    </Checkbox>
                    <Checkbox>
                      <p className="mb-0 ml-3">24+ hours</p>
                    </Checkbox>
                    <Seemore />

                    {seemore === true ? (
                      <>
                        <Checkbox>
                          <p className="mb-0 ml-3">2 Days</p>
                        </Checkbox>
                        <Checkbox>
                          <p className="mb-0 ml-3">3 Days</p>
                        </Checkbox>
                        <button
                          onClick={() => setSeemore(false)}
                          className="h-auto w-[60px] text-[13px] leading-5 font-normal text-[#2689FF] "
                        >
                          see less
                        </button>
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                </Panel>
              </Collapse>
              <Collapse defaultActiveKey={["1"]} expandIconPosition="end">
                <Panel header="Time" key="4">
                  <div className="grid grid-cols-4 border divide-x-2 rounded">
                    <div className="  flex flex-col justify-center items-center gap-1 px-[10px] py-2 cursor-pointer">
                      <LuSun className="h-[22px] w-[22px] text-[#9999C5] hover:text-primary duration-300" />
                      <p className="mb-0">00-06</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-1 px-[10px] py-2 cursor-pointer">
                      <LuSun className="h-[22px] w-[22px] text-[#9999C5] hover:text-primary duration-300" />
                      <p className="mb-0">00-06</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-1 px-[10px] py-2 cursor-pointer">
                      <LuSunset className="h-[22px] w-[22px] text-[#9999C5] hover:text-primary duration-300" />
                      <p className="mb-0">12-18</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-1 px-[10px] py-2 cursor-pointer">
                      <IoMoonOutline className="h-[22px] w-[22px] text-[#9999C5] hover:text-primary duration-300" />
                      <p className="mb-0">18-00</p>
                    </div>
                  </div>
                </Panel>
              </Collapse>

              <Collapse defaultActiveKey={["1"]} expandIconPosition="end">
                <Panel header="Location Range" key="4">
                  <p>
                    Distance from the city centre <span>25 KM</span>
                  </p>
                  <Slider defaultValue={30} />
                </Panel>
              </Collapse>

              <Collapse defaultActiveKey={["1"]} expandIconPosition="end">
                <Panel header="Tags" key="4">
                  <div className="flex flex-col gap-2 text-[13px] font-normal leading-5">
                    <Checkbox>
                      <p className="mb-0 ml-3">Exclusive</p>
                    </Checkbox>
                    <Checkbox>
                      <p className="mb-0 ml-3">Bike Rentels</p>
                    </Checkbox>
                    <Checkbox>
                      <p className="mb-0 ml-3">Beach Activities</p>
                    </Checkbox>
                    <Seemore />

                    {seemore === true ? (
                      <>
                        <Checkbox>
                          <p className="mb-0 ml-3">Adventure</p>
                        </Checkbox>
                        <Checkbox>
                          <p className="mb-0 ml-3">tenting</p>
                        </Checkbox>
                        <button
                          onClick={() => setSeemore(false)}
                          className="h-auto w-[60px] text-[13px] leading-5 font-normal text-[#2689FF] "
                        >
                          see less
                        </button>
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                </Panel>
              </Collapse>
            </div>

            <div className=" flex flex-col gap-6">
              <div className="w-[870px] flex justify-between items-center">
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
              <div className=" flex flex-col gap-5">
  
              <OfferCart
                SRC={"/images/holidaySearch/cox3.png"}
                HotelName={"Dhaka to Cox Bazar"}
                />
              <OfferCart
                SRC={"/images/holidaySearch/cox2.png"}
                HotelName={"Dhaka to Cox Bazar"}
                />
              <OfferCart
                SRC={"/images/holidaySearch/cox1.png"}
                HotelName={"Dhaka to Cox Bazar"}
                />
                </div>
              <div className=" flex justify-between bg-[#F6F6F7] rounded mt-8 px-[30px] py-[20px]">
                <h1 className=" mb-0 text-black text-[22px] leading-7 font-bold text-center mt-1">
                  Need a Customized Tour?
                </h1>
                <button className="btn bg-secondary text-white hover:bg-primary rounded transition-all duration-300">
                  Request Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HolidaysSearch;

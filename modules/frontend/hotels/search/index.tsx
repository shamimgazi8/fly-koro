"use client";
import { Collapse, CollapseProps } from "antd";
import type { RadioChangeEvent } from "antd";
import { useState } from "react";
import { Radio, Select } from "antd";
import { Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import Link from "next/link";
import React from "react";
import { Slider, Switch } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import { IoIosStar } from "react-icons/io";

import { Input, Space } from "antd";
import { SearchProps } from "antd/es/input";

import OfferCart from "./@component/Offercart";
import SB from "./@component/SearchBox";

const { Search } = Input;

const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
  console.log(info?.source, value);
const { Panel } = Collapse;

const HotelSearchResult = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
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
      <section className="bg-[#F6F6F7] pb-5 mb-[60px] container-extended ">
        <div className="max-w-[1170px] w-full mx-auto py-3 flex justify-between items-center ">
          <div>
            <h1 className="h3 mb-1">COX’S BAZAR</h1>
            <p className="mb-0 text-[#A5A2AD]">
              24th November 2023 - 26th November 2023 2 Persons - 1 Rooms
            </p>
          </div>
          <div
            className={
              sb === true
                ? "px-2 py-2 bg-[#EBEBF4] text-[#00006D] rounded hover:bg-[#bebeef] transition-all cursor-pointer"
                : "hidden"
            }
            onClick={() => setsb(false)}
          >
            <svg
              className="h-[22px] w-[22px] "
              xmlns="http://www.w3.org/2000/svg"
              width="800px"
              height="800px"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M16 8L8 16M8.00001 8L16 16"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
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
        <div className="container ">
          <div className="grid lg:grid-cols-[270px_1fr] gap-[30px] ">
            <div className="flex flex-col gap-5">
              <div className="flex justify-between items-center ">
                <p className="mb-0 text-[15px]">Filter</p>
                <button className="btn btn-primary rounded-md px-[14px] py-[6px] text-[13px] tracking-[0.43px] transition-all ">
                  Reset Now
                </button>
              </div>
              <Collapse
                defaultActiveKey={["1"]}
                onChange={onChange}
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
                onChange={onChange}
                expandIconPosition="end"
              >
                <Panel header="Search Hotel" key="4">
                  <Space direction="vertical">
                    <Search
                      className="px-10 py-6 "
                      placeholder="Search by Hotel Name"
                      onSearch={onSearch}
                      style={{
                        width: "100%",
                        padding: "0",
                        margin: "0",
                      }}
                    />
                  </Space>
                </Panel>
              </Collapse>
              <Collapse
                defaultActiveKey={["1"]}
                onChange={onChange}
                expandIconPosition="end"
              >
                <Panel header="Location Range" key="4">
                  <p>
                    Distance from the city centre <span>25 KM</span>
                  </p>
                  <Slider defaultValue={30} />
                </Panel>
              </Collapse>
              <Collapse
                defaultActiveKey={["1"]}
                onChange={onChange}
                expandIconPosition="end"
              >
                <Panel header="Property Rating" key="4">
                  <div>
                    <Checkbox
                      onChange={onChangeChecked}
                      key="2"
                      className="flex"
                    >
                      <div className="flex items-center gap-1 ml-3">
                        {new Array(1).fill(1).map((item: any, i: any) => {
                          return (
                            <IoIosStar
                              key={i}
                              className="text-[#FFDC00] h-5 w-5"
                            />
                          );
                        })}
                      </div>
                    </Checkbox>
                    <Checkbox
                      onChange={onChangeChecked}
                      key="2"
                      className="flex "
                    >
                      <div className="flex items-center gap-1 ml-3">
                        {new Array(2).fill(1).map((item: any, i: any) => {
                          return (
                            <IoIosStar
                              key={i}
                              className="text-[#FFDC00] h-5 w-5"
                            />
                          );
                        })}
                      </div>
                    </Checkbox>
                    <Checkbox
                      onChange={onChangeChecked}
                      key="2"
                      className="flex"
                    >
                      <div className="flex items-center gap-1 ml-3">
                        {new Array(3).fill(1).map((item: any, i: any) => {
                          return (
                            <IoIosStar
                              key={i}
                              className="text-[#FFDC00] h-5 w-5"
                            />
                          );
                        })}
                      </div>
                    </Checkbox>
                    <Checkbox
                      onChange={onChangeChecked}
                      key="2"
                      className="flex"
                    >
                      <div className="flex items-center gap-1 ml-3">
                        {new Array(4).fill(1).map((item: any, i: any) => {
                          return (
                            <IoIosStar
                              key={i}
                              className="text-[#FFDC00] h-5 w-5 "
                            />
                          );
                        })}
                      </div>
                    </Checkbox>
                    <Checkbox
                      onChange={onChangeChecked}
                      key="2"
                      className="flex"
                    >
                      <div className="flex items-center gap-1 ml-3">
                        {new Array(5).fill(1).map((item: any, i: any) => {
                          return (
                            <IoIosStar
                              key={i}
                              className="text-[#FFDC00] h-5 w-5"
                            />
                          );
                        })}
                      </div>
                    </Checkbox>
                  </div>
                </Panel>
              </Collapse>
              <Collapse
                defaultActiveKey={["1"]}
                onChange={onChange}
                expandIconPosition="end"
              >
                <Panel header="Meal" key="4">
                  <div className="flex flex-col gap-2 text-[13px] font-normal leading-5">
                    <Checkbox>
                      <p className="mb-0 ml-3">Breakfast</p>
                    </Checkbox>
                    <Checkbox>
                      <p className="mb-0 ml-3">Half board</p>
                    </Checkbox>
                    <Checkbox>
                      <p className="mb-0 ml-3">Full Borad</p>
                    </Checkbox>
                    <Seemore />

                    {seemore === true ? (
                      <>
                        <Checkbox>
                          <p className="mb-0 ml-3">Dinner</p>
                        </Checkbox>
                        <Checkbox>
                          <p className="mb-0 ml-3">Snaks</p>
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
              <Collapse
                defaultActiveKey={["1"]}
                onChange={onChange}
                expandIconPosition="end"
              >
                <Panel header="Property Type" key="4">
                  <div className="flex flex-col gap-2 text-[13px] font-normal leading-5">
                    <Checkbox>
                      <p className="mb-0 ml-3">Hotels</p>
                    </Checkbox>
                    <Checkbox>
                      <p className="mb-0 ml-3">Hostels</p>
                    </Checkbox>
                    <Checkbox>
                      <p className="mb-0 ml-3">Apartment</p>
                    </Checkbox>
                    <Seemore />

                    {seemore === true ? (
                      <>
                        <Checkbox>
                          <p className="mb-0 ml-3">Flats</p>
                        </Checkbox>
                        <Checkbox>
                          <p className="mb-0 ml-3">Building</p>
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
              <Collapse
                defaultActiveKey={["1"]}
                onChange={onChange}
                expandIconPosition="end"
              >
                <Panel header="Facilites & Amenities" key="4">
                  <div className="flex flex-col gap-2 text-[13px] font-normal leading-5">
                    <Checkbox>
                      <p className="mb-0 ml-3">Free Internet</p>
                    </Checkbox>
                    <Checkbox>
                      <p className="mb-0 ml-3">Shittle</p>
                    </Checkbox>
                    <Checkbox>
                      <p className="mb-0 ml-3">Parking</p>
                    </Checkbox>
                    <Seemore />

                    {seemore === true ? (
                      <>
                        <Checkbox>
                          <p className="mb-0 ml-3">Comuters</p>
                        </Checkbox>
                        <Checkbox>
                          <p className="mb-0 ml-3">Bike Parking</p>
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
              <Collapse
                defaultActiveKey={["1"]}
                onChange={onChange}
                expandIconPosition="end"
              >
                <Panel header="Points of Interest" key="4">
                  <div className="flex flex-col gap-2 text-[13px] font-normal leading-5">
                    <Checkbox>
                      <p className="mb-0 ml-3">Laboni Beach</p>
                    </Checkbox>
                    <Checkbox>
                      <p className="mb-0 ml-3">Inani Beach </p>
                    </Checkbox>
                    <Checkbox>
                      <p className="mb-0 ml-3">Dholphin More</p>
                    </Checkbox>
                    <Seemore />

                    {seemore === true ? (
                      <>
                        <Checkbox>
                          <p className="mb-0 ml-3">Marine Drive</p>
                        </Checkbox>
                        <Checkbox>
                          <p className="mb-0 ml-3">Himhori</p>
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

            <div className=" flex flex-col gap-10">
              <div className="w-[870px] flex justify-between items-center">
                <div>
                  <h1 className="text-[18px] text-[#00000B] leading-6 font-semibold mb-[2px]">
                    45 Available Hotels
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
                SRC={"/images/hotelsSearch/Rectangle 12.png"}
                HotelName={"Seagull Hotels Ltd."}
                />
              <OfferCart
                SRC={"/images/hotelsSearch/Rectangle 13.png"}
                HotelName={"Hotel Sea Moon"}
                />
              <OfferCart
                SRC={"/images/hotelsSearch/Rectangle 14.png"}
                HotelName={"Best Western Heritage"}
                />
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HotelSearchResult;

"use client";
import type { RadioChangeEvent } from "antd";
import { Radio, Select } from "antd";
import Link from "next/link";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

const MegaSearch = ({ lb }:any) => {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="flex flex-col gap-5 w-[1170px] mx-auto bg-white px-[34px] pt-5 pb-[25px] rounded-md shadow-[0_4px_60px_12px_rgba(0,0,0,0.06)]">
      <div className="flex justify-between">
        <Radio.Group onChange={onChange} value={value}>
          <Radio value={1}>One Way</Radio>
          <Radio value={2}>Round Way</Radio>
          <Radio value={3}>Multi City</Radio>
        </Radio.Group>

        <div className="flex gap-3">
          <Select
            style={{ width: 120 }}
            placeholder="1 Traveller"
            className="mega_select"
            onChange={handleChange}
            options={[
              { value: "jack", label: "1 Traveller" },
              { value: "lucy", label: "2 Traveller" },
              { value: "Yiminghe", label: "3 Traveller" },
            ]}
          />
          <Select
            style={{ width: 120 }}
            placeholder="Economy"
            className="mega_select"
            onChange={handleChange}
            options={[
              { value: "jack", label: "Economy" },
              { value: "lucy", label: "Business" },
              { value: "Yiminghe", label: "VIP" },
            ]}
          />
        </div>
      </div>
      <div className="grid grid-cols-[1fr_1fr_1fr_1fr_auto] gap-[20px]">
        <div className="px-5 py-[10px] border rounded-md">
          <div className="flex items-center gap-[10px]">
            <h5 className="mb-0">DAC</h5>
            <div className="border-l pl-[10px]">
              <p className="mb-0 font-semibold text-black"> Dhaka</p>
              <p className="mb-0 text-xs line-clamp-1">
                {" "}
                Bangladesh Hazrat Shaz Bangladesh Hazrat Shaz
              </p>
            </div>
          </div>
        </div>
        <div className="px-5 py-[10px] border rounded-md">
          <div className="flex items-center gap-[10px]">
            <h5 className="mb-0">CXB</h5>
            <div className="border-l pl-[10px]">
              <p className="mb-0 font-semibold text-black"> Cox’s Bazar</p>
              <p className="mb-0 text-xs line-clamp-1">
                {" "}
                Bangladesh, Cox’s Bazar Aijfghfhf
              </p>
            </div>
          </div>
        </div>
        <div className="px-5 py-[10px] border rounded-md">
          <div className="flex items-center gap-[10px]">
            <h5 className="mb-0">22</h5>
            <div className="border-l pl-[10px]">
              <p className="mb-0 font-semibold text-black">November</p>
              <p className="mb-0 text-xs line-clamp-1"> Wednesday, 2023</p>
            </div>
          </div>
        </div>
        <div className="px-5 py-[10px] border rounded-md">
          <div className="flex items-center gap-[10px]">
            <h5 className="mb-0">23</h5>
            <div className="border-l pl-[10px]">
              <p className="mb-0 font-semibold text-black"> November</p>
              <p className="mb-0 text-xs line-clamp-1"> Friday, 2023</p>
            </div>
          </div>
        </div>
        <Link href={`/${lb}`}>
          <button className="flex justify-center items-center bg-secondary p-[15px] rounded-md">
            <IoSearchOutline className="text-3xl text-white" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MegaSearch;

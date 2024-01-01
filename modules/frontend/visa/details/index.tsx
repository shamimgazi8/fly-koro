import React from "react";
import HelpBanner from "./@components/HelpBanner";
import { Select, Space, Input, DatePicker } from "antd";

const VisaDetails = () => {
  return (
    <div className="container mb-[80px]">
      <HelpBanner />
      <div className=" flex gap-[30px] flex-col mt-[60px]">
        <div>
          <h1 className=" mb-0 text-[#00006D] text-[22px] font-bold leading-[30px]">
            {" "}
            Tell us where do you want to go?
          </h1>
        </div>
        <div>
          <p className="mb-0 text-[15px] font-[500] leading-[22px] text-[#5D586C] ">
            Select a destination from list
          </p>
          <Space wrap>
            <Select
              className="mt-3  "
              defaultValue={"Thailand"}
              style={{
                width: 570,
              }}
              options={[
                {
                  value: "Thailand",
                  label: "Thailand",
                },
                {
                  value: "India",
                  label: "India",
                },
                {
                  value: "Malayshia",
                  label: "Malayshia",
                },
              ]}
            />
          </Space>
        </div>
        <div>
          <div>
            <p className="mb-3 text-[15px] font-[500] leading-[22px] text-[#5D586C]  ">
              Or, Writte it down
            </p>
          </div>

          <div className=" flex w-full justify-between items-end gap-[30px]">
            <Input
              placeholder="Write Country Name"
              className="w-[570px]  px-[20px] py-[13px]"
            />
            <DatePicker className="w-[570px]" />
          </div>
        </div>
      </div>
      <div className=" flex gap-[30px] flex-col mt-[60px]">
        <div>
          <h1 className=" mb-0 text-[#00006D] text-[22px] font-bold leading-[30px]">
            {" "}
            Tell us about Yourself
          </h1>
        </div>
        <div className=" flex flex-col gap-[30px]">
          <div className=" flex gap-[30px]">
            <Input
              placeholder="First Name"
              className="w-[570px]  px-[20px] py-[13px]"
            />
            <Input placeholder="Last Name" className="w-[570px]" />{" "}
          </div>
          <div className=" flex gap-[30px]">
            <Input
              placeholder="Mobile Number"
              className="w-[570px]  px-[20px] py-[13px]"
            />
            <Input
              placeholder="Email Address"
              className="w-[570px] px-[20px] py-[13px]"
            />{" "}
          </div>
        </div>
      </div>
      <div className=" flex gap-[30px] flex-col mt-[60px]">
        <div>
          <h1 className=" mb-0 text-[#00006D] text-[22px] font-bold leading-[30px]">
            {" "}
            Share Your Requirments
          </h1>
        </div>
        <div className=" flex flex-col gap-[30px]">
          <Input
            placeholder="Enter Your Requirments"
            className="w-full h-[180px] px-[20px] py-[13px] "
          />{" "}
        </div>
      </div>
      <button className="px-[26px] py-[13px] text-[17px] bg-primary rounded-lg hover:bg-secondary duration-300 text-white leading-[22px] mt-[72px]">
        Submit Your Request
      </button>
    </div>
  );
};

export default VisaDetails;

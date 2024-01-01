"use client";
import { useState } from "react";
import { IoMdStar } from "react-icons/io";

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const WriteReview = () => {
  const [isWritten, setWritten] = useState(false);

  const Down = () => {
    return <MdKeyboardArrowDown />;
  };
  const Up = () => {
    return <MdKeyboardArrowUp />;
  };

  return (
    <div>
      <button
        onClick={() => setWritten(!isWritten)}
        className=" hover:bg-secondary duration-300 px-[20px] py-[10px] text-[15px] text-white font-[600] leading-[22px] bg-[#00006D] rounded-md flex gap-[8px] items-center my-[40px]"
      >
        Write a review {isWritten === false ? <Up /> : <Down />}
      </button>
      <div className={isWritten === true ? "" : "hidden"}>
        <h1 className="mb-0 text-black text-[22px] font-[700] leading-[30px]">
          Leave a review
        </h1>
        <p className=" mb-0 mt-[6px] text-[#A5A2AD] text-[15px] font-normal leading-8">
          Your email address will not be published. Required fields are marked*
        </p>
        <div>
          <form className="mt-[12px]  rounded ">
            <label>
              <input
                className="px-[10px] py-[7px]  border border-[#DBDADE]  w-[48%] mr-[12px] rounded placeholder:text-[13px] placeholder:text-[#5D586C]"
                type="text"
                placeholder="Name*"
              />
              <input
                className="px-[10px] py-[7px]  border border-[#DBDADE]  w-[48%] rounded placeholder:text-[13px] placeholder:text-[#5D586C]"
                type="text"
                placeholder="Email*"
              />
              <input
                className="px-[10px] py-[7px]  border border-[#DBDADE]  w-[97.5%] rounded placeholder:text-[13px] placeholder:text-[#5D586C] mt-[24px]"
                type="text"
                placeholder="Titel*"
              />
              <div className="flex">
                <div className=" border border-[#DBDADE] rounded  w-[48%] h-[200px] mt-[24px] mr-[12px] px-[20px] py-[20px]">
                  <div className="flex justify-between">
                    <p className="mb-3">Sleep</p>
                    <div className="flex gap-1 cursor-pointer">
                      {Array(5).fill(
                        <IoMdStar className="text-[#D6D6E7] h-[20px] w-[20px] " />
                      )}
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <p className="mb-3">Location</p>
                    <div className="flex gap-1 cursor-pointer">
                      {Array(5).fill(
                        <IoMdStar className="text-[#D6D6E7] h-[20px] w-[20px] " />
                      )}
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <p className="mb-3">Service</p>
                    <div className="flex gap-1 cursor-pointer">
                      {Array(5).fill(
                        <IoMdStar className="text-[#D6D6E7] h-[20px] w-[20px] " />
                      )}
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <p className="mb-3">Cleanliness</p>
                    <div className="flex gap-1 cursor-pointer">
                      {Array(5).fill(
                        <IoMdStar className="text-[#D6D6E7] h-[20px] w-[20px] " />
                      )}
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <p className="mb-3">Guidance</p>
                    <div className="flex gap-1 cursor-pointer">
                      {Array(5).fill(
                        <IoMdStar className="text-[#D6D6E7] h-[20px] w-[20px] " />
                      )}
                    </div>
                  </div>
                </div>
                <input
                  className="px-[10px] py-[7px] focus:none  border border-[#DBDADE]  w-[48%] h-[200px] rounded placeholder:text-[13px] placeholder:text-[#5D586C] mt-[24px]"
                  type="text"
                  placeholder="Content*"
                />
              </div>
            </label>
          </form>
        </div>
        <button className=" hover:bg-secondary duration-300 px-[20px] py-[10px] text-[15px] text-white font-[600] leading-[22px] bg-[#00006D] rounded-md flex gap-[8px] items-center my-[40px]">
          Post Review
        </button>
      </div>
    </div>
  );
};
export default WriteReview;

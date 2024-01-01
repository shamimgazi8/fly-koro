"use client";
import { GrLocation } from "react-icons/gr";
import AboutHotel from "./@components/AboutHotel";
import Duration from "./@components/Duration";
import InEx from "./@components/InEx";
import Nearby from "./@components/Nearby";
import Reviews from "./@components/Reviews";

import { BsDot } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { HiOutlineLanguage } from "react-icons/hi2";
import { IoIosStar } from "react-icons/io";
import { IoPlayOutline } from "react-icons/io5";
import { LuShare2, LuUsers } from "react-icons/lu";
import { MdAccessTime } from "react-icons/md";
import { TbPennant } from "react-icons/tb";
import StoriesTipsGuides from "../../home/@component/stories-tips-guides";
import AskQuestion from "./@components/AskQuestion";
import BulkDiscount from "./@components/BulkDiscount";
import Itinerary from "./@components/Itinerary";

const HolidaysDetails = () => {
  return (
    <section>
      <div className="container flex gap-[30px] mt-[60px]">
        <div className="container-1 w-[770px] flex flex-col gap-[40px]">
          <div className="flex flex-col gap-[30px]">
            <div className="flex justify-between">
              <div>
                <h1 className="mb-0 text-[32px] font-semibold leading-[44px]">
                  Cannes and Antibes Night Tour the Seine Extraordinaire
                </h1>
                <div className="flex gap-3">
                  <div className="flex gap-[5px] items-center">
                    <p className="mb-0 flex gap-[6px] items-center text-[15px] font-semibold leading-[22px] text-[#00000B]">
                      <IoIosStar className="text-[#FFDC00]" />5
                    </p>

                    <p className="mb-0 text-[#A5A2AD] text-[13px] font-normal leading-5">
                      (4 Reviews)
                    </p>
                  </div>
                  <div className="flex items-center">
                    <BsDot />
                  </div>
                  <div className="flex gap-[5px] items-center">
                    <p className="mb-0">
                      <GrLocation />
                    </p>
                    <p className="mb-0  text-[#A5A2AD] text-[13px] font-normal leading-5">
                      Nevada, USA
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-[30px]">
              <div className="flex gap-5 items-center w-[170px]">
                <div className="border border-[#DBDADE)] rounded px-[10px] py-[10px]">
                  <MdAccessTime className=" text-[#A5A2AD] h-[28px] w-[28px]" />
                </div>

                <div>
                  <h1 className="mb-0 text-[18px] font-semibold text-[#00000B] leading-6">
                    Duration
                  </h1>
                  <p className="mb-0 text-[13px] text-[#A5A2AD] leading-5">
                    4 days
                  </p>
                </div>
              </div>
              <div className=" flex gap-5 items-center w-[170px]">
                <div className="border border-[#DBDADE)] rounded px-[10px] py-[10px]">
                  <TbPennant className=" text-[#A5A2AD] h-[28px] w-[28px]" />
                </div>
                <div>
                  <h1 className="mb-0 text-[18px] font-semibold text-[#00000B] leading-6">
                    Tour Type
                  </h1>
                  <p className="mb-0 text-[13px] text-[#A5A2AD] leading-5">
                    Daily tour
                  </p>
                </div>
              </div>
              <div className=" flex gap-5 items-center w-[170px]">
                <div className="border border-[#DBDADE)] rounded px-[10px] py-[10px]">
                  <LuUsers className=" text-[#A5A2AD] h-[28px] w-[28px]" />
                </div>
                <div>
                  <h1 className="mb-0 text-[18px] font-semibold text-[#00000B] leading-6">
                    Group Size
                  </h1>
                  <p className="mb-0 text-[13px] text-[#A5A2AD] leading-5">
                    10 People
                  </p>
                </div>
              </div>
              <div className=" flex gap-5 items-center w-[170px]">
                <div className="border border-[#DBDADE)] rounded px-[10px] py-[10px]">
                  <HiOutlineLanguage className=" text-[#A5A2AD] h-[28px] w-[28px]" />
                </div>
                <div>
                  <h1 className="mb-0 text-[18px] font-semibold text-[#00000B] leading-6">
                    Languages
                  </h1>
                  <p className="mb-0 text-[13px] text-[#A5A2AD] leading-5">
                    English, Francis
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" divide-y flex h-[1px] w-[100%] bg-[#DBDADE]  "></div>
          <div>
            <AboutHotel />
            <InEx />
            <Itinerary />
            <Duration />
            <AskQuestion />
            <Nearby />
            <BulkDiscount />
            <Reviews />
          </div>
        </div>
        <div className="container-2 w-[370px]">
          <div className="flex gap-4 justify-end">
            <button className="bg-[#EBEBF4] rounded px-2 py-2 h-[38px] hover:bg-[#FF9100]  transition-all">
              <IoPlayOutline className="h-[22px] w-[22px] text-[#00006D]" />
            </button>

            <button className="bg-[#EBEBF4] rounded px-2 py-2 h-[38px] hover:bg-[#FF9100]  transition-all">
              <LuShare2 className="h-[22px] w-[22px] text-[#00006D]" />
            </button>
            <button className="bg-[#EBEBF4] rounded px-2 py-2 h-[38px] hover:bg-[#FF9100] transition-all">
              <FaRegHeart className="h-[22px] w-[22px] text-[#00006D]" />
            </button>
          </div>
          <div className="mt-[100px] border border-[#DBDADE] rounded px-6 py-[30px] flex flex-col gap-[30px]">
            <div className="flex justify-between items-center">
              <div>
                <p className="mb-0 text-[15px] line-through text-[#A5A2AD] leading-6">
                  TK 10,000
                </p>
                <div className="flex items-end">
                  <p className="mb-0 text-[13px] text-[#00000B] leading-5 ">
                    From:
                  </p>
                  <p className=" hover:bg-secondary duration-300 mb-0 text-[18px] text-[#000057] leading-6 font-semibold">
                    TK 9,000
                  </p>
                </div>
              </div>
              <div>
                <div className="flex gap-[5px] items-center">
                  <p className="mb-0 flex gap-[6px] items-center text-[15px] font-semibold leading-[22px] text-[#00000B]">
                    <IoIosStar className="text-[#FFDC00]" />5
                  </p>

                  <p className="mb-0 text-[#A5A2AD] text-[13px] font-normal leading-5">
                    (4 Reviews)
                  </p>
                </div>
              </div>
            </div>
            <div className="border border-[#DBDADE] rounded px-6 py-[30px] flex flex-col gap-[30px]">
              <div className=" flex justify-between">
                <div>
                  <h1 className="mb-0 text-black text-[15px] leading-[22px] font-semibold">
                    Adult
                  </h1>
                  <p className="mb-0 text-[#A5A2AD] text-[15px] leading-[22px]">
                    Over 18+
                  </p>
                </div>
                <div className=" flex gap-3 items-center">
                  <div className=" h-6 w-6 rounded-full border hover:border-danger duration-300 border-[#DBDADE] flex items-center justify-center cursor-pointer">
                    <GoPlus className="text-[#28C76F]  hover:text-danger duration-300" />
                  </div>

                  <p className="mb-0 text-[15px] text-black leading-[22px] font-semibold">
                    1
                  </p>
                  <div className=" h-6 w-6 rounded-full border hover:border-danger duration-300  border-[#DBDADE]  flex items-center justify-center cursor-pointer">
                    <GoPlus className="text-[#28C76F]  hover:text-danger duration-300" />
                  </div>
                </div>
              </div>
              <div className=" flex justify-between">
                <div>
                  <h1 className="mb-0 text-black text-[15px] leading-[22px] font-semibold">
                    Children
                  </h1>
                  <p className="mb-0 text-[#A5A2AD] text-[15px] leading-[22px]">
                    Under 12
                  </p>
                </div>
                <div className=" flex gap-3 items-center">
                  <div className=" h-6 w-6 rounded-full border hover:border-danger duration-300  border-[#DBDADE] flex items-center justify-center cursor-pointer">
                    <GoPlus className="text-[#28C76F]  hover:text-danger duration-300" />
                  </div>

                  <p className="mb-0 text-[15px] text-black leading-[22px] font-semibold">
                    1
                  </p>
                  <div className=" h-6 w-6 rounded-full border hover:border-danger duration-300  border-[#DBDADE]  flex items-center justify-center cursor-pointer">
                    <GoPlus className="text-[#28C76F]  hover:text-danger duration-300" />
                  </div>
                </div>
              </div>
              <div className=" flex justify-between">
                <div>
                  <h1 className="mb-0 text-black text-[15px] leading-[22px] font-semibold">
                    Infant
                  </h1>
                  <p className="mb-0 text-[#A5A2AD] text-[15px] leading-[22px]">
                    Under 3
                  </p>
                </div>
                <div className=" flex gap-3 items-center">
                  <div className=" h-6 w-6 rounded-full border hover:border-danger duration-300  border-[#DBDADE] flex items-center justify-center cursor-pointer">
                    <GoPlus className="text-[#28C76F]  hover:text-danger duration-300" />
                  </div>

                  <p className="mb-0 text-[15px] text-black leading-[22px] font-semibold">
                    1
                  </p>
                  <div className="  h-6 w-6 rounded-full border hover:border-danger duration-300  border-[#DBDADE]  flex items-center justify-center cursor-pointer">
                    <GoPlus className="text-[#28C76F] hover:text-danger duration-300" />
                  </div>
                </div>
              </div>
            </div>
            <button className="hover:bg-secondary duration-300 w-full bg-[#00006D] text-[#FFFFFF] rounded text-[15px] font-semibold leadin-[22px] px-5 py-[10px]">
              Book Now
            </button>
          </div>
        </div>
      </div>
      <StoriesTipsGuides />
    </section>
  );
};

export default HolidaysDetails;

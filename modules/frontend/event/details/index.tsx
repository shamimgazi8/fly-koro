import { BsDot, BsPeople } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { IoPlayOutline } from "react-icons/io5";
import { LuShare2 } from "react-icons/lu";
import { MdAccessTime, MdOutlineStar } from "react-icons/md";
import { TbBus, TbTicket } from "react-icons/tb";

import AboutHotel from "../../holidays/detail/@components/AboutHotel";
import AskQuestion from "../../holidays/detail/@components/AskQuestion";
import InEx from "../../holidays/detail/@components/InEx";
import Itinerary from "../../holidays/detail/@components/Itinerary";
import Nearby from "../../holidays/detail/@components/Nearby";
import Reviews from "../../holidays/detail/@components/Reviews";
import StoriesTipsGuides from "../../home/@component/stories-tips-guides";

const EventDetails = () => {
  return (
    <section>
      <div className="container flex gap-[30px] mt-[60px]">
        <div className="container-1 w-[770px] flex flex-col gap-[40px]">
          <div className="flex flex-col gap-[30px]">
            <div className="flex justify-between">
              <div>
                <h1 className="mb-0 text-[32px] font-semibold leading-[44px]">
                  Sajek Valley
                </h1>
                <div className=" flex gap-3 items-center mt-3">
                  <p className="mb-0 text-[13px] text-[#5D586C] leading-5 flex gap-[6px] items-center">
                    <MdOutlineStar className="text-[#FFDC00] h-[16px] w-[16px]" />
                    <span className=" text-black text-[13px] font-semibold leading-[14px]">
                      5
                    </span>
                    (4 Reviews)
                  </p>
                  <BsDot className="h-4 w-4 text-[#A5A2AD]" />
                  <p className="mb-0 text-[13px] text-[#24B364] leading-5 flex gap-[6px] items-center">
                    <TbTicket className="h-[18px] w-[18px] text-[#24B364]" />
                    17 Seats Available{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-[30px]">
              <div className=" flex gap-5 items-center w-[170px]">
                <div className="border border-[#DBDADE)] rounded-lg px-[10px] py-[10px]">
                  <p className=" text-2xl text-[#A5A2AD] mb-0">22</p>
                </div>
                <div>
                  <h1 className="mb-0 text-[18px] font-semibold text-[#00000B] leading-6">
                    Nov 2023
                  </h1>
                  <p className="mb-0 text-[13px] text-[#A5A2AD] leading-5">
                    Tour
                  </p>
                </div>
              </div>
              <div className="flex gap-5 items-center w-[170px]">
                <div className="border border-[#DBDADE)] rounded-lg px-[10px] py-[10px]">
                  <MdAccessTime className=" text-2xl text-[#A5A2AD]" />
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
                <div className="border border-[#DBDADE)] rounded-lg px-[10px] py-[10px]">
                  <BsPeople className=" text-2xl text-[#A5A2AD]" />
                </div>
                <div>
                  <h1 className="mb-0 text-[18px] font-semibold text-[#00000B] leading-6">
                    Group Size
                  </h1>
                  <p className="mb-0 text-[13px] text-[#A5A2AD] leading-5">
                    30 People
                  </p>
                </div>
              </div>

              <div className=" flex gap-5 items-center w-[170px]">
                <div className="border border-[#DBDADE)] rounded-lg px-[10px] py-[10px]">
                  <TbBus className=" text-2xl text-[#A5A2AD]" />
                </div>
                <div>
                  <h1 className="mb-0 text-[18px] font-semibold text-[#00000B] leading-6">
                    Transport
                  </h1>
                  <p className="mb-0 text-[13px] text-[#A5A2AD] leading-5">
                    Non-AC Bus
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" divide-y flex h-[1px] w-[100%] bg-[#DBDADE]  ">
            <div></div>
            <div></div>
          </div>
          <div>
            <AboutHotel />
            <InEx />
            <Itinerary />
            <Nearby />
            <AskQuestion />
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
          <div className="mt-[100px] border border-[#DBDADE] rounded px-6 py-[30px] flex flex-col gap-[30px] overflow-hidden">
            <div className="flex justify-between items-center">
              <div>
                <p className="mb-0 text-[15px] line-through text-danger leading-6 text-end mr-2 ">
                  BDT 6000
                </p>
                <div className="flex items-end">
                  <p className="mb-0 text-[13px] text-[#00000B] leading-5 ">
                    From:
                  </p>
                  <p className="mb-0 text-[18px] text-[#000057] leading-6 font-semibold ml-1">
                    BDT 4500
                  </p>
                </div>
              </div>
            </div>
            <div className=" border border-[#DBDADE] rounded">
              <div className="px-4 py-5 flex justify-between">
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
              <div className="px-4 py-5 flex justify-between">
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
              <div className="px-4 py-5 flex justify-between">
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

export default EventDetails;

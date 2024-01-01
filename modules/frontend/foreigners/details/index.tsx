import { FaChevronDown, FaRegHeart } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { IoPlayOutline } from "react-icons/io5";
import { LuShare2 } from "react-icons/lu";
import { MdOutlineStar } from "react-icons/md";

import AboutHotel from "../../holidays/detail/@components/AboutHotel";
import AskQuestion from "../../holidays/detail/@components/AskQuestion";
import BulkDiscount from "../../holidays/detail/@components/BulkDiscount";
import Duration from "../../holidays/detail/@components/Duration";
import InEx from "../../holidays/detail/@components/InEx";
import Itinerary from "../../holidays/detail/@components/Itinerary";
import Nearby from "../../holidays/detail/@components/Nearby";
import Reviews from "../../holidays/detail/@components/Reviews";
import StoriesTipsGuides from "../../home/@component/stories-tips-guides";
const ForeignersDetails = () => {
  return (
    <section>
      <div className="container flex gap-[30px] mt-[60px]">
        <div className="container-1 w-[770px] flex flex-col gap-[30px]">
          <div className="flex flex-col gap-[30px]">
            <div className="flex justify-between">
              <div>
                <h1 className="mb-0 text-[32px] font-semibold leading-[44px]">
                  Sundarban Safari
                </h1>
                <div className=" flex gap-3 items-center ">
                  <div className="flex mt-3 m-0  gap-3 items-center">
                    <svg
                      className="w-[15px] h-[15px] text-center map-pin opacity-60"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      height="1em"
                      width="1em"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"
                      />
                    </svg>
                    <div className="flex gap-[6px]">
                      <p className="mb-0 px-[6px] py-[3px] text-[10px] text-[#6F6B7D] font-normal leading-3 bg-[#6f6b7d2a] rounded">
                        Dhaka
                      </p>
                      <p className="mb-0 px-[6px] py-[3px] text-[10px] text-[#6F6B7D] font-normal leading-3 bg-[#6f6b7d2a] rounded">
                        Sonargaon
                      </p>
                      <p className="mb-0 px-[6px] py-[3px] text-[10px] text-[#6F6B7D] font-normal leading-3 bg-[#6f6b7d2a] rounded">
                        Bagerhat
                      </p>
                      <p className="mb-0 px-[6px] py-[3px] text-[10px] text-[#6F6B7D] font-normal leading-3 bg-[#6f6b7d2a] rounded">
                        Sundarban
                      </p>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <circle
                        cx="9"
                        cy="9"
                        r="6.75"
                        stroke="#A5A2AD"
                        stroke-width="1.125"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9 5.25V9L11.25 11.25"
                        stroke="#A5A2AD"
                        stroke-width="1.125"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p className="mb-0 text-[#5D586C] text-[13px] leading-5 font-normal">
                      8 Days
                    </p>
                  </div>
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
            <Duration />
            <AskQuestion />
            <Nearby />
            <BulkDiscount />
            <Reviews />
          </div>
        </div>
        <div className="container-2 w-[370px] flex flex-col gap-[70px]">
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
          <div className=" border border-[#DBDADE] rounded px-6 py-[30px] flex flex-col gap-[30px] overflow-hidden">
            <div className="flex justify-between items-center">
              <div>
                <p className="mb-0 text-[15px] line-through text-danger leading-6 text-end mr-2 ">
                  $1400
                </p>
                <div className="flex items-end">
                  <p className="mb-0 text-[13px] text-[#00000B] leading-5 ">
                    From:
                  </p>
                  <p className="mb-0 text-[18px] text-[#000057] leading-6 font-semibold ml-1">
                    $1200
                  </p>
                </div>
              </div>
              <p className="mb-0 text-[13px] text-[#5D586C] leading-5 flex gap-[6px] items-center">
                <MdOutlineStar className="text-[#FFDC00] h-[16px] w-[16px]" />
                <span className=" text-black text-[13px] font-semibold leading-[14px]">
                  5
                </span>
                (4 Reviews)
              </p>
            </div>
            <div className=" border border-[#DBDADE] rounded">
              <div className="px-4 py-5 flex justify-between">
                <div>
                  <h1 className="mb-0 text-black text-[15px] leading-[22px] font-semibold">
                    Date
                  </h1>
                  <p className="mb-0 text-[#A5A2AD] text-[15px] leading-[22px]">
                    xx/xx/xx
                  </p>
                </div>
                <div className=" flex gap-3 items-center">
                  <FaChevronDown />
                </div>
              </div>
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
export default ForeignersDetails;

import { ConfigProvider, Tabs, TabsProps } from "antd";

import { FiPlay } from "react-icons/fi";
import AboutHotel from "./@componant/AboutHotel";
import Facilities from "./@componant/Facilities";
import Nearby from "./@componant/Nearby";
import Policy from "./@componant/Policy";
import HotelRoomCart from "./@componant/Rooms";

import { BsDot } from "react-icons/bs";
import { FaRegSnowflake } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoIosStar } from "react-icons/io";
import { IoShareSocialOutline } from "react-icons/io5";
import { LuHeart } from "react-icons/lu";
import { TbCar, TbCoffee, TbLivePhoto } from "react-icons/tb";
import Reviews from "../../holidays/detail/@components/Reviews";

const HotelDetails = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "About Hotels",
      children: (
          <AboutHotel />
  
      ),
    },
    {
      key: "2",
      label: "Rooms",
      children: <HotelRoomCart />,
    },
    {
      key: "3",
      label: "What's Nearby",
      children:       <Nearby />,
    },
    {
      key: "4",
      label: "Facilities",
      children:    <Facilities />,
    },
    {
      key: "5",
      label: "Policy",
      children: <>
 <Policy />, 
 
      </>
             
    },
  ];
  return (
    <section>
      <div className="flex gap-1 items-center text-[#A5A2AD] w-[1210px] mx-auto px-[1.25rem] mt-[40px]">
        <p className="text-[15px] font-normal leading-8">Home</p>
        <p>
          <BsDot />
        </p>
        <p className="text-[15px] font-normal leading-8">India</p>
      </div>
      <div className="container flex gap-[30px]">
        <div className="container-1 w-[770px] flex flex-col gap-[40px]">
          <div className="flex flex-col gap-[30px]">
            <div className="flex justify-between">
              <div>
                <h1 className="mb-0 text-[32px] font-semibold leading-[44px]">
                  Hotel Sea Moon
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
                      <HiOutlineLocationMarker className="text-[#A5A2AD] h-[18px] w-[18px]" />
                    </p>
                    <p className="mb-0  text-[#A5A2AD] text-[13px] font-normal leading-5">
                      Hotel Sea Moon, Dolphin Moar, Kolatoli, Coxs Bazar,
                      Bangladesh
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-[30px]">
              <div className="flex gap-5 items-center w-[170px]">
                <TbLivePhoto className="h-[48px] w-[48px] border border-gray-200 px-[10px] py-[10px] rounded text-[#c9c7cc]" />

                <div>
                  <h1 className="mb-0 text-[18px] font-semibold text-[#00000B] leading-6">
                    24 Hours
                  </h1>
                  <p className="mb-0 text-[13px] text-[#A5A2AD] leading-5">
                    Security
                  </p>
                </div>
              </div>
              <div className=" flex gap-5 items-center w-[170px]">
                <FaRegSnowflake className="h-[48px] w-[48px] border border-gray-200 px-[10px] py-[10px] rounded text-[#c9c7cc]" />

                <div>
                  <h1 className="mb-0 text-[18px] font-semibold text-[#00000B] leading-6">
                    AC
                  </h1>
                  <p className="mb-0 text-[13px] text-[#A5A2AD] leading-5">
                    Facility
                  </p>
                </div>
              </div>
              <div className=" flex gap-5 items-center w-[170px]">
                <TbCoffee className="h-[48px] w-[48px] border border-gray-200 px-[10px] py-[10px] rounded text-[#c9c7cc]" />

                <div>
                  <h1 className="mb-0 text-[18px] font-semibold text-[#00000B] leading-6">
                    Coffee/Tea
                  </h1>
                  <p className="mb-0 text-[13px] text-[#A5A2AD] leading-5">
                    in Lobby
                  </p>
                </div>
              </div>
              <div className=" flex gap-5 items-center w-[170px]">
                <TbCar className="h-[48px] w-[48px] border border-gray-200 px-[10px] py-[10px] rounded text-[#c9c7cc]" />

                <div>
                  <h1 className="mb-0 text-[18px] font-semibold text-[#00000B] leading-6">
                    Shuttle
                  </h1>
                  <p className="mb-0 text-[13px] text-[#A5A2AD] leading-5">
                    Transport
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" divide-y flex h-[1px] w-[100%] bg-[#DBDADE]  ">
        
          </div>
          <div>
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "#00006D",
                  colorText: "#5D586C",
                  fontSize: 15,
                  lineHeight: 0.22,
                  fontWeightStrong: 400,
                },
              }}
            >
              <Tabs defaultActiveKey="1" items={items} />
            </ConfigProvider>
          </div>
        </div>
        <div className="container-2 w-[370px]">
          <div className="flex gap-4 justify-end">
            <button className="bg-[#EBEBF4] rounded px-2 py-2 h-[38px] hover:bg-[#FF9100]  transition-all">
              <FiPlay className="h-[22px] w-[22px] text-primary" />
            </button>

            <button className="bg-[#EBEBF4] rounded px-2 py-2 h-[38px] hover:bg-[#FF9100]  transition-all">
              <IoShareSocialOutline className="h-[22px] w-[22px] text-primary" />
            </button>
            <button className="bg-[#EBEBF4] rounded px-2 py-2 h-[38px] hover:bg-[#FF9100] transition-all">
              <LuHeart className="h-[22px] w-[22px] text-primary" />
            </button>
          </div>
          <div className="mt-[65px]">
            <div className="bg-[#00006D] text-white text-[22px] font-bold leading-[30px] px-5 py-4 rounded-t">
              Pricing Summary
            </div>
            <div className="w-[370px] h-[450px] flex flex-col justify-between items-center px-[20px] py-[20px] pt-0 border border-[#DBDADE]">
              <div></div>
              <p className="mb-0 text-[15px] text-[#000057] leading-6 font-normal ">
                Add reservation to Continue
              </p>
              <button className="w-[330px] text-[17px] leading-[22px] font-[500] text-white bg-[#6666A7] flex justify-center items-center px-[26px] py-[13px] rounded">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelDetails;

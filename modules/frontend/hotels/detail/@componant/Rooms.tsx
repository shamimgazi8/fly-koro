import Image from "next/image";
import { FaBath, FaBed, FaChevronRight, FaPhoneAlt, FaRegSnowflake } from "react-icons/fa";
import { FaVault } from "react-icons/fa6";
const HotelRoomCart = () => {
  const RoomCart = () => {
    return (
      <div className=" grid grid-cols-[1fr_2fr] gap-[20px] px-[20px] py-[20px] border border-[#DBDADE] duration-300 rounded-md hover:shadow-md cursor-pointer">
        <div className="">
          <div className="grid grid-rows-[2fr,1fr] gap-3">
            <div>
              <Image
                alt="room photo"
                height={150}
                width={240}
                src={"/images/HotelRoomCart/Rectangle 13.png"}
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Image
                  alt="room photo"
                  height={71.25}
                  width={114}
                  src={"/images/HotelRoomCart/Rectangle 14.png"}
                />
              </div>
              <div>
                <Image
                  alt="room photo"
                  height={71.25}
                  width={114}
                  src={"/images/HotelRoomCart/Rectangle 15.png"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[6px]">
          <div>
            <h1 className="mb-0 text-[22px]  font-bold leading-[30px] text-[#000057]">
              Superior Deluxe Sea view with Balcony
            </h1>
          </div>

          <div className="flex gap-3">
            <p className="mb-0 flex gap-[6px] items-center text-[13px] text-[#5D586C] leading-5 font-normal">
            <FaBed />
              Double Bed
            </p>
            <p className="mb-0 flex gap-[6px] items-center text-[13px] text-[#5D586C] leading-5 font-normal">
            <FaVault />
              Safe
            </p>
            <p className="mb-0 flex gap-[6px] items-center text-[13px] text-[#5D586C] leading-5 font-normal">
            <FaPhoneAlt />
              Telephone
            </p>
            <p className="mb-0 flex gap-[6px] items-center text-[13px] text-[#5D586C] leading-5 font-normal">
            <FaBath />
              Bathtub
            </p>
            <p className="mb-0 flex gap-[6px] items-center text-[13px] text-[#5D586C] leading-5 font-normal">
            <FaRegSnowflake />
              AC
            </p>
          </div>
          <div>
            <div className="flex  bg-[#4B465C14] item items-center justify-between my-[6px] border border-[#DBDADE] shadow">
              <p className="px-[6px] py-[6px] mb-0 text-[#28C76F] text-[13px] leading-4 font-normal ">
                Benefits
              </p>
              <p className="px-[6px] py-[6px] mb-0 text-[#28C76F] text-[13px] leading-4 font-normal ">
                Room(s)
              </p>
              <p className="px-[6px] py-[6px] mb-0 text-[#28C76F] text-[13px] leading-4 font-normal">
                Pricing per night
              </p>
            </div>
            <div className="flex gap-8 px-[6px] py-[6px] justify-between">
              <div className="flex flex-col gap-1">
                <p className="text-[13px] font-normal text-[#5D586C] leading-5 mb-0 flex items-center gap-[6px]">
                  {" "}
                 <div className=" bg-green-200 text-green-500 rounded-full text-[6px] p-[3px] flex items-center justify-center"><FaChevronRight /></div>
                  Breakfast
                </p>
                <p className="text-[13px] font-normal text-[#5D586C] leading-5 mb-0 flex items-center gap-[6px]">
                  {" "}
                  <div className=" bg-green-200 text-green-500 rounded-full text-[6px] p-[3px] flex items-center justify-center"><FaChevronRight /></div>
                  Non Smoking room
                </p>
                <h2 className=" text-[#2689FF] text-[13px] font-normal leading-5 mb-0">
                  Cancellation Policy
                </h2>
              </div>
              <div className="flex gap-[46px]">
                <div>
                  <p className="text-[13px] leading-5 font-normal text-[#5D586C] mb-0">
                    1 room
                  </p>
                </div>
                <div className="flex gap-[7px]">
                  <div className="flex flex-col gap-1">
                    <p className="mb-0 text-[10px] text-[#A5A2AD] font-normal leading-[14px]">
                      Pricing per night as low as
                    </p>
                    <div className="flex justify-end">
                      <p className="text-[#FF9100] text-[10px] leading-[14px] font-normal mb-0 flex gap-[2px] items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3.9295 3.00024H2.5125C1.95331 3.00024 1.5 3.45356 1.5 4.01274V5.42974C1.5 5.69824 1.6065 5.95574 1.7965 6.14574L4.8545 9.20374C5.04438 9.39366 5.30194 9.50035 5.5705 9.50035C5.83906 9.50035 6.09661 9.39366 6.2865 9.20374L7.7035 7.78674C7.89341 7.59686 8.00011 7.3393 8.00011 7.07074C8.00011 6.80219 7.89341 6.54463 7.7035 6.35474L4.645 3.29674C4.45522 3.10699 4.19787 3.00035 3.9295 3.00024Z"
                            stroke="#FF9100"
                            stroke-width="0.75"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8.78603 9.20363L10.203 7.78663C10.3929 7.59675 10.4996 7.33919 10.4996 7.07063C10.4996 6.80207 10.3929 6.54452 10.203 6.35463L6.64453 2.79663"
                            stroke="#FF9100"
                            stroke-width="0.75"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M2.99957 4.50024H2.99457"
                            stroke="#FF9100"
                            stroke-width="0.75"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>{" "}
                        49% OF
                      </p>
                      <p className="text-[12px] text-[#A5A2AD] leading-4 font-normal line-through mb-0">
                        10,000
                      </p>
                    </div>
                    <h3 className=" text-[#000057] text-[15px] leading-4 font-semibold mb-0 text-end">
                      Tk 9,000
                    </h3>
                  </div>
                  <div>
                    <button className=" hover:bg-secondary duration-300 text-[13px] text-white leading-[15px] tracking-[0.43px] font-[500] px-[14px] py-[6px] bg-[#000057] rounded text-center mt-0 mb-0">
                      Reserve
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" divide-y flex h-[1px] w-[100%] bg-[#DBDADE]  ">
            <div></div>
            <div></div>
          </div>
          <div className="flex gap-8 px-[6px] py-[6px] justify-between">
            <div className="flex flex-col gap-1">
              <p className="text-[13px] font-normal text-[#5D586C] leading-5 mb-0 flex items-center gap-[6px]">
                {" "}
                <div className=" bg-green-200 text-green-500 rounded-full text-[6px] p-[3px] flex items-center justify-center"><FaChevronRight /></div>
                Breakfast
              </p>
              <p className="text-[13px] font-normal text-[#5D586C] leading-5 mb-0 flex items-center gap-[6px]">
                {" "}
                <div className=" bg-green-200 text-green-500 rounded-full text-[6px] p-[3px] flex items-center justify-center"><FaChevronRight /></div>
                Non Smoking room
              </p>
              <h2 className=" text-[#2689FF] text-[13px] font-normal leading-5 mb-0">
                Cancellation Policy
              </h2>
            </div>
            <div className="flex gap-[46px]">
              <div>
                <p className="text-[13px] leading-5 font-normal text-[#5D586C] mb-0">
                  1 room
                </p>
              </div>
              <div className="flex gap-[7px]">
                <div className="flex flex-col gap-1">
                  <p className="mb-0 text-[10px] text-[#A5A2AD] font-normal leading-[14px]">
                    Pricing per night as low as
                  </p>
                  <div className="flex justify-end">
                    <p className="text-[#FF9100] text-[10px] leading-[14px] font-normal mb-0 flex gap-[2px] items-center ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.9295 3.00024H2.5125C1.95331 3.00024 1.5 3.45356 1.5 4.01274V5.42974C1.5 5.69824 1.6065 5.95574 1.7965 6.14574L4.8545 9.20374C5.04438 9.39366 5.30194 9.50035 5.5705 9.50035C5.83906 9.50035 6.09661 9.39366 6.2865 9.20374L7.7035 7.78674C7.89341 7.59686 8.00011 7.3393 8.00011 7.07074C8.00011 6.80219 7.89341 6.54463 7.7035 6.35474L4.645 3.29674C4.45522 3.10699 4.19787 3.00035 3.9295 3.00024Z"
                          stroke="#FF9100"
                          stroke-width="0.75"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.78603 9.20363L10.203 7.78663C10.3929 7.59675 10.4996 7.33919 10.4996 7.07063C10.4996 6.80207 10.3929 6.54452 10.203 6.35463L6.64453 2.79663"
                          stroke="#FF9100"
                          stroke-width="0.75"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M2.99957 4.50024H2.99457"
                          stroke="#FF9100"
                          stroke-width="0.75"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      49% OF
                    </p>
                    <p className="text-[12px] text-[#A5A2AD] leading-4 font-normal line-through mb-0">
                      10,000
                    </p>
                  </div>
                  <h3 className=" text-[#000057] text-[15px] leading-4 font-semibold mb-0 text-end">
                    Tk 9,000
                  </h3>
                </div>
                <div>
                  <button className="hover:bg-secondary duration-300 text-[13px] text-white leading-[15px] tracking-[0.43px] font-[500] px-[14px] py-[6px] bg-[#000057] rounded text-center mt-0 mb-0">
                    Reserve
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <div className=" divide-y flex h-[1px] w-[100%] bg-[#DBDADE] my-[40px] ">
      </div>
      <div className=" flex flex-col gap-6">

      <h1 className="mb-0 text-[22px] text-black font-bold leading-[30px]">
        Rooms
      </h1>
      <div className=" flex flex-col gap-5">

      <RoomCart />
      <RoomCart />
      <RoomCart />
      </div>
      </div>
    </div>
  );
};
export default HotelRoomCart;

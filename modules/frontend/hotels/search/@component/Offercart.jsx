import Image from "next/image";
import Link from "next/link";
import { CiDumbbell } from "react-icons/ci";
import { GrLocation } from "react-icons/gr";
import { IoIosStar } from "react-icons/io";
import { IoSnowSharp } from "react-icons/io5";
import { TbSwimming } from "react-icons/tb";
const OfferCart = ({ SRC, HotelName }) => {
  return (
    <div className="p-0 lg:py-0 py-5 grid lg:grid-cols-[auto,_2fr]   container-extended border-[1px] borer-[#DBDADE] rounded-md  hover:shadow-md duration-300 ">
   
      <div className=" w-full flex items-center justify-center lg:ml-0 ">
        <Link href={"/hotels/details"}>
          <Image
            height={200}
            width={200}
            className="mb-0 lg:rounded-none rounded"
            alt="cover"
            src={SRC}
          />
        </Link>
      </div>
      <div className="flex lg:flex-row w-full flex-col justify-between lg:items-center items-center  mr-[30px] lg:text-start text-center">
        <div className="flex flex-col px-[30px] lg:py-0 py-5">
          <div className=" flex flex-col items-center lg:items-start justify-center">
            <h3 className=" text-[26px] font-semibold leading-9 text-[#00000B] mb-0">
              <Link href={"/hotels/details"}>{HotelName}</Link>
            </h3>
            <div className="flex mt-2 m-0  gap-1">
              {Array(5).fill(<IoIosStar className="text-[#FFDC00] h-5 w-5 " />)}
              <p className="ml-[6px] text-[#A5A2AD] text-[13px] leading-5 font-normal mb-0">
                (4 reviwes)
              </p>
            </div>
          </div>

          <div className=" text-[#5D586C] text-[13px] font-normal leading-5 mt-3">
            <p className=" flex gap-3 mb-[3px] ">
              <GrLocation className=" w-[15px] h-[15px] lg:mt-[8px] mt-0 text-[#A5A2AD]" />
              Sea Beach, Soghundha Point, Hotel Motel Zone,
              <br />
              Cox’s Bazar 4700
            </p>
            <div className="flex gap-5">
              <p className="flex gap-3 mb-0">
                <IoSnowSharp className=" w-[15px] h-[15px] mt-[2px] text-[#A5A2AD]" />
                Air Conditioning
              </p>
              <p className="flex gap-3 items-center mb-0">
                <TbSwimming className=" w-[18px] h-[18px] mt-[2px] text-[#A5A2AD]" />
                Swimming pool
              </p>
              <p className="flex gap-3 items-center mb-0">
                <CiDumbbell className=" w-[18px] h-[18px] mt-[2px] text-[#A5A2AD]" />
                Gym
              </p>
            </div>
          </div>
        
        </div>
        <div className=" lg:h-[139px] lg:w-[1px] h-[1px] w-full lg:my-0 my-5 bg-[#DBDADE]  ">
  
        </div>

        <div className=" lg:text-end text-center px-[60px]">
          <p className="text-[#A5A2AD] text-[13px] font-normal leading-5 mb-0">
            Starts from
          </p>
          <h2 className="text-[15px] leading-[22px] font-normal text-[#EA5455] line-through mb-0">
            BDT 6000
          </h2>
          <h1 className="text-[22px] font-bold leading-[30px] text-[#00006D] mb-0">
            BDT 10,000
          </h1>
          <p className="text-[#5D586C] text-[13px] font-normal leading-5 mb-0">
            for 1 Night, per room
          </p>
          <Link href={"/hotels/details"}>
            <button className="text-[13px] text-[#FFFFFF] font-[500] leading-4 tracking-[0.43px] rounded bg-[#000057] px-[14px] py-[6px] text-center mt-[12px] hover:bg-[#EBEBF4] hover:text-[#000057] transition-all hover:border-solid-1px-[#000057]]">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default OfferCart;

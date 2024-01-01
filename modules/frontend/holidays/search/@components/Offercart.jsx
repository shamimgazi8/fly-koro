import Image from "next/image";
import Link from "next/link";
import { CiDumbbell } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { MdAccessTime, MdOutlineStar } from "react-icons/md";
import { RiMapPinLine } from "react-icons/ri";
const OfferCart = ({ SRC, HotelName }) => {
  return (
    <div className="grid grid-cols-[auto,_2fr] h-auto  w-[870px] border-[1px] borer-[#DBDADE] rounded-md duration-300 hover:shadow-md">
      <div className="w-11 scale-[1.2] overflow-hidden inline-block absolute end-[372px] mt-[6px] rounded">
      </div>
      <div>
        <Link href={"/holidays/details"}>
          <Image
            height={200}
            width={200}
            className="mb-0"
            alt="Profile "
            src={SRC}
          />
        </Link>
      </div>
      <div className="flex justify-between items-center ml-[30px] mr-[30px]">
        <div className="flex flex-col py-[18px]">
          <div>
            <h3 className=" text-[26px] font-semibold leading-9 text-[#00000B] mb-0">
              <Link href={"/holidays/details"}>{HotelName}</Link>
            </h3>
            <div className="flex mt-[6px] m-0  gap-1">
              {Array(5).fill(
                <MdOutlineStar className="h-[20px] w-[20px] text-[#FFDC00]" />
              )}

              <p className="ml-[6px] text-[#A5A2AD] text-[13px] leading-5 font-normal mb-0">
                (4 reviwes)
              </p>
            </div>
          </div>

          <div className=" text-[#5D586C] text-[13px] font-normal leading-5 mt-[6px] flex flex-col gap-[6px]">
            <p className=" flex gap-3 mb-[0px] items-center">
              <RiMapPinLine classaName="h-[15px] w-[15px] text-[#A5A2AD]" />
              Dhaka
            </p>
            <div className="flex gap-5">
              <p className=" mb-0 flex gap-3 items-center">
                <MdAccessTime classaName="h-[15px] w-[15px] text-[#A5A2AD]" />4
                Days
              </p>
              <p className=" mb-0 flex gap-3 items-center">
                <GoPeople classaName="h-[15px] w-[15px] text-[#A5A2AD]" />
                From 1 to 100 People
              </p>
            </div>
            <p className=" mb-0 flex gap-3 items-center">
              <CiDumbbell classaName="h-[15px] w-[15px] text-[#A5A2AD]" />
              Full refund before five (5) days
            </p>
            <div className="flex gap-3">
              <p className="mb-0 px-[6px] py-[3px] text-[10px] text-[#6F6B7D] font-normal leading-3 bg-[#6f6b7d2a] rounded">
                Long Drive
              </p>
              <p className="mb-0 px-[6px] py-[3px] text-[10px] text-[#6F6B7D] font-normal leading-3 bg-[#6f6b7d2a] rounded">
                Day Tour
              </p>
            </div>
          </div>
        </div>
        <div className=" divide-x flex h-[139px] w-[1px] bg-[#DBDADE]  ">
          <div></div>
          <div></div>
        </div>

        <div className=" text-end">
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
            Per Person
          </p>
          <Link href={"/holidays/details"}>
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

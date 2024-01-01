import Image from "next/image";
import Link from "next/link";
import { LiaBusinessTimeSolid } from "react-icons/lia";
import { LuTreeDeciduous } from "react-icons/lu";
import { MdAccessTime, MdOutlineStar } from "react-icons/md";
import { TbMeat, TbParachute, TbTicket } from "react-icons/tb";
const TourCart = ({ SRC, TourName }: any) => {
  return (
    <div className="grid grid-cols-[auto,_2fr]  w-full border-[1px] borer-[#DBDADE] rounded-md duration-300  hover:shadow-md">
      <div>
        <Link href={"/event/details"}>
          <Image
            height={250}
            width={300}
            src={SRC}
            alt="tour photo"
            className="mb-0"
          />
        </Link>
      </div>
      <div className="flex justify-between items-center ml-[30px] mr-[30px]">
        <div className="flex flex-col">
          <div>
            <h3 className=" text-[26px] font-semibold leading-9 text-[#00000B] mb-0">
              <Link href={"/event/details"}>{TourName}</Link>
            </h3>
            <div className=" flex gap-3 mt-3">
              <p className="mb-0 text-[13px] text-[#5D586C] leading-5 flex gap-[6px] items-center">
                <LiaBusinessTimeSolid className="h-[18px] w-[18px] text-[#A5A2AD]" />
                30th November 2023
              </p>
              <p className="mb-0 text-[13px] text-[#5D586C] leading-5 flex gap-[6px] items-center">
                <MdAccessTime className="h-[18px] w-[18px] text-[#A5A2AD text-[#A5A2AD]" />
                3 Days
              </p>
              <p className="mb-0 text-[13px] text-[#5D586C] leading-5 flex gap-[6px] items-center">
                <MdOutlineStar className="text-[#FFDC00] h-[16px] w-[16px]" />
                <span className=" text-black text-[13px] font-semibold leading-[14px]">
                  {" "}
                  5
                </span>
                (4 Reviews)
              </p>
              <p className="mb-0 text-[13px] text-[#24B364] leading-5 flex gap-[6px] items-center">
                <TbTicket className="h-[18px] w-[18px] text-[#24B364]" />
                17 Seats Available{" "}
              </p>
            </div>
          </div>

          <div className=" w-[598px]  mt-3">
            <p className="mb-0 text-[13px] text-[#5D586C] leading-5 font-normal">
              Experience an exciting journey through the stunning wilderness of
              the Sundarban Mangrove Forest, a UNESCO World Heritage Site, with
              a thrilling Sundarban Safari, staying on a small houseboat and
              anchoring on different places each night.
            </p>
          </div>
          <div className="flex mt-3 m-0  gap-3 items-center">
            <div className="flex gap-[6px]">
              <p className="mb-0 px-[6px] py-[3px] text-[10px] text-[#6F6B7D] font-normal leading-3 bg-[#F6F6F7] rounded flex gap-[6px]">
                <TbMeat /> Special Food
              </p>
              <p className="mb-0 px-[6px] py-[3px] text-[10px] text-[#6F6B7D] font-normal leading-3 bg-[#F6F6F7] rounded flex gap-[6px]">
                <TbParachute />
                Paragling
              </p>
              <p className="mb-0 px-[6px] py-[3px] text-[10px] text-[#6F6B7D] font-normal leading-3 bg-[#F6F6F7] rounded flex gap-[6px]">
                <LuTreeDeciduous /> Day Tour
              </p>
            </div>
          </div>
        </div>
        <div className=" divide-x flex h-[139px] w-[1px] bg-[#DBDADE]  ">
          <div></div>
          <div></div>
        </div>

        <div className=" text-end">
          <h2 className="text-[15px] leading-[22px] font-normal text-[#EA5455] line-through mb-0">
            BDT 6000
          </h2>
          <h1 className="text-[22px] font-bold leading-[30px] text-[#00006D] mb-0">
            BDT 4000
          </h1>
          <p className="text-[#5D586C] text-[13px] font-normal leading-5 mb-0">
            Per Person
          </p>
          <Link href={"/event/details"}>
            <button className="text-[13px] text-[#FFFFFF] font-[500] leading-4 tracking-[0.43px] rounded bg-[#000057] px-[14px] py-[6px] text-center mt-[12px] hover:bg-[#EBEBF4] hover:text-[#000057] transition-all hover:border-solid-1px-[#000057]]">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default TourCart;

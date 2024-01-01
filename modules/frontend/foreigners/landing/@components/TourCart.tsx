import Image from "next/image";
import Link from "next/link";
import { HiOutlineMapPin } from "react-icons/hi2";
import { MdAccessTime } from "react-icons/md";
const TourCart = ({ SRC, TourName }: any) => {
  return (
    <div className="grid grid-cols-[auto,_2fr]  w-full border-[1px] borer-[#DBDADE] rounded-md hover:shadow-md duration-300">
      <div>
        <Link href={"/foreigners/details"}>
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
              <Link href={"/foreigners/details"}>{TourName}</Link>
            </h3>
            <div className="flex mt-3 m-0  gap-3 items-center">
              <HiOutlineMapPin className=" text-[#A5A2AD]" />
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
              <MdAccessTime className=" text-[#A5A2AD]" />
              <p className="mb-0 text-[#5D586C] text-[13px] leading-5 font-normal">
                8 Days
              </p>
            </div>
          </div>

          <div className=" w-[598px]  mt-3">
            <p className="mb-0 text-[13px] text-[#5D586C] leading-5 font-normal">
              Experience an exciting journey through the stunning wilderness of
              the Sundarban Mangrove Forest, a UNESCO World Heritage Site, with
              a thrilling Sundarban Safari, staying on a small houseboat and
              anchoring on different places each night. Spot the majestic Bengal
              tigers, spotted deer, clawless otters, salt-water crocodiles,
              Indian flying foxes, much other wildlife, and many species of
              birds, including nine different types of kingfishers.{" "}
            </p>
          </div>
        </div>
        <div className=" divide-x flex h-[139px] w-[1px] bg-[#DBDADE]  ">
          <div></div>
          <div></div>
        </div>

        <div className=" text-end">
          <h2 className="text-[15px] leading-[22px] font-normal text-[#EA5455] line-through mb-0">
            $1400
          </h2>
          <h1 className="text-[22px] font-bold leading-[30px] text-[#00006D] mb-0">
            $1,240
          </h1>
          <p className="text-[#5D586C] text-[13px] font-normal leading-5 mb-0">
            per Person
          </p>
          <Link href={"/foreigners/details"}>
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

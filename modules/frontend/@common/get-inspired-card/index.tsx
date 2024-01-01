import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoIosStar } from "react-icons/io";
import { GoClock } from "react-icons/go";

const GetInspiredCard = ({ data }: any) => {
  return (
    <Link
      href=""
      className="border rounded-md group hover:text-inherit hover:shadow-[0_4px_16px_0px_rgba(0,0,0,0.1)]"
    >
      <div>
        <Image
          src="/images/home/get-inspired-card.png"
          alt="Get Inspired"
          width={370}
          height={250}
          className="w-full h-full object-cover rounded-t-md"
        />
      </div>
      <div className="flex flex-col py-[14px] px-5">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <h6 className="mb-0 text-primary group-hover:text-secondary transition-all ">
              3-Day Loire Mer Extraordinaire Seine
            </h6>
            <div className="flex items-center gap-1 ">
              <CiLocationOn className="text-xs" />
              <p className="mb-0 text-xs">New York, USA</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              {new Array(5).fill(1).map((item: any, i: any) => {
                return <IoIosStar key={i} className="text-secondary" />;
              })}
            </div>
            <span className="w-[4px] h-[4px] bg-[#A5A2AD] rounded-full"></span>
            <p className="mb-0 p-small">2 Reviews</p>
          </div>
        </div>

        <div className="flex items-end justify-between">
          <div className="flex items-center gap-1 ">
            <GoClock className="text-xs" />
            <p className="mb-0 text-xs">2 Days</p>
          </div>

          <div>
            <p className="mb-0 text-danger">
              <del>TK 20000</del>
            </p>
            <h5 className="mb-0">TK 20000</h5>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GetInspiredCard;

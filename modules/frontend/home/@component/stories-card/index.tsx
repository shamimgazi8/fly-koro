import Image from "next/image";
import Link from "next/link";
import React from "react";

interface propTypes {
  classes?: {
    root?: any;
  };
}
const StoriesCard = ({ classes }: propTypes) => {
  return (
    <Link
      href="#"
      className={`hover:text-inherit group border border-[#DBDADE] rounded-md inline-block hover:shadow-[0_4px_16px_0px_rgba(0,0,0,0.1)] ${
        classes?.root ? classes.root : ``
      }`}
    >
      <div>
        <Image
          src="https://images.unsplash.com/photo-1682685797769-481b48222adf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Blog Card"
          width={270}
          height={182}
          className={`w-full object-cover rounded-t-md`}
          //   className={`w-full ${classes?.image ? classes.image : ``}`}
        />
      </div>
      <div className="flex flex-col gap-[10px] p-[15px]">
        <div className="flex items-center self-start gap-2 bg-[#FBDDDD] px-2 py-[2px] rounded-full">
          <span className="w-[5px] h-[5px] bg-danger rounded-full inline-block"></span>
          <p className="mb-0 text-danger text-[10px]">BOOKING</p>
        </div>
        <div className="flex flex-col gap-[6px]">
          <h6 className="mb-0 group-hover:text-secondary transition-all">
            A Seaside Reset in Laguna Beach Neighborhoods
          </h6>
          <p className="mb-0 line-clamp-2 p-small">
            From the iconic to the unexpected, the city of Sa From the iconic to
            the unexpected, the city of Sa
          </p>
        </div>
      </div>
    </Link>
  );
};

export default StoriesCard;

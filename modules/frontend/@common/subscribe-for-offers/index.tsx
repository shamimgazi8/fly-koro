import Image from "next/image";
import React from "react";
import { HiOutlineEnvelope } from "react-icons/hi2";

const SubscribeForOffers = () => {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-2">
          <div className="rounded-l-md">
            <Image
              src="https://images.unsplash.com/photo-1682685796063-d2604827f7b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Blog Card"
              width={585}
              height={540}
              className={`w-full object-cover rounded-l-md`}
            />
          </div>
          <div className="bg-grey h-full rounded-r-md">
            <div className="flex flex-col justify-center items-center gap-6 h-full">
              <div className="flex flex-col justify-center items-center max-w-[340px] w-full mx-auto ">
                <h3 className="text-center text-primary mb-1">
                  Get special offers, and more from Traveler
                </h3>
                <p className="mb-0 text-center">
                  Subscribe to see secret deals prices drop the moment you sign
                  up!
                </p>
              </div>
              <div className="max-w-[377px] w-full relative">
                <input
                  type="text"
                  name=""
                  id=""
                  className="w-full pr-[120px] py-3 focus:outline-none border rounded-full pl-10 placeholder:text-sm"
                  placeholder="Your email"
                />
                <button className="btn btn-grey absolute top-[50%] translate-y-[-50%] right-[6px] rounded-full  text-primary">
                  Submit
                </button>
                <HiOutlineEnvelope className="absolute top-[50%] translate-y-[-50%] left-[16px] text-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeForOffers;

import GetInspiredCard from "@/modules/frontend/@common/get-inspired-card";
import React from "react";

const GetInspired = () => {
  return (
    <section className="pt-5 lg:pt-[80px] bg-grey">
      <div className="container">
        <h2 className=" text-center mb-10">
          Get Inspired for Your Next Trip
        </h2>
        <div className="grid lg:grid-cols-3 gap-[30px]">
          {new Array(6).fill(1).map((item: any, i: any) => {
            return <GetInspiredCard data={item} key={i} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default GetInspired;

import { FaAngleRight } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const InEx = () => {
  const dataIn = [
    { data: "Specialized bilingual guide" },
    {
      data: "Private Transport",
    },
    { data: "Entrance fees (Cable and car and Moon Valley)" },
    { data: "Box lunch water, banana apple and chocolate" },
  ];
  const dataEx = [
    { data: "Additional Services" },
    {
      data: "Insurance",
    },
    { data: "Drink" },
    { data: "Tickets" },
  ];
  return (
    <div>
      <h1 className="mb-3 text-[22px] font-bold text-black leading-[30px] mt-[30px] ">
        Included/Excluded
      </h1>

      <div className=" flex gap-[100px]">
        <div>
          {dataIn.map((data, i) => {
            return (
              <div
                key={i}
                className="flex gap-3 mb-0 text-[15px] text-[#5D586C] leading-8 font-normal items-center"
              >
                <div className=" h-[16px] w-[16px] bg-[#D4F4E2] rounded-full flex items-center justify-center">
                  <FaAngleRight className=" h-[10px] w-[10px] text-[#28C76F]" />
                </div>
                {data.data}
              </div>
            );
          })}
        </div>
        <div>
          {" "}
          {dataEx.map((data, i) => {
            return (
              <div
                key={i}
                className="flex gap-3 mb-0 text-[15px] text-[#5D586C] leading-8 font-normal items-center"
              >
                <div className=" h-[16px] w-[16px] bg-[#FBDDDD] rounded-full flex items-center justify-center">
                  <RxCross2 className=" h-[10px] w-[10px] text-[#EA5455]" />
                </div>
                {data.data}
              </div>
            );
          })}
        </div>
      </div>
      <div className=" divide-y flex h-[1px] w-[100%] bg-[#DBDADE] my-[30px]  ">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
export default InEx;

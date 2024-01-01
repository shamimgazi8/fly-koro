import { FaAngleRight } from "react-icons/fa";

const Highlight = () => {
  const data = [
    { data: "Visit eight showcasing Polynesian culture" },
    {
      data: "Canoer ride, tatoos, spear throwinf, ukulele leassons and finising",
    },
    { data: "Spectaculer Polynesian evening dinner show 'ha: Breat of life'" },
    { data: "Option transportation from Waikiki hotels" },
  ];
  return (
    <div>
      <h1 className="mb-3 text-[22px] font-bold text-black leading-[30px] mt-[30px] ">
        Highlight
      </h1>
      {data.map((data, i) => {
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
  );
};
export default Highlight;

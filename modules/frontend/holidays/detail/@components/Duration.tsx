import { LuTags } from "react-icons/lu";

const Duration = () => {
  const Tag = () => {
    return <LuTags className="h-[18px] w-[18px]" />;
  };
  return (
    <div>
      <h1 className="mb-3 text-[22px] font-bold text-black leading-[30px] mt-[30px] ">
        Duration
      </h1>
      <div className=" flex gap-[80px] mt-[13px]">
        <p className=" mb-0 text-[#A5A2AD] text-[15px] leading-[32px] font-normal flex gap-3 items-center">
          <Tag />
          3.5 Hours
        </p>
        <p className=" mb-0 text-[#A5A2AD] text-[15px] leading-[32px] font-normal flex gap-3 items-center">
          <Tag />
          5-7 Hours
        </p>
        <p className=" mb-0 text-[#A5A2AD] text-[15px] leading-[32px] font-normal flex gap-3 items-center">
          <Tag />
          Multiday
        </p>
      </div>
      <h1 className="mb-3 text-[22px] font-bold text-black leading-[30px] mt-[20px] ">
        Languages
      </h1>
      <div className=" flex gap-[80px] mt-[13px]">
        <p className=" mb-0 text-[#A5A2AD] text-[15px] leading-[32px] font-normal flex gap-3 items-center">
          <Tag />
          English
        </p>
        <p className=" mb-0 text-[#A5A2AD] text-[15px] leading-[32px] font-normal flex gap-3 items-center">
          <Tag />
          Francis
        </p>
      </div>
      <div className=" divide-y flex h-[1px] w-[100%] bg-[#DBDADE] my-[30px]  ">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
export default Duration;

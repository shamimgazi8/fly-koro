import Image from "next/image";

const TopDestinationCard = ({ data }: any) => {
  return (
    <div className=" flex flex-col gap-4 items-center">
      <div className="w-[170px] h-[170px] rounded-full">
        <Image
          height={170}
          width={170}
          src={data?.img}
          alt="top destination"
          className=" w-full h-full rounded-full object-cover"
        />
      </div>
      <div>
        <h1 className=" mb-0 text-[18px] font-semibold leading-6 text-[#000062] text-center">
          {" "}
          {data?.country}{" "}
        </h1>
        <p className=" mb-0 text-[13px] text-[#5D586C] leading-5 text-center">
          {data?.plan}
        </p>
      </div>
    </div>
  );
};
export default TopDestinationCard;

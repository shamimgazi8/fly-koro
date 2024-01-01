import { MdOutlineStar } from "react-icons/md";

const ClientSay = ({ name }: any) => {
  return (
    <div className=" mt-[40px] px-9 py-9 flex flex-col gap-[15px] w-[370px] items-center bg-white rounded shadow">
      <p className="mb-0 text-[18px] text-[#5D586C] leading-[28px] text-center">
        We recommend you to check the live demo of the MI to take a look at the
        available options and functionalities to see if they suit your needs.
      </p>
      <div className="px-[10px] py-[7px] bg-[#FFFBDF] flex gap-[6px]">
        {Array(5).fill(<MdOutlineStar className=" text-[#FFDC00]" />)}
      </div>
      <h1 className="mb-0 text-black text-[18px] leading-[24px] font-semibold ">
        {name}
      </h1>
    </div>
  );
};
export default ClientSay;

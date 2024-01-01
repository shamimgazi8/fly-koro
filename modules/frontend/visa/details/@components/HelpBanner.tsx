import { FiPhoneCall } from "react-icons/fi";

const HelpBanner = () => {
  return (
    <div className=" flex justify-between px-[30px] py-[30px] bg-[#FFE9CC] rounded items-center mt-[80px]">
      <div className=" flex flex-col gap-3">
        <h1 className="mb-0 text-[32px] text-black font-semibold leading-[44px]">
          Need More Help!
        </h1>
        <p className=" mb-0 text-[18px] text-[#5D586C] leading-[28px] w-[600px] ">
          Call our experts and share any questions you have. Our team is ready
          to assist you every step of the way.
        </p>
      </div>
      <div>
        <button className="flex gap-[10px] items-center px-[26px] py-[13px] text-white bg-secondary text-[18px] font-semibold leading-6 rounded duration-300 hover:bg-primary">
          <FiPhoneCall />
          (671) 555-0110
        </button>
      </div>
    </div>
  );
};
export default HelpBanner;

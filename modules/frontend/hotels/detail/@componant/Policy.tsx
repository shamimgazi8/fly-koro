import { FaChevronRight } from "react-icons/fa";

const Policy = () => {
  const SvgCheckin = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
      >
        <rect
          x="3"
          y="3.75098"
          width="12"
          height="12"
          rx="1.5"
          stroke="#A5A2AD"
          stroke-width="1.125"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12 2.25098V5.25098"
          stroke="#A5A2AD"
          stroke-width="1.125"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6 2.25098V5.25098"
          stroke="#A5A2AD"
          stroke-width="1.125"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3 8.25098H15"
          stroke="#A5A2AD"
          stroke-width="1.125"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <rect
          x="6"
          y="11.251"
          width="1.5"
          height="1.5"
          stroke="#A5A2AD"
          stroke-width="1.125"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  };
  const SvgCheckout = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
      >
        <rect
          x="3"
          y="3.75098"
          width="12"
          height="12"
          rx="1.5"
          stroke="#A5A2AD"
          stroke-width="1.125"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12 2.25098V5.25098"
          stroke="#A5A2AD"
          stroke-width="1.125"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6 2.25098V5.25098"
          stroke="#A5A2AD"
          stroke-width="1.125"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3 8.25098H15"
          stroke="#A5A2AD"
          stroke-width="1.125"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7.5 12.001H10.5"
          stroke="#A5A2AD"
          stroke-width="1.125"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  };

  return (
    <section className="pb-0">
      <div className=" divide-y flex h-[1px] w-[100%] bg-[#DBDADE] my-[40px] ">
        <div></div>
        <div></div>
      </div>
      <h1 className="mb-0 text-[22px] text-black font-bold leading-[30px]">
        Policy
      </h1>
      <div className="mt-[24px] flex flex-col gap-3">
        <div className="flex gap-[30px]">
          <div className="w-[167px] flex justify-between">
            <p className="mb-0 flex gap-[6px] items-center text-[#5D586C] text-[13px] leading-5 font-normal">
              <SvgCheckin /> Check in
            </p>
            <p className="mb-0">:</p>
          </div>
          <div>
            <p className="mb-0 font-[600] text-black text-[13px] leading-[14px]">
              {" "}
              13:00
            </p>
          </div>
        </div>
        <div className="flex gap-[30px]">
          <div className="w-[167px] flex justify-between">
            <p className="mb-0 flex gap-[6px] items-center text-[#5D586C] text-[13px] leading-5 font-normal">
              <SvgCheckout />
              Check out
            </p>
            <p className="mb-0">:</p>
          </div>
          <div>
            <p className="mb-0 font-[600] text-black text-[13px] leading-[14px]">
              {" "}
              11:00
            </p>
          </div>
        </div>
        <div className="flex gap-[30px]">
          <div className="w-[167px] flex justify-between">
            <p className="mb-0 flex gap-[6px] items-start text-[#5D586C] text-[13px] leading-5 font-normal">
              <SvgCheckout />
              Child Policy
            </p>
            <p className="mb-0">:</p>
          </div>
          <div className="flex flex-col gap-[16px]">
            <p className="mb-0 text-[#5D586C] text-[13px] leading-5 font-normal">
              Allowed
            </p>
            <p className="mb-0 text-[#5D586C] text-[13px] leading-5 font-normal flex gap-[6px] items-center">
            <div className=" bg-green-200 text-green-500 rounded-full text-[6px] p-[3px] flex items-center justify-center"><FaChevronRight /></div>

              Children between 1-5 years will enjoy a complimentary stay along
              with breakfast.
            </p>

            <p className="mb-0 text-[#5D586C] text-[13px] leading-5 font-normal flex gap-[6px] items-center">
            <div className=" bg-green-200 text-green-500 rounded-full text-[6px] p-[3px] flex items-center justify-center"><FaChevronRight /></div>

              Children above 5 years will be charged BDT 1,000 for an extra bed
              along with breakfast.
            </p>
          </div>
        </div>
        <div className="flex gap-[30px]">
          <div className="w-[167px] flex justify-between">
            <p className="mb-0 flex gap-[6px] items-start text-[#5D586C] text-[13px] leading-5 font-normal">
              <SvgCheckout />
              Pet Policy
            </p>
            <p className="mb-0">:</p>
          </div>
          <div className="flex flex-col gap-[16px]">
            <p className="mb-0 text-[#5D586C] text-[13px] leading-5 font-normal">
              Not Allowed
            </p>
          </div>
        </div>
        <div className="flex gap-[30px]">
          <div className="w-[167px] flex justify-between">
            <p className="mb-0 flex gap-[6px] items-start text-[#5D586C] text-[13px] leading-5 font-normal">
              <SvgCheckout />
              House Rules
            </p>
            <p className="mb-0">:</p>
          </div>

          <div className="flex flex-col gap-[16px]">
            <p className="mb-0 text-[#5D586C] text-[13px] leading-5 font-normal flex gap-[6px] items-center">
                              <div className=" bg-green-200 text-green-500 rounded-full text-[6px] p-[3px] flex items-center justify-center"><FaChevronRight /></div>

              Hotel Check-in time is 13:00 hours and check-out time is 11:00
              hours.
            </p>
            <p className="mb-0 text-[#5D586C] text-[13px] leading-5 font-normal flex gap-[6px] items-center">
                              <div className=" bg-green-200 text-green-500 rounded-full text-[6px] p-[3px] flex items-center justify-center"><FaChevronRight /></div>

              Additional charges may apply for late check-out.
            </p>
            <p className="mb-0 text-[#5D586C] text-[13px] leading-5 font-normal flex gap-[6px] items-center">
                              <div className=" bg-green-200 text-green-500 rounded-full text-[6px] p-[3px] flex items-center justify-center"><FaChevronRight /></div>

              Please Bring NID/Passport copies and marriage certificate along
              with you at the time of check-in.
            </p>
            <p className="mb-0 text-[#5D586C] text-[13px] leading-5 font-normal flex gap-[6px] items-center">
                              <div className=" bg-green-200 text-green-500 rounded-full text-[6px] p-[3px] flex items-center justify-center"><FaChevronRight /></div>

              Any cancellation must be processed 24 Hours prior to the Check-in
              Date.
            </p>
            <p className="mb-0 text-[#5D586C] text-[13px] leading-5 font-normal flex gap-[6px] items-center">
                              <div className=" bg-green-200 text-green-500 rounded-full text-[6px] p-[3px] flex items-center justify-center"><FaChevronRight /></div>

              Any cancellation must be processed 24 Hours prior to the Check-in
              Date.
            </p>
            <p className="mb-0 text-[#5D586C] text-[13px] leading-5 font-normal flex gap-[6px] items-center">
                              <div className=" bg-green-200 text-green-500 rounded-full text-[6px] p-[3px] flex items-center justify-center"><FaChevronRight /></div>

              The actual charges will be calculated by the hotel in its local
              currency.
            </p>
            <p className="mb-0 text-[#5D586C] text-[13px] leading-5 font-normal flex gap-[6px] items-center">
                              <div className=" bg-green-200 text-green-500 rounded-full text-[6px] p-[3px] flex items-center justify-center"><FaChevronRight /></div>

              Additional charge for an extra bed along with breakfast is BDT
              1,000 per night.
            </p>
            <p className="mb-0 text-[#5D586C] text-[13px] leading-5 font-normal flex gap-[6px] items-center">
                              <div className=" bg-green-200 text-green-500 rounded-full text-[6px] p-[3px] flex items-center justify-center"><FaChevronRight /></div>

              Rates include Breakfast, a 10% service charge, and a 15% VAT
            </p>
            <p className="mb-0 text-[#5D586C] text-[13px] leading-5 font-normal flex gap-[6px] items-center">
                              <div className=" bg-green-200 text-green-500 rounded-full text-[6px] p-[3px] flex items-center justify-center"><FaChevronRight /></div>

              Pick-and-drop service is not available.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Policy;

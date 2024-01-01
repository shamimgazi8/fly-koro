"use client";
import Image from "next/image";
import TextExpander from "../../../@common/text-expander";
const ReviewComment = () => {
  const Thumbsup = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M4.66667 7.33415V12.6675C4.66667 13.0357 4.36819 13.3341 4 13.3341H2.66667C2.29848 13.3341 2 13.0357 2 12.6675V8.00081C2 7.63262 2.29848 7.33415 2.66667 7.33415H4.66667C6.13943 7.33415 7.33333 6.14024 7.33333 4.66748V4.00081C7.33333 3.26443 7.93029 2.66748 8.66667 2.66748C9.40305 2.66748 10 3.26443 10 4.00081V7.33415H12C12.7364 7.33415 13.3333 7.9311 13.3333 8.66748L12.6667 12.0008C12.4697 12.841 11.9261 13.3846 11.3333 13.3341H6.66667C5.5621 13.3341 4.66667 12.4387 4.66667 11.3341"
          stroke="#A5A2AD"
          stroke-width="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  };
  const Star = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M3.88398 14.6676L4.96732 9.98431L1.33398 6.83431L6.13398 6.41764L8.00065 2.00098L9.86732 6.41764L14.6673 6.83431L11.034 9.98431L12.1173 14.6676L8.00065 12.1843L3.88398 14.6676Z"
          fill="#FFDC00"
        />
      </svg>
    );
  };
  const text = `Another exciting adventure with this tour company.Our trip was at the end of April/beginning of May and it was very hot !!!! I'm told June/July is even hotter. Phew !!!!Despite this I loved every minute of it.It was a very busy trip but extremely well organised....Another exciting adventure with this tour company.Our trip was at the end of April/beginning of May and it was very hot !!!! I'm told June/July is even hotter. Phew !!!!Despite this I loved every minute of it.It was a very busy trip but extremely well organised.... `;
  return (
    <div>
      <div className=" divide-y flex h-[1px] w-[100%] bg-[#DBDADE] my-[40px] ">
        <div></div>
        <div></div>
      </div>
      <div>
        <div className="flex justify-between">
          <div className="grid grid-cols-[1fr,2fr]">
            <div>
              <Image
                src="/images/HotelRoomCart/p1.png"
                width={50}
                height={50}
                alt="profile of commenter"
              />
            </div>
            <div className="grid grid-rows-2">
              <div>
                <h1 className="mb-0 text-black text-[18px] leading-6 font-[600]">
                  Dianne Russell
                </h1>
              </div>
              <div>
                <p className="mb-0 text-[13px] font-normal text-[#A5A2AD] leading-5">
                  05/26/2022
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="mb-0 text-[13px] text-[#A5A2AD] font-normal leading-5 flex items-center gap-[6px]">
              <Thumbsup /> 03
            </p>
          </div>
        </div>
        <div className="flex mt-3">{Array(5).fill(<Star />)}</div>
        <div>
          <h1 className="mb-0 text-black text-[15px] font-[600] leading-[22px] mt-[30px]">
            Another exciting adventure with Exodus
          </h1>
          <TextExpander
            text={text}
            expandButtonText={"view More"}
            collapseButtonText={"View less"}
            collapsedNumWords={"250"}
            textColor={"#00000B"}
          />
        </div>
      </div>
    </div>
  );
};
export default ReviewComment;

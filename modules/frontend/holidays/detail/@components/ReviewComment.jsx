"use client";
import TextExpander from "@/modules/frontend/@common/text-expander";
import Image from "next/image";
import { IoMdStar } from "react-icons/io";
import { RiThumbUpLine } from "react-icons/ri";
const ReviewComment = () => {
  const text = `Another exciting adventure with this tour company.Our trip was at the end of April/beginning of May and it was very hot !!!! I'm told June/July is even hotter. Phew !!!!Despite this I loved every minute of it.It was a very busy trip but extremely well organised....Another exciting adventure with this tour company.Our trip was at the end of April/beginning of May and it was very hot !!!! I'm told June/July is even hotter. Phew !!!!Despite this I loved every minute of it.It was a very busy trip but extremely well organised.... `;
  return (
    <div>
      <div className=" divide-y flex h-[1px] w-[100%] bg-[#DBDADE] my-[40px] "></div>
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
              <RiThumbUpLine />
              03
            </p>
          </div>
        </div>
        <div className="flex mt-3">
          {Array(5).fill(
            <IoMdStar className="text-[#FFDC00] h-[16px] w-[16px] " />
          )}
        </div>
        <div>
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

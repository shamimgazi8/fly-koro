import StoriesTipsGuides from "@/modules/frontend/home/@component/stories-tips-guides";

const WriteReview = () => {
  const Blankstar = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M4.85352 18.3343L6.20768 12.4801L1.66602 8.54264L7.66602 8.02181L9.99935 2.50098L12.3327 8.02181L18.3327 8.54264L13.791 12.4801L15.1452 18.3343L9.99935 15.2301L4.85352 18.3343Z"
          fill="#D6D6E7"
        />
      </svg>
    );
  };
  const Up = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
      >
        <path
          d="M4.5 11.251L9 6.75098L13.5 11.251"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  };
  return (
    <div>
      <button className="px-[20px] py-[10px] text-[15px] text-white font-[600] leading-[22px] bg-[#00006D] rounded-md flex gap-[8px] items-center my-[40px]">
        Write a review <Up />
      </button>
      <h1 className="mb-0 text-black text-[22px] font-[700] leading-[30px]">
        Leave a review
      </h1>
      <p className=" mb-0 mt-[6px] text-[#A5A2AD] text-[15px] font-normal leading-8">
        Your email address will not be published. Required fields are marked*
      </p>
      <div>
        <form className="mt-[12px]  rounded ">
          <label>
            <input
              className="px-[10px] py-[7px]  border border-[#DBDADE]  w-[48%] mr-[12px] rounded placeholder:text-[13px] placeholder:text-[#5D586C]"
              type="text"
              placeholder="Name*"
            />
            <input
              className="px-[10px] py-[7px]  border border-[#DBDADE]  w-[48%] rounded placeholder:text-[13px] placeholder:text-[#5D586C]"
              type="text"
              placeholder="Email*"
            />
            <input
              className="px-[10px] py-[7px]  border border-[#DBDADE]  w-[97.5%] rounded placeholder:text-[13px] placeholder:text-[#5D586C] mt-[24px]"
              type="text"
              placeholder="Titel*"
            />
            <div className="flex">
              <div className="py-[10px] px-[7px]  border border-[#DBDADE] rounded  w-[48%] h-[188px] mt-[24px] mr-[12px] px-[20px] py-[20px]">
                <div className="flex justify-between">
                  <p className="mb-3">Sleep</p>
                  <div className="flex gap-1 cursor-pointer">
                    {Array(5).fill(<Blankstar />)}
                  </div>
                </div>
                <div className="flex justify-between">
                  <p className="mb-3">Location</p>
                  <div className="flex gap-1 cursor-pointer">
                    {Array(5).fill(<Blankstar />)}
                  </div>
                </div>
                <div className="flex justify-between">
                  <p className="mb-3">Service</p>
                  <div className="flex gap-1 cursor-pointer">
                    {Array(5).fill(<Blankstar />)}
                  </div>
                </div>
                <div className="flex justify-between">
                  <p className="mb-3">Cleanliness</p>
                  <div className="flex gap-1 cursor-pointer">
                    {Array(5).fill(<Blankstar />)}
                  </div>
                </div>
                <div className="flex justify-between">
                  <p className="mb-3">Guidance</p>
                  <div className="flex gap-1 cursor-pointer">
                    {Array(5).fill(<Blankstar />)}
                  </div>
                </div>
              </div>
              <input
                className="px-[10px] py-[7px] focus:none  border border-[#DBDADE]  w-[48%] h-[188px] rounded placeholder:text-[13px] placeholder:text-[#5D586C] mt-[24px]"
                type="text"
                placeholder="Content*"
              />
            </div>
          </label>
        </form>
      </div>
      <button className="px-[20px] py-[10px] text-[15px] text-white font-[600] leading-[22px] bg-[#00006D] rounded-md flex gap-[8px] items-center my-[40px]">
        Post Review
      </button>
    </div>
  );
};
export default WriteReview;

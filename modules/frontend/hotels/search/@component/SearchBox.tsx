import { IoSearchOutline } from "react-icons/io5";
const SB = () => {
  return (
    <div className="grid grid-cols-[1fr_1fr_1fr_1fr_auto] gap-[20px] max-w-[1170px] w-full mx-auto rounded-md  bg-[white] pt-5 pb-5 px-[34px]">
      <div className="px-5 py-[10px] border rounded-md cursor-pointer">
        <div className="flex items-center gap-[10px]">
          <h5 className="mb-0">
            <svg
              className="w-[24px] h-[24px]  map-pin opacity-40"
              viewBox="0 0 16 16"
              fill="currentColor"
              height="1em"
              width="1em"
            >
              <path
                fillRule="evenodd"
                d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"
              />
            </svg>
          </h5>
          <div className="border-l pl-[10px] cursor-pointer">
            <p className="mb-0 font-semibold text-black"> Dhaka</p>
            <p className="mb-0 text-xs line-clamp-1">
              {" "}
              Bangladesh Hazrat Shaz Bangladesh Hazrat Shaz
            </p>
          </div>
        </div>
      </div>
      <div className="px-5 py-[10px] border rounded-md cursor-pointer">
        <div className="flex items-center gap-[10px]">
          <h5 className="mb-0">22</h5>
          <div className="border-l pl-[10px]">
            <p className="mb-0 font-semibold text-black">
              {" "}
              November, Thursday{" "}
            </p>
            <p className="mb-0 text-xs line-clamp-1">Check-In</p>
          </div>
        </div>
      </div>
      <div className="px-5 py-[10px] border rounded-md cursor-pointer">
        <div className="flex items-center gap-[10px]">
          <h5 className="mb-0">22</h5>
          <div className="border-l pl-[10px]">
            <p className="mb-0 font-semibold text-black">November, Saturday</p>
            <p className="mb-0 text-xs line-clamp-1">Check-Out</p>
          </div>
        </div>
      </div>
      <div className="px-5 py-[10px] border rounded-md cursor-pointer">
        <div className="flex items-center gap-[10px]">
          <h5 className="mb-0">2</h5>
          <div className="border-l pl-[10px]">
            <p className="mb-0 font-semibold text-black"> Guest</p>
            <p className="mb-0 text-xs line-clamp-1"> 1 Room</p>
          </div>
        </div>
      </div>
      <button className="flex justify-center items-center bg-secondary p-[15px] rounded-md">
        <IoSearchOutline className="text-3xl text-white" />
      </button>
    </div>
  );
};
export default SB;

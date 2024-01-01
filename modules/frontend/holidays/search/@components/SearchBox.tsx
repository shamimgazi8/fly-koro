import { IoSearchOutline } from "react-icons/io5";
const SB = () => {
  return (
    <div className="grid grid-cols-[1fr_1fr_1fr_1fr_auto] gap-[20px] max-w-[1170px] w-full mx-auto rounded-md  bg-[white] pt-5 pb-5 px-[34px]">
      <div className="px-5 py-[10px] border rounded-md cursor-pointer w-[500px]">
        <div className="flex items-center gap-[10px]">
          <h5 className="mb-0">BD</h5>
          <div className="border-l pl-[10px]">
            <p className="mb-0 font-semibold text-black"> Cox Bazar</p>
            <p className="mb-0 text-xs line-clamp-1"> Destination</p>
          </div>
        </div>
      </div>
      <div className="px-5 py-[10px] border rounded-md cursor-pointer w-[500px]">
        <div className="flex items-center gap-[10px]">
          <h5 className="mb-0">22</h5>
          <div className="border-l pl-[10px]">
            <p className="mb-0 font-semibold text-black">November, Thursday</p>
            <p className="mb-0 text-xs line-clamp-1">Travel Date</p>
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

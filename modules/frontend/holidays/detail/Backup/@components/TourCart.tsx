import Image from "next/image";
const TourCart = ({ SRC, TourName }: any) => {
  return (
    <div className="grid grid-cols-[auto,_2fr]  w-full border-[1px] borer-[#DBDADE] rounded-md mt-[30px] shadow-md">
      <div>
        <Image
          height={250}
          width={300}
          src={SRC}
          alt="tour photo"
          className="mb-0"
        />
      </div>
      <div className="flex justify-between items-center ml-[30px] mr-[30px]">
        <div className="flex flex-col">
          <div>
            <h3 className=" text-[26px] font-semibold leading-9 text-[#00000B] mb-0">
              {TourName}
            </h3>
            <div className="flex mt-3 m-0  gap-3 items-center">
              <svg
                className="w-[15px] h-[15px] text-center map-pin opacity-60"
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
              <div className="flex gap-[6px]">
                <p className="mb-0 px-[6px] py-[3px] text-[10px] text-[#6F6B7D] font-normal leading-3 bg-[#6f6b7d2a] rounded">
                  Dhaka
                </p>
                <p className="mb-0 px-[6px] py-[3px] text-[10px] text-[#6F6B7D] font-normal leading-3 bg-[#6f6b7d2a] rounded">
                  Sonargaon
                </p>
                <p className="mb-0 px-[6px] py-[3px] text-[10px] text-[#6F6B7D] font-normal leading-3 bg-[#6f6b7d2a] rounded">
                  Bagerhat
                </p>
                <p className="mb-0 px-[6px] py-[3px] text-[10px] text-[#6F6B7D] font-normal leading-3 bg-[#6f6b7d2a] rounded">
                  Sundarban
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <circle
                  cx="9"
                  cy="9"
                  r="6.75"
                  stroke="#A5A2AD"
                  stroke-width="1.125"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 5.25V9L11.25 11.25"
                  stroke="#A5A2AD"
                  stroke-width="1.125"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="mb-0 text-[#5D586C] text-[13px] leading-5 font-normal">
                8 Days
              </p>
            </div>
          </div>

          <div className=" w-[598px]  mt-3">
            <p className="mb-0 text-[13px] text-[#5D586C] leading-5 font-normal">
              Experience an exciting journey through the stunning wilderness of
              the Sundarban Mangrove Forest, a UNESCO World Heritage Site, with
              a thrilling Sundarban Safari, staying on a small houseboat and
              anchoring on different places each night. Spot the majestic Bengal
              tigers, spotted deer, clawless otters, salt-water crocodiles,
              Indian flying foxes, much other wildlife, and many species of
              birds, including nine different types of kingfishers.{" "}
            </p>
          </div>
        </div>
        <div className=" divide-x flex h-[139px] w-[1px] bg-[#DBDADE]  ">
          <div></div>
          <div></div>
        </div>

        <div className=" text-end">
          <h2 className="text-[15px] leading-[22px] font-normal text-[#EA5455] line-through mb-0">
            $1400
          </h2>
          <h1 className="text-[22px] font-bold leading-[30px] text-[#00006D] mb-0">
            $1,240
          </h1>
          <p className="text-[#5D586C] text-[13px] font-normal leading-5 mb-0">
            per Person
          </p>
          <button className="text-[13px] text-[#FFFFFF] font-[500] leading-4 tracking-[0.43px] rounded bg-[#000057] px-[14px] py-[6px] text-center mt-[12px] hover:bg-[#EBEBF4] hover:text-[#000057] transition-all hover:border-solid-1px-[#000057]]">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};
export default TourCart;

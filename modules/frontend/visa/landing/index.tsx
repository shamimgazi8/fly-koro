import Image from "next/image";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineLanguage } from "react-icons/hi2";
import { IoPlayOutline } from "react-icons/io5";
import { LuFlagTriangleRight, LuShare2 } from "react-icons/lu";
import { MdCurrencyBitcoin } from "react-icons/md";
import { RiInformationLine } from "react-icons/ri";
import AskQuestion from "./@components/AskQuestion";
import BulletText from "./@components/BulletText";
import Reqdocs from "./@components/Reqdoc";

const VisaLanding = () => {
  return (
    <section>
      <div className="container flex gap-[30px] mt-[60px]">
        <div className="container-1 w-[770px] flex flex-col gap-[40px]">
          <div className="flex flex-col gap-[30px]">
            <div className="flex justify-between">
              <div>
                <h1 className="mb-0 text-[32px] font-semibold leading-[44px]">
                  Tourist Visa
                </h1>
              </div>
            </div>
            <div className="flex gap-[30px]">
              <div className="flex gap-5 items-center w-[170px]">
                <div className="border border-[#DBDADE)] rounded px-[10px] py-[10px]">
                  <LuFlagTriangleRight className=" text-2xl text-[#A5A2AD]" />
                </div>

                <div>
                  <h1 className="mb-0 text-[18px] font-semibold text-[#00000B] leading-6">
                    Required
                  </h1>
                  <p className="mb-0 text-[13px] text-[#A5A2AD] leading-5">
                    visa
                  </p>
                </div>
              </div>
              <div className=" flex gap-5 items-center w-[170px]">
                <div className="border border-[#DBDADE)] rounded px-[10px] py-[10px]">
                  <MdCurrencyBitcoin className=" text-2xl text-[#A5A2AD]" />
                </div>
                <div>
                  <h1 className="mb-0 text-[18px] font-semibold text-[#00000B] leading-6">
                    Currency
                  </h1>
                  <p className="mb-0 text-[13px] text-[#A5A2AD] leading-5">
                    THB
                  </p>
                </div>
              </div>

              <div className=" flex gap-5 items-center w-[170px]">
                <div className="border border-[#DBDADE)] rounded px-[10px] py-[10px]">
                  <HiOutlineLanguage className=" text-2xl text-[#A5A2AD]" />
                </div>
                <div>
                  <h1 className="mb-0 text-[18px] font-semibold text-[#00000B] leading-6">
                    Languages
                  </h1>
                  <p className="mb-0 text-[13px] text-[#A5A2AD] leading-5">
                    English, Francis
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" divide-y flex h-[1px] w-[100%] bg-[#DBDADE]  ">
            <div></div>
            <div></div>
          </div>
          <div>
            <Reqdocs />
            <BulletText
              heading={"Job Holder:"}
              options={[
                {
                  data: "Visit eight villages showcasing Polynesian culture",
                },
                {
                  data: "Canoe ride, tattoos, spear throwing, ukulele lessons and fishing",
                },
                {
                  data: "Spectacular Polynesian evening dinner show ‘Ha: Breath of Life’",
                },
                {
                  data: "Optional transportation from Waikiki hotels",
                },
              ]}
            />
            <BulletText
              heading={"Businessman:"}
              options={[
                {
                  data: "Visit eight villages showcasing Polynesian culture",
                },
                {
                  data: "Canoe ride, tattoos, spear throwing, ukulele lessons and fishing",
                },
                {
                  data: "Spectacular Polynesian evening dinner show ‘Ha: Breath of Life’",
                },
                {
                  data: "Optional transportation from Waikiki hotels",
                },
              ]}
            />
            <BulletText
              heading={"Govt Job Holder:"}
              options={[
                {
                  data: "Visit eight villages showcasing Polynesian culture",
                },
                {
                  data: "Canoe ride, tattoos, spear throwing, ukulele lessons and fishing",
                },
                {
                  data: "Spectacular Polynesian evening dinner show ‘Ha: Breath of Life’",
                },
                {
                  data: "Optional transportation from Waikiki hotels",
                },
              ]}
            />
            <BulletText
              heading={"Doctor:"}
              options={[
                {
                  data: "Visit eight villages showcasing Polynesian culture",
                },
                {
                  data: "Canoe ride, tattoos, spear throwing, ukulele lessons and fishing",
                },
                {
                  data: "Spectacular Polynesian evening dinner show ‘Ha: Breath of Life’",
                },
                {
                  data: "Optional transportation from Waikiki hotels",
                },
              ]}
            />
            <BulletText
              heading={"Advocate _ Lawyer:"}
              options={[
                {
                  data: "Visit eight villages showcasing Polynesian culture",
                },
                {
                  data: "Canoe ride, tattoos, spear throwing, ukulele lessons and fishing",
                },
                {
                  data: "Spectacular Polynesian evening dinner show ‘Ha: Breath of Life’",
                },
                {
                  data: "Optional transportation from Waikiki hotels",
                },
              ]}
            />
            <BulletText
              heading={"Student:"}
              options={[
                {
                  data: "Visit eight villages showcasing Polynesian culture",
                },
                {
                  data: "Canoe ride, tattoos, spear throwing, ukulele lessons and fishing",
                },
                {
                  data: "Spectacular Polynesian evening dinner show ‘Ha: Breath of Life’",
                },
                {
                  data: "Optional transportation from Waikiki hotels",
                },
              ]}
            />
            <BulletText
              heading={"Housewife:"}
              options={[
                {
                  data: "Visit eight villages showcasing Polynesian culture",
                },
                {
                  data: "Canoe ride, tattoos, spear throwing, ukulele lessons and fishing",
                },
                {
                  data: "Spectacular Polynesian evening dinner show ‘Ha: Breath of Life’",
                },
                {
                  data: "Optional transportation from Waikiki hotels",
                },
              ]}
            />
            <BulletText
              heading={"Retired person::"}
              options={[
                {
                  data: "Visit eight villages showcasing Polynesian culture",
                },
                {
                  data: "Canoe ride, tattoos, spear throwing, ukulele lessons and fishing",
                },
                {
                  data: "Spectacular Polynesian evening dinner show ‘Ha: Breath of Life’",
                },
                {
                  data: "Optional transportation from Waikiki hotels",
                },
              ]}
            />
            <BulletText
              heading={"Non-student Child:"}
              options={[
                {
                  data: "Visit eight villages showcasing Polynesian culture",
                },
                {
                  data: "Canoe ride, tattoos, spear throwing, ukulele lessons and fishing",
                },
                {
                  data: "Spectacular Polynesian evening dinner show ‘Ha: Breath of Life’",
                },
                {
                  data: "Optional transportation from Waikiki hotels",
                },
              ]}
            />
            <BulletText
              heading={"Unemployed:"}
              options={[
                {
                  data: "Visit eight villages showcasing Polynesian culture",
                },
                {
                  data: "Canoe ride, tattoos, spear throwing, ukulele lessons and fishing",
                },
                {
                  data: "Spectacular Polynesian evening dinner show ‘Ha: Breath of Life’",
                },
                {
                  data: "Optional transportation from Waikiki hotels",
                },
              ]}
            />
            <AskQuestion />
            <div className="bg-[#F6F6F7] px-[30px] py-[20px] rounded">
              <h1 className=" text-[22px] leading-[30px] font-bold mb-0">
                Important Notes
              </h1>
              <p className="text-[13px] text-[#5D586C] leading-5 mb-0 mt-[6px] w-[497px]">
                Please contact the Visa department for Document processing after
                the payment. Visa rate may change without any prior notice
              </p>
            </div>
            <div className=" divide-y flex h-[1px] w-[100%] bg-[#DBDADE] my-[30px]  ">
              <div></div>
              <div></div>
            </div>
            <div className=" flex justify-between bg-[#FAFAFF] px-[30px] py-[20px] rounded items-center">
              {" "}
              <div className="  flex gap-[20px] items-center">
                <Image
                  alt="passpoert"
                  height={80}
                  width={80}
                  src={"/images/holidaysDetails/passport 1.png"}
                />
                <div>
                  <h2 className="mb-0 text-primary text-[22px] leading-[30px] font-bold">
                    Need assistance in
                  </h2>
                  <h1 className="mb-0  text-primary text-[32px] leading-[30px] font-bold">
                    VISA APPLICATION?
                  </h1>
                </div>
              </div>{" "}
              <Link href={"visa/details"}>
                <button className=" hover:bg-primary duration-300 px-[20px] py-[10px] w-[159px] h-[42px] text-white text-[15px] leading-[22px] font-semibold bg-secondary rounded">
                  Request Now
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="container-2 w-[370px]">
          <div className="flex gap-4 justify-end">
            <button className="bg-[#EBEBF4] rounded px-2 py-2 h-[38px] hover:bg-[#FF9100]  transition-all">
              <IoPlayOutline className="h-[22px] w-[22px] text-[#00006D]" />
            </button>

            <button className="bg-[#EBEBF4] rounded px-2 py-2 h-[38px] hover:bg-[#FF9100]  transition-all">
              <LuShare2 className="h-[22px] w-[22px] text-[#00006D]" />
            </button>
            <button className="bg-[#EBEBF4] rounded px-2 py-2 h-[38px] hover:bg-[#FF9100] transition-all">
              <FaRegHeart className="h-[22px] w-[22px] text-[#00006D]" />
            </button>
          </div>
          <div className="mt-[100px]  px-6 py-[30px] flex flex-col gap-[30px]">
            <div className=" border border-[#DBDADE] rounded px-6 py-[30px] flex flex-col gap-[30px]">
              <div>
                <p className="mb-0 text-[18px] font-semibold leading-6 text-[#000057]">
                  Tourist Visa Thailand
                </p>
              </div>
              <div className=" flex flex-col gap-3">
                <div className=" flex gap-3">
                  <div className="px-4 py-4 border-[0.5px] border-[#DBDADE] rounded w-full">
                    <p className=" mb-1 text-[15px] text-[#A5A2AD] leading-5">
                      Visa Validity
                    </p>
                    <h1 className=" mb-0 text-[#00000B] text-[18px] leading-5">
                      90 Days
                    </h1>
                  </div>
                  <div className="px-4 py-4 border-[0.5px] border-[#DBDADE] rounded w-full">
                    <p className=" mb-1 text-[15px] text-[#A5A2AD] leading-5">
                      Max Stay
                    </p>
                    <h1 className=" mb-0 text-[#00000B] text-[18px] leading-5">
                      30 Days
                    </h1>
                  </div>
                </div>
                <div className=" flex items-end">
                  <h1 className="mb-0 text-[18px] font-semibold leading-6 text-[#000057]">
                    Tk 6,000
                  </h1>
                  <p className="mb-0 text-[13px] text-[#5D586C] leading-[20px] ">
                    /person
                  </p>
                </div>
                <div className=" flex gap-[6px] items-center mr-[-20px]">
                  <p className="mb-0 text-[9px] text-[#FF9100] font-[500] flex gap-2 items-center">
                    <RiInformationLine className="text-[#FF9100] text-[]" />
                    Please contact Visa department for Document processing
                  </p>
                </div>
              </div>

              <button className=" hover:bg-secondary duration-300 w-full   bg-[#00006D] text-[#FFFFFF] rounded text-[15px] font-semibold leading-[22px] px-5 py-[10px]">
                Select Offer
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaLanding;

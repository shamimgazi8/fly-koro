import { Checkbox } from "antd";
import Image from "next/image";
import Link from "next/link";
import { BsAsterisk } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { GoDatabase } from "react-icons/go";
import { PiFeather } from "react-icons/pi";
import { TbCurrencyDollar } from "react-icons/tb";
const SignUp = () => {
  return (
    <div className="flex ">
      <div className="h-[1080px] w-[981px]  flex justify-center items-center bg-[url('/images/image7.png')]   bg-cover bg-center z-0">
        <div className=" h-[1080px] w-[981px] flex justify-center items-center bg-opacity-80  bg-[#00006D]  z-10">
          <div className="w-[465px] z-20">
            <Image
              width={169}
              height={48}
              alt="logo sing in"
              src={"/images/White logo 1.png"}
            />
            <h1 className="mb-[0] mt-[48px] text-[#FFFFFF] text-[48px] leading-[64px] font-bold ">
              Create an Account
            </h1>
            <p className="mb-0 mt-[24px] text-[14] text-[#FFFFFF] leading-[22px] font-[500]">
              We are lorem ipsum team dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.{" "}
            </p>
            <div className=" mt-[24px]">
              <div className=" flex  items-center gap-[24px] mt-[24px]">
                <TbCurrencyDollar className="h-[38px] w-[38px] px-[8px] py-[8px] bg-[#FF9100] text-white rounded" />
                <div>
                  <p className="mb-0 text-[13px] text-white font-semibold leading-[22px] ">
                    Absolutely FREE
                  </p>
                  <p className="mb-0 text-[13px] text-white font-semibold leading-[22px] ">
                    No hidden charges, No credit card required
                  </p>
                </div>
              </div>
              <div className=" flex  items-center gap-[24px] mt-[24px]">
                <BsAsterisk className="h-[38px] w-[38px] px-[8px] py-[8px] bg-[#FF9100] text-white rounded" />
                <div>
                  <p className="mb-0 text-[13px] text-white font-semibold leading-[22px] ">
                    Fast & Easy
                  </p>
                  <p className="mb-0 text-[13px] text-white font-semibold leading-[22px] ">
                    No hidden charges, No credit card required
                  </p>
                </div>
              </div>
              <div className=" flex  items-center gap-[24px] mt-[24px]">
                <GoDatabase className="h-[38px] w-[38px] px-[8px] py-[8px] bg-[#FF9100] text-white rounded" />
                <div>
                  <p className="mb-0 text-[13px] text-white font-semibold leading-[22px] ">
                    Your Own Data
                  </p>
                  <p className="mb-0 text-[13px] text-white font-semibold leading-[22px] ">
                    No hidden charges, No credit card required
                  </p>
                </div>
              </div>
              <div className=" flex  items-center gap-[24px] mt-[24px]">
                <PiFeather className="h-[38px] w-[38px] px-[8px] py-[8px] bg-[#FF9100] text-white rounded" />
                <div>
                  <p className="mb-0 text-[13px] text-white font-semibold leading-[22px] ">
                    Unlimited Features
                  </p>
                  <p className="mb-0 text-[13px] text-white font-semibold leading-[22px] ">
                    No hidden charges, No credit card required
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" h-[1080px] w-[980px] bg-white rounded-bl-3xl rounded-tl-3xl translate-x-[-20px] flex justify-center items-center">
        <div className="w-[400px] flex justify-center items-center flex-col gap-6">
          <input
            className="h-[46px] w-[400px] px-[20px] py-[13px] border border-[#dfdee1] rounded-lg focus:outline-gray-300 duration-100"
            placeholder="Email adress"
          />
          <input
            className="h-[46px] w-[400px] px-[20px] py-[13px]  border border-[#dfdee1] rounded-lg   focus:outline-gray-300 duration-300"
            placeholder="Phone Number"
          />
          <input
            className="h-[46px] w-[400px] px-[20px] py-[13px]  border border-[#dfdee1] rounded-lg   focus:outline-gray-300 duration-300"
            placeholder="Password"
          />

          <div className=" flex items-center justify-between w-[400px]">
            <button className="hover:bg-secondary duration-300 w-[400px] px-[26px] py-[13px] bg-primary text-white text-[17px] rounded-lg leading-[22px] font-[500]">
              Free Sing up
            </button>
          </div>
          <div className="flex gap-3 items-start">
            <Checkbox />
            <p className="mb-0 text-[#28C76F] text-[15px] font-[500] leading-[22px] cursor-pointer">
              By clicking Create account, I agree that I have read and accepted
              the Terms of Use and Privacy Policy.
            </p>
          </div>
          <div className="w-full flex items-center justify-center">
            <div className=" divide-y flex h-[1px] w-[100%] bg-[#DBDADE]  "></div>
            <p className="mb-0 mx-[20px]">or</p>{" "}
            <div className=" divide-y flex h-[1px] w-[100%] bg-[#DBDADE]   "></div>
          </div>
          <div className=" w-[400px] flex justify-between">
            <button className="hover:bg-slate-200 duration-300  items-center justify-center flex gap-3 w-[190px] py-[15px] text-[15px] font-[500] tracking-[0.43px] rounded-md border border-[#DBDADE)]">
              <FcGoogle /> google
            </button>
            <button className="hover:bg-slate-200 duration-300 items-center justify-center flex gap-3 w-[190px] py-[15px] text-[15px] font-[500] tracking-[0.43px] rounded-md border border-[#DBDADE)]">
              <FaFacebook className=" text-blue-700" />
              Facebook
            </button>
          </div>
          <p className="mb-0 mt-[34px] text-[#5D586C] text-[15px] text-center ">
            Already have a FLYKORO account?
            <Link href={"/auth/sign-in"}>
              <span className=" text-[#2689FF] cursor-pointer ml-[2px]">
                Sing in
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

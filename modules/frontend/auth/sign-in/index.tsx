import { Checkbox } from "antd";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
const SignIn = () => {
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
              Discover the World: Sign In for Exclusive Travel Experiences!
            </h1>
            <p className="mb-0 mt-[24px] text-[14] text-[#FFFFFF] leading-[22px] font-[500]">
              We are lorem ipsum team dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.{" "}
            </p>
            <div className="mt-[32px] flex gap-3 ">
              <div className=" flex justify-center items-center ">
                <Image
                  height={32}
                  width={32}
                  alt="oval"
                  src={"/images/oval.png"}
                  className="z-0 "
                />
                <Image
                  height={32}
                  width={32}
                  alt="oval"
                  src={"/images/oval1.png"}
                  className="z-10"
                />
                <Image
                  height={32}
                  width={32}
                  alt="oval"
                  src={"/images/oval2.png"}
                  className="z-20"
                />
              </div>
              <div className=" flex items-center justify-center">
                <p className="mb-0 text-white text-[13px] leading-[14px] font-semibold text-center">
                  3k+ people joined us, now it’s your turn
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" h-[1080px] w-[980px] bg-white rounded-bl-3xl rounded-tl-3xl translate-x-[-20px] flex justify-center items-center">
        <div className="w-[400px] flex justify-center items-start flex-col gap-6">
          <input
            className="h-[46px] w-[400px] px-[20px] py-[13px] border border-[#dfdee1] rounded-lg focus:outline-gray-300 duration-100"
            placeholder="Email adress"
          />
          <input
            className="h-[46px] w-[400px] px-[20px] py-[13px]  border border-[#dfdee1] rounded-lg   focus:outline-gray-300 duration-300"
            placeholder="Password"
          />
          <div className="flex items-center ml-1">
            <Checkbox />
            <p className="mb-0 text-[13px] leading-[20px] text-[#5D586C] text-start ml-3 cursor-pointer">
              Remember me
            </p>
          </div>

          <div className=" flex items-center justify-between w-[400px]">
            <div>
              <p className="mb-0 text-[#47464A] text-[15px] font-[500] leading-[22px] cursor-pointer">
                Forgot password?
              </p>
            </div>

            <button className="hover:bg-secondary duration-300 w-[160px] px-[26px] py-[13px] bg-primary text-white text-[17px] rounded-md leading-[22px] font-[500]">
              Sing In
            </button>
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
          <p className="mb-0 mt-[34px] text-[#5D586C] text-[15px] ">
            Don’t have a FLYKORO account?
            <Link href={"/auth/sign-up"}>
              <span className=" text-[#2689FF] cursor-pointer ml-[2px]">
                Create an account{" "}
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

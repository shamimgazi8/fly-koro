import { Input } from "antd";
import Link from "next/link";
import { BsDot } from "react-icons/bs";

import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiMapPin2Line } from "react-icons/ri";

const ContactUs = () => {
  return (
    <>
      <div className=" container">
        <div className=" flex items-center gap-1 mt-[40px]">
          <Link href={"/"}>
            <p className="mb-0 text-[15px] text-[#A5A2AD] leading-[32px]">
              Home
            </p>
          </Link>
          <BsDot className="h-4 w-4" />
          <Link href={"/contact-us"}>
            <p className="mb-0 text-[15px] text-[#A5A2AD] leading-[32px]">
              Contact us
            </p>
          </Link>
        </div>
      </div>
      <section className=" w-full h-[532px] mt-[28px] pb-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.281836406542!2d90.38491307594232!3d23.73732708927694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8c780d8921d%3A0x548a98b9b05efa42!2sM4YOURS%20IT!5e0!3m2!1sen!2sbd!4v1702380768060!5m2!1sen!2sbd"
          width="600"
          height="450"
          loading="lazy"
          className="w-full"
        ></iframe>
      </section>
      <div className=" container  flex gap-[30px]">
        <div>
          <h1 className=" mb-[20px] text-[32px] text-black font-semibold leading-[44px]">
            Contact infomration
          </h1>
          <p className="mb-[40px] text-[15px] text-[#5D586C] leading-[26px]">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
          <div className=" w-[370px] mb-[100px]">
            <p className="text-[15px] text-[#5D586C] leading-[32px] flex gap-3 items-center">
              <RiMapPin2Line clasName="h-[18px] w-[18px] text-[#5D586C]" /> 540
              Libety Road, New Dristrict, New York
            </p>
            <div className=" divide-y flex h-[1px] w-[100%] bg-[#DBDADE] my-[18px] ">
              <div></div>
              <div></div>
            </div>
            <p className="text-[15px] text-[#5D586C] leading-[32px] flex gap-3 items-center">
              <LuPhoneCall />
              (000) 999 -656 -888
            </p>
            <div className=" divide-y flex h-[1px] w-[100%] bg-[#DBDADE] my-[18px] ">
              <div></div>
              <div></div>
            </div>
            <p className="text-[15px] text-[#5D586C] leading-[32px] flex gap-3 items-center">
              <MdOutlineMailOutline />
              travelerwp@gmail.com
            </p>
          </div>
        </div>
        <div className="border border-[#DBDADE] rounded flex gap-[20px] flex-col px-[30px] py-[30px] mb-[80px]">
          <h1 className=" mb-[20px] text-[32px] text-black font-semibold leading-[44px]">
            Send a message
          </h1>
          <div className=" w-[570px] flex gap-[24px]">
            <Input
              placeholder="Full Name*"
              className="w-[570px]  px-[20px] py-[13px]"
            />
            <Input placeholder="Email Address*" className="w-[570px]" />
          </div>
          <Input
            placeholder="Email Address"
            className="w-[570px] px-[20px] py-[13px]"
          />
          <Input
            placeholder="Comments"
            className="w-[570px] h-[197px] px-[20px] py-[13px]"
          />
          <button className="px-[26px] py-[13px] text-[17px] bg-primary rounded-lg hover:bg-secondary duration-300 text-white leading-[22px] ">
            Submit Now
          </button>
        </div>
      </div>
    </>
  );
};
export default ContactUs;

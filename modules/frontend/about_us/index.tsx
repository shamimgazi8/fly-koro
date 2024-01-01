import Image from "next/image";
import Link from "next/link";
import { BsDot } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import ClientSay from "./@componants/ClientsSay";
import SubscribeForOffers from "../@common/subscribe-for-offers";
const partner = [
  {
    src: "/images/partner/1.png",
  },
  {
    src: "/images/partner/2.png",
  },
  {
    src: "/images/partner/3.png",
  },
  {
    src: "/images/partner/4.png",
  },
  {
    src: "/images/partner/5.png",
  },
];
const partner2 = [
  {
    src: "/images/partner/6.png",
  },
  {
    src: "/images/partner/7.png",
  },
  {
    src: "/images/partner/8.png",
  },
  {
    src: "/images/partner/9.png",
  },
  {
    src: "/images/partner/10.png",
  },
];
const AboutUs = () => {
  return (
    <>
      <div className="container mb-[40px]">
        <div className=" lg:flex items-center gap-1 mt-[40px]">
          <Link href={"/"}>
            <p className="mb-0 text-[15px] text-[#A5A2AD] leading-[32px]">
              Home
            </p>
          </Link>
          <BsDot className="h-4 w-4" />
          <Link href={"/about-us"}>
            <p className="mb-0 text-[15px] text-[#A5A2AD] leading-[32px]">
              About us
            </p>
          </Link>
        </div>
        <div className="w-[1170px] mt-[26px] justify-center items-center">
          <div className=" cursor-pointer h-[90px] w-[90px] bg-gray-100 rounded-full flex justify-center items-center absolute top-[45%] left-[47.8%]">
            <FaPlay className=" text-primary h-[50px] w-[30px] ml-[6px]" />
          </div>
          <Image
            alt="video formet"
            height={500}
            width={1170}
            src={"/images/hotelsSearch/video.png"}
          />
        </div>
        <div className="mt-[60px]">
          <h1 className=" mb-0 text-primary text-[32px] font-semibold leading-[44px]">
            About the company
          </h1>
          <p className="mb-0 text-[#5D586C] text-[15px] leading-[32px] mt-[30px]">
            This boutique hotel in the Manhattan neighborhood of Nolita features
            a private rooftop and rooms with free WiFi. The Bowery subway
            station is 1 block from this New York hotel. Guest rooms at the
            Nolitan Hotel provide a 37-inch flat-screen cable TV and an iPod
            dock. The bathrooms provide bathrobes and slippers.
          </p>
          <p className="mb-0 text-[#5D586C] text-[15px] leading-[32px] mt-[30px]">
            {" "}
            The hotel provides free bike rentals and a local gym membership for
            guests. There is also on-site dining at the French bistro Cantine
            Parisienne. A complimentary wine and cheese hour is served every
            Monday through Saturday.{" "}
          </p>
          <p className="mb-0 text-[#5D586C] text-[15px] leading-[32px] mt-[30px]">
            {" "}
            Times Square, Rockefeller Center and Madison Square Garden are 4.8
            km from The Nolitan Hotel. The hotel is bordered by SoHo, Little
            Italy and Chinatown. NoLita is a great choice for travelers
            interested in nightlife, food and culture.In this area you can shop
            ’til you drop for popular brands like Apple, H&M, Zara, Prada, Ralph
            Lauren.
          </p>
        </div>
        <div className="mt-[60px] flex gap-[30px] ">
          <div>
            <h1 className=" text-primary text-[18px] font-semibold leading-6">
              Our Mission
            </h1>
            <p className="mb-0 text-[#5D586C] text-[15px] leading-[32px] mt-[30px]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Quis nostrud kemmith exercitation ullamco
              laboris nisi ut aliquip.
            </p>
            <ul className=" mt-9 leading-8 list-disc ml-[1.25rem] ">
              <li> Excepteur sint occaecat cupidatat non proident.</li>
              <li>Quis autem vel eum iure reprehende qui in ea.</li>
              <li>At vero eos accusamus iusto odio dignissimos.</li>
            </ul>
          </div>
          <div>
            {" "}
            <h1 className=" text-primary text-[18px] font-semibold leading-6">
              Our Vision
            </h1>
            <p className="mb-0 text-[#5D586C] text-[15px] leading-[32px] mt-[30px]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Quis nostrud kemmith exercitation ullamco
              laboris nisi ut aliquip.{" "}
            </p>
            <p className="mb-0 text-[#5D586C] text-[15px] leading-[32px] mt-[30px]"></p>
            <ul className=" mt-9 leading-8 list-disc ml-[1.25rem] ">
              <li> Excepteur sint occaecat cupidatat non proident.</li>
              <li>Quis autem vel eum iure reprehende qui in ea.</li>
              <li>At vero eos accusamus iusto odio dignissimos.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" py-[80px] bg-[#FAFAFF] flex  ">
        <div className=" container">
          <h1 className=" mb-0 text-primary text-[32px] font-semibold leading-[44px]">
            What our clients say
          </h1>
          <div className=" flex gap-[30px]">
            <ClientSay name={"Wade Warren"} />
            <ClientSay name={"Courtney Henry"} />
            <ClientSay name={"Robert Fox"} />
          </div>
        </div>
      </div>
      <div className="py-[80px] text-center">
        <h1 className=" mb-0 text-primary text-[32px] font-semibold leading-[44px]">
          Our Partner
        </h1>
        <p className=" mb-0 mt-[16px] text-[#5D586C] text-[18px] ">
          Lorem Ipsum dolor sit amet consecture, Eget.
        </p>
        <div className="container mt-[40px] flex flex-col gap-[40px] ">
          <div className=" flex justify-between items-center self-stretch">
            {partner.map((img, i) => {
              return (
                <Image
                  key={i}
                  alt="partner"
                  height={48}
                  width={135}
                  src={img.src}
                  className=" cursor-pointer"
                />
              );
            })}
          </div>
          <div className=" flex justify-between items-center self-stretch">
            {partner2.map((img, i) => {
              return (
                <Image
                  key={i}
                  alt="partner"
                  height={48}
                  width={135}
                  src={img.src}
                  className=" cursor-pointer"
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="container">
        <SubscribeForOffers />
      </div>
    </>
  );
};

export default AboutUs;

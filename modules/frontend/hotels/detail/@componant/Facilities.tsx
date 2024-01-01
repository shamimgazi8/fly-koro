import { BsCheck2Square } from "react-icons/bs";
import { FaBriefcase } from "react-icons/fa";
import { IoBriefcaseOutline } from "react-icons/io5";
import { AiOutlineSafety } from "react-icons/ai";
import { LuFlagTriangleRight } from "react-icons/lu";
import { TbBus, TbMeat, TbParking } from "react-icons/tb";
import { TiInputChecked } from "react-icons/ti";
import { IoIosFitness } from "react-icons/io";
import { BiCube } from "react-icons/bi";
import { PiTelevision } from "react-icons/pi";

const Facilities = () => {
  const FacilitiesCart = ({ facilitiesType, facilitiesData }: any) => {
    let typeofFacilities = facilitiesType.split(" ")[0];
    return (
      <div className="w-[370px] border border-[#DBDADE] rounded px-5 py-5">
        <div>
          <h1 className="text-[15px] text-black font-semibolt leading-[22px] mb-0 flex gap-[6px] items-center">
            {}
            {typeofFacilities == "Business" ? <IoBriefcaseOutline className='opacity-80' /> : ""}
            {typeofFacilities == "Food" ? <TbMeat className='opacity-80' /> : ""}
            {typeofFacilities == "Parking" ? <TbParking className='opacity-80' /> : ""}
            {typeofFacilities == "Service" ? <LuFlagTriangleRight className='opacity-80' /> : ""}
            {typeofFacilities == "Transportation" ? <TbBus className='opacity-80' /> : ""}
            {typeofFacilities == "Safety" ? <AiOutlineSafety className='opacity-80' /> : ""}
            {typeofFacilities == "Fitness" ? <IoIosFitness className='opacity-80' /> : ""}
            {typeofFacilities == "General" ? <BiCube className='opacity-80' /> : ""}
            {typeofFacilities == "Media" ? <PiTelevision className='opacity-80' /> : ""}
            {facilitiesType}
          </h1>
        </div>
        <div className=" divide-y flex h-[1px] w-[100%] bg-[#DBDADE] my-[12px] ">
          <div></div>
          <div></div>
        </div>
        <div>
          {facilitiesData.map((data:any, i:any) => {
            return (
              <p
                className="mb-[12px] text-[13px] text-[#5D586C] leading-5 font-normal flex gap-[6px]"
                key={i}
              >
             <BsCheck2Square className='text-[#28C76F] text-[15px] text-center mt-[2px]' />
                {data.d}
              </p>
            );
          })}
        </div>
      </div>
    );
  };
  return (
    <section className="p-0">
      <div className=" divide-y flex h-[1px] w-[100%] bg-[#DBDADE] my-[40px] ">
        <div></div>
        <div></div>
      </div>
      <h1 className="mb-0 text-[22px] text-black font-bold leading-[30px]">
        Facilities
      </h1>
      <div className="mt-6 grid grid-cols-2 gap-[30px]">
        <div className="flex flex-col gap-3">
          <FacilitiesCart
            facilitiesType={"Business Facilities"}
            facilitiesData={[{ d: "Conference Hostess" }]}
          />
          <FacilitiesCart
            facilitiesType={"Food & Drink"}
            facilitiesData={[{ d: "Breakfast" }, { d: "Set Menu Lunch" }]}
          />
          <FacilitiesCart
            facilitiesType={"Parking"}
            facilitiesData={[
              { d: "Free Large Vehicle Parking" },
              { d: "Large Vechile Parking" },
            ]}
          />
          <FacilitiesCart
            facilitiesType={"Service & Extras"}
            facilitiesData={[{ d: "Medical Service" }]}
          />
          <FacilitiesCart
            facilitiesType={"Transportation"}
            facilitiesData={[
              { d: "Paid Shuttle Service" },
              { d: "Airport Shuttle Service" },
            ]}
          />
          <FacilitiesCart
            facilitiesType={"Safety & Security"}
            facilitiesData={[{ d: "24-Hour Security" }]}
          />
        </div>
        <div className="flex flex-col gap-3">
          <FacilitiesCart
            facilitiesType={"Fitness & Ellness Faciltites"}
            facilitiesData={[{ d: "Swimming Pool " }, { d: "Gym" }]}
          />
          <FacilitiesCart
            facilitiesType={"General"}
            facilitiesData={[
              { d: "Air Conditioning " },
              { d: "Check-in " },
              { d: "Check-Out" },
              { d: "Coffee/Tea in Lobby" },
              { d: "id Required" },
              { d: "Elevator" },
              { d: "No Alcohol" },
              { d: " Towel" },
              { d: "Locker" },
            ]}
          />
          <FacilitiesCart
            facilitiesType={"Media & Technology"}
            facilitiesData={[
              { d: "Mobile Phone Coverage " },
              { d: "Telephone" },
              { d: "Wifi" },
            ]}
          />
        </div>
      </div>
    </section>
  );
};
export default Facilities;

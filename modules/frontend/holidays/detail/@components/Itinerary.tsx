import { Collapse } from "antd";
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found:a welcome guest in many households across the world.
`;

const items = [
  {
    key: "1",
    label: (
      <div className=" flex gap-3">
        <button className="px-[14px] py-[6px] text-[13px] text-[#5D586C] leading-4 font-[500] border border-[#DBDADE] rounded bg-white ">
          Day 1
        </button>{" "}
        {`Los Angeles`}
      </div>
    ),
    children: <p>{text}</p>,
  },
  {
    key: "2",
    label: (
      <div className=" flex gap-3">
        <button className="px-[14px] py-[6px] text-[13px] text-[#5D586C] leading-4 font-[500] border border-[#DBDADE] rounded bg-white ">
          Day 2
        </button>{" "}
        {`San Francisco`}
      </div>
    ),
    children: <p>{text}</p>,
  },
  {
    key: "3",
    label: (
      <div className=" flex gap-3 ">
        <button className="px-[14px] py-[6px] text-[13px] text-[#5D586C] leading-4 font-[500] border border-[#DBDADE] rounded bg-white ">
          Day 3
        </button>{" "}
        {`New York`}
      </div>
    ),
    children: <p>{text}</p>,
  },
  {
    key: "4",
    label: (
      <div className=" flex gap-3">
        <button className="px-[14px] py-[6px] text-[13px] text-[#5D586C] leading-4 font-[500] border border-[#DBDADE] rounded bg-white ">
          Day 4
        </button>{" "}
        {`Navada`}
      </div>
    ),
    children: <p>{text}</p>,
  },
];
const Itinerary = () => {
  return (
    <div>
      <h1 className="mb-3 text-[22px] font-bold text-black leading-[30px] mt-[30px] ">
        Itinerary
      </h1>
      <Collapse
        items={items}
        defaultActiveKey={["1"]}
        expandIconPosition="end"
      />
      <div className=" divide-y flex h-[1px] w-[100%] bg-[#DBDADE] my-[30px]  ">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
export default Itinerary;

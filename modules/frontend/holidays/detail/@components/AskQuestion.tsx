import { Collapse } from "antd";
const Questionsvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M3.33301 17.5003V6.66699C3.33301 5.28628 4.4523 4.16699 5.83301 4.16699H14.1663C15.5471 4.16699 16.6663 5.28628 16.6663 6.66699V11.667C16.6663 13.0477 15.5471 14.167 14.1663 14.167H6.66634L3.33301 17.5003"
        stroke="#A5A2AD"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.99967 6.66699V9.16699"
        stroke="#A5A2AD"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.99967 11.6664V11.6747"
        stroke="#A5A2AD"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
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
        <Questionsvg /> {`Eum eu sumo albucius perfecto`}
      </div>
    ),
    children: <p>{text}</p>,
  },
  {
    key: "2",
    label: (
      <div className=" flex gap-3">
        <Questionsvg /> {`Te his eros ludus tibique.`}
      </div>
    ),
    children: <p>{text}</p>,
  },
  {
    key: "3",
    label: (
      <div className=" flex gap-3">
        <Questionsvg />{" "}
        {`Lorem ipsum dolor sit amet consectetur. Et aliquam feugiat.`}
      </div>
    ),
    children: <p>{text}</p>,
  },
  {
    key: "4",
    label: (
      <div className=" flex gap-3">
        <Questionsvg /> {`Lorem ipsum dolor sit amet consectetur. Massa sed.`}
      </div>
    ),
    children: <p>{text}</p>,
  },
];
const AskQuestion = () => {
  return (
    <div>
      <h1 className="mb-3 text-[22px] font-bold text-black leading-[30px] mt-[30px] ">
        Frequesntly asked questions
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
export default AskQuestion;

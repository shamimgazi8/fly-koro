"use client";
import { Tabs, TabsProps } from "antd";
import { useState } from "react";
import MegaSearch from "../mega-search";

const MegaTab = () => {
  const lable = [
    "empty",
    "flight/search",
    "hotels/search",
    "holidays/search",
    "foreigners",
    "event",
    "visa",
  ];

  const [Lable, setlable] = useState("Flight");
  const onChange = (key: any) => {
    setlable(lable[key]);
    console.log(Lable);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Flight",
      children: <MegaSearch lb={Lable} />,
    },
    {
      key: "2",
      label: "Hotels",
      children: <MegaSearch lb={Lable} />,
    },
    {
      key: "3",
      label: "Holiday",
      children: <MegaSearch lb={Lable} />,
    },
    {
      key: "4",
      label: "Foreigner’s Holiday",
      children: <MegaSearch lb={Lable} />,
    },
    {
      key: "5",
      label: "Events",
      children: <MegaSearch lb={Lable} />,
    },
    {
      key: "6",
      label: "Visa",
      children: <MegaSearch lb={Lable} />,
    },
  ];
  return (
    <div className="z-10 -mb-[230px]  ">
      <div className="mb-10">
        <Tabs
          tabBarGutter={60}
          defaultActiveKey="1"
          items={items}
          className="mega_tab"
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default MegaTab;

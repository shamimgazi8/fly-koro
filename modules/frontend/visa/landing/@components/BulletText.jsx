const BulletText = ({ heading, options }) => {
  const data = [
    { data: "Visit eight showcasing Polynesian culture" },
    {
      data: "Canoer ride, tatoos, spear throwinf, ukulele leassons and finising",
    },
    { data: "Spectaculer Polynesian evening dinner show 'ha: Breat of life'" },
    { data: "Option transportation from Waikiki hotels" },
  ];
  return (
    <div>
      <h1 className="mb-3 text-[22px] font-bold text-black leading-[30px] mt-[30px] ">
        {heading}
      </h1>
      {options.map((data, i) => {
        return (
          <p
            key={i}
            className="flex gap-3 mb-0 text-[15px] text-[#5D586C] leading-8 font-normal items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <rect width="16" height="16" rx="8" fill="#D4F4E2" />
              <path
                d="M6.66699 5.33301L9.33366 7.99967L6.66699 10.6663"
                stroke="#28C76F"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {data.data}
          </p>
        );
      })}
      <div className=" divide-y flex h-[1px] w-[100%] bg-[#DBDADE] my-[30px]  ">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
export default BulletText;

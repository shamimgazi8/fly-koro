import Image from "next/image";
const Nearby = () => {
  const IPData = [
    { data: `3.1 km from Dolphin More police Box` },
    { data: " 0.4 Km from Premier Bank ATM" },
    { data: "0.5 Km from coxs Bazar Sea Beach Nearby Terminal" },
    { data: " 0.091 km from Srar Line Bus Counter" },
    { data: "4.6 km from Coxs Baxar Airport" },
    { data: "5.2 Km from Coxs Bazar Airport" },
  ];

  return (
    <section className="p-0">
      <div className=" divide-y flex h-[1px] w-[100%] bg-[#DBDADE] my-[40px] ">
        <div></div>
        <div></div>
      </div>
      <h1 className="mb-0 text-[22px] text-black font-bold leading-[30px]">
        What`s Nearby
      </h1>
      <div className="mt-6 flex gap-[30px]">
        <div className="h-[323px] w-[470px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.281836406542!2d90.38491307594232!3d23.73732708927694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8c780d8921d%3A0x548a98b9b05efa42!2sM4YOURS%20IT!5e0!3m2!1sen!2sbd!4v1702380768060!5m2!1sen!2sbd"
            width="470"
            height="323"
            loading="lazy"
          ></iframe>
        </div>
        <div>
          <h2 className="text-black text-[15px] font-semibolt leading-[22px]">
            Interest Points
          </h2>
          <div className=" divide-y flex h-[1px] w-[100%] bg-[#DBDADE] my-[12px] ">
            <div></div>
            <div></div>
          </div>
          {IPData.map((data, i) => {
            return (
              <p
                key={i}
                className=" flex items-center mb-[12px] text-[13px] text-[#5D586C] font-normal leading-5 gap-[6px] "
              >
                {" "}
                <svg
                  className="mr-[6px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <circle
                    cx="9"
                    cy="8.25049"
                    r="2.25"
                    stroke="#A5A2AD"
                    stroke-width="1.125"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.2427 12.4933L10.0605 15.6755C9.47484 16.2606 8.52591 16.2606 7.94025 15.6755L4.75725 12.4933C2.41419 10.1501 2.41426 6.35115 4.7574 4.00806C7.10053 1.66496 10.8995 1.66496 13.2426 4.00806C15.5857 6.35115 15.5858 10.1501 13.2427 12.4933V12.4933Z"
                    stroke="#A5A2AD"
                    stroke-width="1.125"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                {data.data}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Nearby;

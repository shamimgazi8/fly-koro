const Reqdocs = () => {
  const text = `This boutique hotel in the Manhattan neighborhood of Nolita features a private rooftop and rooms with free WiFi. The Bowery subway station is 1 block from this New York hotel.\n
  Guest rooms at the Nolitan Hotel provide a 37-inch flat-screen cable TV and an iPod dock. The bathrooms provide bathrobes and slippers.\n
  The hotel provides free bike rentals and a local gym membership for guests. There is also on-site dining at the French bistro Cantine Parisienne. A complimentary wine and cheese hour is served every Monday through Saturday.
  Times Square, Rockefeller Center and Madison Square Garden are 4.8 km from The Nolitan Hotel. The hotel is bordered by SoHo, Little Italy and Chinatown.\n
  NoLita is a great choice for travelers interested in nightlife, food and culture.In this area you can shop ’til you drop for popular brands like Apple, H&M, Zara, Prada, Ralph Lauren.\n
  We speak your language!`;
  return (
    <>
      <div className=" mt-[40px] flex flex-col gap-3">
        <h1 className="mb-0 text-[22px] font-bold text-black leading-[30px]">
          Required Documents for Sticker visa (Thailand)
        </h1>

        <div className="text-[15px] leading-[32px] font-normal">{text}</div>
      </div>

      <div className=" divide-y flex h-[1px] w-[100%] bg-[#DBDADE] my-[30px]  ">
        <div></div>
        <div></div>
      </div>
    </>
  );
};
export default Reqdocs;

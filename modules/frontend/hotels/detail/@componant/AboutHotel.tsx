"use client";
import TextExpander from "../../../@common/text-expander";
const AboutHotel = () => {
  const text = `This boutique hotel in the Manhattan neighborhood of Nolita features a
  private rooftop and rooms with free WiFi. The Bowery subway station is 1
  block from this New York hotel. Guest rooms at the Nolitan Hotel provide
  a 37-inch flat-screen cable TV and an iPod dock. The bathrooms provide
  bathrobes and slippers. This boutique hotel in the Manhattan
  neighborhood of Nolita features a private rooftop and rooms with free
  WiFi. The Bowery subway station is 1 block from this New York hotel.
  Guest rooms at the Nolitan Hotel provide a 37-inch flat-screen cable TV
  and an iPod dock. The bathrooms provide bathrobes and slippers. This
  boutique hotel in the Manhattan neighborhood of Nolita features a
  private rooftop and rooms with free WiFi. The Bowery subway station is 1
  block from this New York hotel. Guest rooms at the Nolitan Hotel provide
  a 37-inch flat-screen cable TV and an iPod dock. The bathrooms provide
  bathrobes and slippers. This boutique hotel in the Manhattan
  neighborhood of Nolita features a private rooftop and rooms with free
  WiFi. The Bowery subway station is 1 block from this New York hotel.
  Guest rooms at the Nolitan Hotel provide a 37-inch flat-screen cable TV
  and an iPod dock. The bathrooms provide bathrobes and slippers.`;
  return (
    <div className=" mt-[40px] flex flex-col gap-3">
      <h1 className="mb-0 text-[22px] font-bold text-black leading-[30px]">
        About Hotel
      </h1>

      <div className="text-[15px] leading-[32px] font-normal">
        <TextExpander
          text={text}
          collapsedNumWords={"400"}
          textColor={"#00000B"}
        />
      </div>
    </div>
  );
};
export default AboutHotel;

const Nearby = () => {
  return (
    <section className="p-0">
      <h1 className="mb-0 text-[22px] text-black font-bold leading-[30px]">
        Tours Location
      </h1>
      <div className="mt-6 flex gap-[30px]">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.281836406542!2d90.38491307594232!3d23.73732708927694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8c780d8921d%3A0x548a98b9b05efa42!2sM4YOURS%20IT!5e0!3m2!1sen!2sbd!4v1702380768060!5m2!1sen!2sbd"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className=" divide-y flex h-[1px] w-[100%] bg-[#DBDADE] my-[30px] ">
        <div></div>
        <div></div>
      </div>
    </section>
  );
};
export default Nearby;

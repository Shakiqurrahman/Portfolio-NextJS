const ClientBox = () => {
  return (
    <div className="lg:w-1/2 md:w-[60%] w-full px-6 py-6 rounded-[30px] shadow-box flex flex-wrap sm:flex-nowrap  gap-6">
      <div className="px-[30px] py-[42px] text-center shadow-box  flex-1">
        <h1 className="text-[36px] mb-[17px] tracking-tighter">+02</h1>
        <p className="uppercase text-[#BCBCBC] text-[12px] opacity-50">
          Years <br /> Experience
        </p>
      </div>
      <div className="px-[30px] py-[42px] text-center shadow-box flex-1">
        <h1 className="text-[36px] mb-[17px] tracking-tighter">+15</h1>
        <p className="uppercase text-[#BCBCBC] text-[12px] opacity-50">
          Clients <br /> WorldWide
        </p>
      </div>
      <div className="px-[30px] py-[42px] text-center shadow-box flex-1">
        <h1 className="text-[36px] mb-[17px] tracking-tighter">+50</h1>
        <p className="uppercase text-[#BCBCBC] text-[12px] opacity-50">
          Total <br /> Projects
        </p>
      </div>
    </div>
  );
};

export default ClientBox;

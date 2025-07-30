function HowTooperateCard({ logo, heading1, text }) {
  return (
    <>
      <div className=" border border-gray-300 p-4 rounded-2xl bg-white hover:shadow-md space-y-3 flex flex-col items-start text-left">
        <div className="w-16 h-16 rounded p-3 bg-[#F0F5FF]  flex items-center justify-center">
          {logo}
        </div>
        <h3 className="font-medium">{heading1}</h3>
        <p className="text-sm">{text}</p>
      </div>
    </>
  );
}
export default HowTooperateCard;

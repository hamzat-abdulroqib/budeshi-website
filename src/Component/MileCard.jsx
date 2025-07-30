function MileCard({ number, text }) {
  return (
    <>
      <div className=" shadow-md border-[#e5e7eb] border-px py-6 bg-white rounded-2xl w-full md:max-w-[340px]">
        <p className="font-semibold text-3xl md:text-5xl text-center">
          {number}
        </p>
        <p className=" text-center text-muted">{text}</p>
      </div>
    </>
  );
}

export default MileCard;

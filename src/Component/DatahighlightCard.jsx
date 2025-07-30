function DatahighlightCard({ heading5, text1 }) {
  return (
    <>
      <div className="border-l-2 border-[#223A90] py-3 pl-3">
        <h5 className="font-semibold md:text-xl">{heading5}</h5>
        <p className="text-sm md:text-xl"> {text1}</p>
      </div>
    </>
  );
}

export default DatahighlightCard;

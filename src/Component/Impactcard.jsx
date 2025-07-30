function Impactcard({ percent, percenttext }) {
  return (
    <>
      <div className="border border-gray-300 text-center space-y-4 bg-white  rounded-xl p-4">
        <h3 className="font-semibold text-2xl md:text-4xl lg:text-5xl">
          {percent}
        </h3>
        <p className="md:text-sm ">{percenttext}</p>
      </div>
    </>
  );
}

export default Impactcard;

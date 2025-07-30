function Newsleter() {
  return (
    <>
      {" "}
      <section className="px-6 md:px-12">
        <div className="w-full max-w- py-10 md:py-12 lg:py-16 space-y-10">
          <h2 className="font-semibold text-xl md:text-2xl lg:text-3xl text-center">
            Always be the first to <br /> know what we are up to
          </h2>
          <form
            action=""
            className="flex w-full px-3 py-1.5  max-w-[500px] mx-auto bg-white rounded-l-full rounded-r-full shadow"
          >
            {" "}
            <input
              type="text"
              placeholder="enter your email "
              className="w-full rounded-l-full pl-8"
            />
            <button className="py-2 px-4 rounded-l-full rounded-r-full text-sm md:text-base text-white bg-[#223A90] whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Newsleter;

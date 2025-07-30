import React from "react";
// import dashboard from "../assets/dashboard.png";

export const Hero = ({ button1, heading, text, button2, dashboard }) => {
  return (
    <>
      <section className="flex justify-center px-6 md:px-28">
        <div className="space-y-5 w-full max-w-auto">
          <div className=" hero font-semibold rounded-l-full rounded-r-full w-fit py-1.5 px-6 mx-auto">
            {button1}
          </div>
          <h1 className=" heading text-2xl text-center font-semibold md:text-4xl lg:text-5xl">
            {heading}
          </h1>
          <p className=" text-hero text-center text-xl text-black">{text}</p>
          <div className="justify-center flex">
            <button className="flex gap-2 justify-center border border-[#223A90] bg-[#223A90] text-white hover:bg-[#224A90] font-medium px-10 py-2 rounded-l-full rounded-r-full">
              {button2}
            </button>
          </div>
          <img src={dashboard} alt="dasbord logo" className="mx-auto" />
        </div>
      </section>
    </>
  );
};

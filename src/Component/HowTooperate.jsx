import HowTooperateCard from "./HowTooperateCard";
import { CircleAlert, Layers, Box } from "lucide-react";

function HowTooperate() {
  return (
    <>
      <section className="Howtooperate bg- relative  py-24 px-6 md:px-20 lg:px-24">
        <div className="bg-transperent mt-20">
          <div className="flex flex-col md:flex-row justify-between gap-3 my-12 ">
            <h1 className="font-semibold w-full text-2xl md:text-4xl lg:text-5xl md:w-[60%]">
              How we operate
            </h1>
            <p className="w-full md:w-[40%] text-muted text-sm md:text-lg lg:text-xl">
              A closer look into how we ensure transparency and track
              accountability
            </p>
          </div>
          <div className="space-y-5">
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <HowTooperateCard
                logo={<CircleAlert className="w-10 h-10 " />}
                heading1="Freedom of Information (FOI)"
                text="The Freedom of Information Act gives citizens the right to access information held by public authorities. It promotes transparency and accountability in governance."
              />
              <HowTooperateCard
                logo={<Layers className="w-10 h-10 text-[#223A90]" />}
                heading1="Open Contracting"
                text="Open Contracting is about making entire contracting processes more transparent and accessible to the public. It aims to improve the efficiency and effectiveness of public contracts."
              />
              <HowTooperateCard
                logo={<Box className="w-10 h-10 text-[#223A90]" />}
                heading1="Data Policy"
                text="Our data policy outlines how we collect, use, and protect the contracting data. It ensures compliance with data protection regulations and promotes responsible data use."
              />
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <HowTooperateCard
                logo={<CircleAlert className="w-10 h-10" />}
                heading1="Open Contracting Data Standard (OCDS)"
                text="OCDS is a free, non-proprietary open data standard for public contracting, implemented by governments around the world. It describes how to publish data and documents at all stages of the contracting process."
              />
              <HowTooperateCard
                logo={<Layers className="w-10 h-10 text-[#223A90]" />}
                heading1="State OCDS Portals in Nigeria"
                text="Several states in Nigeria have implemented OCDS portals to publish their contracting data. These portals provide valuable insights into state-level public procurement processes."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HowTooperate;

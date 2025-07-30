import HowTooperateCard from "./HowTooperateCard";
import { CircleAlert, Layers } from "lucide-react";

function Indepth() {
  return (
    <>
      <section className="px-6 md:px-12 lg:px-24 py-16">
        <div className="space-y-16 w-full max-w-[1440px]">
          <div className="flex flex-col md:flex-row gap-3 md:justify-between">
            <h2 className="font-semibold text-2xl md:text-4xl lg:text-5xl">
              In-depth Analysis
            </h2>
            <p className="md:text-xl w-full max-w-[428px]">
              A closer look into how we ensure transparency and track
              accountability
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <HowTooperateCard
              logo={<CircleAlert className="w-10 h-10 " />}
              heading1="Trends"
              text="The data shows a consistent upward trend in transparency scores, indicating significant improvements in public procurement processes. This positive trajectory suggests that government initiatives and civil society efforts are having a tangible impact on enhancing accountability."
            />
            <HowTooperateCard
              logo={<Layers className="w-10 h-10 " />}
              heading1="Challenges"
              text="Despite progress, challenges remain in fully implementing transparency measures across all levels of government. Inconsistent reporting standards and limited technological infrastructure in some regions continue to pose obstacles to achieving complete transparency."
            />
            <HowTooperateCard
              logo={<Layers className="w-10 h-10 " />}
              heading1="Recommendation"
              text="To further improve transparency, we recommend: 1) Standardizing reporting formats across all government agencies, 2) Investing in digital infrastructure to facilitate real-time data sharing, and 3) Enhancing public education on procurement processes to encourage greater citizen participation and oversight."
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Indepth;

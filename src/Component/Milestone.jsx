import MileCard from "./mileCard";

function Milestone() {
  return (
    <>
      <section className="flex justify-center pt-24 px-6 md:px-12">
        <div className="w-full max-w-[1110px] mb-36 space-y-16 mx-auto">
          <div className="space-y-5">
            <p className="text-[10px] md:text-sm text-[#223A90] font-medium">
              Milestones
            </p>
            <h2 className="text-2xl font-semibold md:text-4xl lg:text-5xl">
              Tracking Progress and Milestones
            </h2>
            <p className="text-muted text-xs md:text-base">
              Effective progress tracking and milestone setting are critical
              components of any successful project or personal goal. By
              systematically monitoring our achievements.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-3 justify-between">
            <MileCard number="15,511+" text="Total Projects" />
            <MileCard number="₦30M" text="Total Amount" />
            <MileCard number="25+" text="States Covered" />
          </div>
        </div>
      </section>
    </>
  );
}
export default Milestone;

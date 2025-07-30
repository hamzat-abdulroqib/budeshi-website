import DatahighlightCard from "./DatahighlightCard";

function Datahilight() {
  return (
    <>
      <section className="flex px-5 justify-center py-16 md:px-12">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-[34%]">
            <h3 className="font-semibold text-xl md:text-3xl lg:text-4xl">
              Data <br />
              Highlights
            </h3>
            <p className="text-muted text-sm md:text-xl mt-3">
              These are some highlights form the data portal on projects and
              contractors.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-2 w-full  md:w-[67%]">
            <div className="shadow p-4 rounded-xl border border-gray-200 space-y-6">
              <h4 className="font-semibold text-lg md:text-2xl">
                Top MDAs by Project count
              </h4>
              <div className="flex flex-col gap-4">
                <DatahighlightCard
                  heading5="Universal Basic Education Commission"
                  text1="Amount:6078"
                />
                <DatahighlightCard
                  heading5="National Primary Health Care Development Agency"
                  text1="Amount:1278"
                />
                <DatahighlightCard
                  heading5="Nigerian Communications Commission"
                  text1="Amount:1004"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-xl border border-gray-200 shadow">
                <h4 className="font-semibold text-lg md:text-2xl">
                  Top Contractors By Projects
                </h4>
                <div className="h-fit mt-6 border-l-2 border-[#223A90] pl-4 space-y-3">
                  <h5 className="font-semibold md:text-xl">
                    {" "}
                    FON APPLE INTEGRATED SERVICES LTD
                  </h5>
                  <p className="text-sm md:text-xl"> projects:101</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Datahilight;

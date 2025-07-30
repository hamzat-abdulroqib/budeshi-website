import Impactcard from "./Impactcard";

function Impact() {
  return (
    <>
      <section className="px-6 md:px-12 lg:px-24 pt-12 pb-20 space-y-16">
        <div className="space-y-4">
          <p className="text-[#223A90] font-medium">Impact</p>
          <h2 className="font-semibold text-2xl md:text-4xl lg:text-5xl">
            How we are making impact
          </h2>
          <p className="text-gray-500 w-full max-w-[740px]">
            Effective progress tracking and milestone setting are critical
            components of any successful project or personal goal. By
            systematically monitoring our achievements.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Impactcard
            percent="35%"
            percenttext="Increase on transparency scores since 2019"
          />
          <Impactcard
            percent="50%"
            percenttext="Improvement of Public access to procurement data"
          />
          <Impactcard
            percent="40%"
            percenttext="Decrement in the number of reported irregularities"
          />
          <Impactcard
            percent="50%"
            percenttext="Increase in citizen engagement in the procurement process has doubled"
          />
        </div>
      </section>
    </>
  );
}

export default Impact;

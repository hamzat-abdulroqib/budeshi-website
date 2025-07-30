import React from "react";
import ConstructorCard from "../Component/ConstructorCard";

function Contractor() {
  return (
    <>
      <main className="max-w-[1440px] mx-auto mt-10 md:mt-30">
        <div className="w-full max-w-[642px] mx-auto space-y-4 md-12 md:mb-20">
          <div className=" btn-constructor font-semibold rounded-l-full rounded-r-full w-fit py-1.5 px-3 mx-auto">
            Contractors
          </div>
          <h1 className="text-xl md:text-3xl lg:text-5xl md:text-center font-semibold">
            Your Guide to Contractors and Their Work Portfolio
          </h1>
          <p className="w-full max-w-[600px] md:text-center mx-auto">
            Explore a comprehensive list of contractors, including their
            details, total allocated projects, active projects, and completed
            projects.
          </p>
        </div>

        <div className="grid grid-cols-3">
          <ConstructorCard
            company="ROYAL"
            name="Royal North- East Nig ltd"
            totalProjects={1}
            totalValue={25.0}
            activeProjects={0}
            completedProjects={0}
            onViewDetails={() => alert("View Details clicked!")}
          />
          <ConstructorCard
            company="ROYAL"
            name="Royal North- East Nig ltd"
            totalProjects={1}
            totalValue={25.0}
            activeProjects={0}
            completedProjects={0}
            onViewDetails={() => alert("View Details clicked!")}
          />
          <ConstructorCard
            company="ROYAL"
            name="Royal North- East Nig ltd"
            totalProjects={1}
            totalValue={25.0}
            activeProjects={0}
            completedProjects={0}
            onViewDetails={() => alert("View Details clicked!")}
          />
          <ConstructorCard
            company="ROYAL"
            name="Royal North- East Nig ltd"
            totalProjects={1}
            totalValue={25.0}
            activeProjects={0}
            completedProjects={0}
            onViewDetails={() => alert("View Details clicked!")}
          />
          <ConstructorCard
            company="ROYAL"
            name="Royal North- East Nig ltd"
            totalProjects={1}
            totalValue={25.0}
            activeProjects={0}
            completedProjects={0}
            onViewDetails={() => alert("View Details clicked!")}
          />
          <ConstructorCard
            company="ROYAL"
            name="Royal North- East Nig ltd"
            totalProjects={1}
            totalValue={25.0}
            activeProjects={0}
            completedProjects={0}
            onViewDetails={() => alert("View Details clicked!")}
          />
          <ConstructorCard
            company="ROYAL"
            name="Royal North- East Nig ltd"
            totalProjects={1}
            totalValue={25.0}
            activeProjects={0}
            completedProjects={0}
            onViewDetails={() => alert("View Details clicked!")}
          />
          <ConstructorCard
            company="ROYAL"
            name="Royal North- East Nig ltd"
            totalProjects={1}
            totalValue={25.0}
            activeProjects={0}
            completedProjects={0}
            onViewDetails={() => alert("View Details clicked!")}
          />
          <ConstructorCard
            company="ROYAL"
            name="Royal North- East Nig ltd"
            totalProjects={1}
            totalValue={25.0}
            activeProjects={0}
            completedProjects={0}
            onViewDetails={() => alert("View Details clicked!")}
          />
          <ConstructorCard
            company="ROYAL"
            name="Royal North- East Nig ltd"
            totalProjects={1}
            totalValue={25.0}
            activeProjects={0}
            completedProjects={0}
            onViewDetails={() => alert("View Details clicked!")}
          />
        </div>
      </main>
    </>
  );
}

export default Contractor;

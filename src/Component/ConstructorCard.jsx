import React from "react";

const ConstructorCard = ({
  company,
  name,
  totalProjects,
  totalValue,
  activeProjects,
  completedProjects,
  onViewDetails,
}) => (
  <div className="flex flex-col items-center">
    <div className="bg-white rounded-2xl shadow-lg border-1   border-green-200 p-10 w-80 flex items-center justify-center mb-[-40px] z-10">
      <span className="text-2xl font-bold tracking-wide">{company}</span>
    </div>
    <div className="bg-white rounded-2xl shadow-lg p-6 w-72 mt-[20px] z-20 mb-[20px]">
      <h3 className="font-semibold text-xl mb-2">{name}</h3>
      <div className="flex justify-between mb-2">
        <div>
          <div className="text-xs text-gray-500">Total Projects</div>
          <div className="font-bold text-lg">{totalProjects}</div>
          <div className="text-xs text-gray-500 mt-1">Active Projects</div>
          <div className="font-bold text-lg">{activeProjects}</div>
        </div>
        <div>
          <div className="text-xs text-gray-500">Total Value</div>
          <div className="font-bold text-lg">₦{totalValue}M</div>
          <div className="text-xs text-gray-500 mt-1">Completed</div>
          <div className="font-bold text-lg">{completedProjects}</div>
        </div>
      </div>
      <button
        className="flex items-center gap-2 text-[#223A90] font-semibold mt-4 hover:underline"
        onClick={onViewDetails}
      >
        View Details <span aria-hidden="true">→</span>
      </button>
    </div>
  </div>
);

export default ConstructorCard;

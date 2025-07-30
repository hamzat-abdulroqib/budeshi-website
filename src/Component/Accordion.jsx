import React, { useState } from "react";

const data = [
  {
    question: "What is Transparency Score?",
    answer:
      "The Transparency Score is a composite index that measures the openness and accessibility of public procurement processes. It takes into account factors such as data availability, contract disclosure, and citizen participation opportunities.",
  },
  {
    question: "How is The Data Collected?",
    answer:
      "Data is collected through a combination of government records, open data portals, and independent monitoring by civil society organizations.",
  },
  {
    question: "What Actions Can Citizens Take to Promote Transparency?",
    answer:
      "Citizens can participate in public consultations, request information, monitor projects, and report irregularities to promote transparency.",
  },
];

function Accordion() {
  const [openIdx, setOpenIdx] = useState(null);

  const handleToggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="max-w-[1110px] mx-auto mt-8 px-6">
      {data.map((item, idx) => (
        <div key={idx} className="border border-gray-400 rounded mb-2 bg-white">
          <button
            className="w-full flex justify-between items-center px-4 py-3 text-left font-medium focus:outline-none"
            onClick={() => handleToggle(idx)}
          >
            <span>{item.question}</span>
            <span className="text-2xl">{openIdx === idx ? "−" : "+"}</span>
          </button>
          {openIdx === idx && (
            <div className="px-4 pb-4 text-gray-700 text-sm">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;

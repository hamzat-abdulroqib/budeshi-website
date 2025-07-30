import React from "react";
import nigeriaMap from "../assets/nigeriaMap.jpg";

function ProcurementMap() {
  return (
    <section className="flex flex-col items-center py-10 px-4">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-2">
        2024 Procurement <br /> Report Database
      </h2>
      <p className="text-gray-500 text-center max-w-2xl mb-8">
        Lorem ipsum dolor sit amet consectetur. Orci malesuada mi et mi
        pellentesque tincidunt at mollis facilisis. Nisi eu blandit nunc
        parturient adipiscing commodo.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-5xl">
        <div className="flex flex-col gap-6">
          <div className="flex items-start gap-3">
            <span className="inline-block w-6 h-6 rounded-full bg-green-700 mt-1"></span>
            <div>
              <p className="font-semibold">State Data Up-To-Date</p>
              <p className="text-gray-500 text-sm">
                Lorem ipsum dolor sit amet consectetur. Orci malesuada mi et mi
                pellentesque
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="inline-block w-6 h-6 rounded-full bg-yellow-500 mt-1"></span>
            <div>
              <p className="font-semibold">State Data Not Up-To-Date</p>
              <p className="text-gray-500 text-sm">
                Lorem ipsum dolor sit amet consectetur. Orci malesuada
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="inline-block w-6 h-6 rounded-full bg-[#8B3A3A] mt-1"></span>
            <div>
              <p className="font-semibold">No Data Recorded</p>
              <p className="text-gray-500 text-sm">
                Lorem ipsum dolor sit amet consectetur. Orci malesuada mi et mi
                pellentesque
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={nigeriaMap}
            alt="Nigeria Procurement Map"
            className="w-[350px] md:w-[450px] rounded shadow"
          />

          <div className="flex gap-2 mt-4">
            <button className="w-8 h-8 rounded border flex items-center justify-center text-xl font-bold bg-white shadow hover:bg-gray-100">
              +
            </button>
            <button className="w-8 h-8 rounded border flex items-center justify-center text-xl font-bold bg-white shadow hover:bg-gray-100">
              −
            </button>
          </div>
          <span className="text-xs text-gray-400 mt-2">
            Simplemaps.com Trial
          </span>
        </div>
      </div>
    </section>
  );
}

export default ProcurementMap;

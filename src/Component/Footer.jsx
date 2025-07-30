import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import React from "react";
function Footer() {
  return (
    <>
      <footer className="flex justify-center bg-[#F9F9FB] mt-10">
        <div className="w-full max-w-[1110px]">
          <div className="flex flex-col md:flex-row justify-between gap-10 md:border-b border-gray-500 py-10 md:py-12">
            <div className="w-[25%] px-9">
              <a href="/">
                <img src={logo} alt="" className="h-23 w-23" />
              </a>
            </div>
            <div className="flex flex-col md:flex-row justify-between px-8 w-full gap-8">
              <div className="text-gray-500 flex w-full justify-between">
                <div className="w-full">
                  <p className="text-gray-900 mb-2 font-semibold">Resource</p>
                  <ul className="space-y-2">
                    <li>
                      <NavLink to="listing">Listing</NavLink>
                    </li>
                    <li>
                      <NavLink to="constructor">Constructor</NavLink>
                    </li>
                    <li>
                      <NavLink to="visualization">Visualization</NavLink>
                    </li>
                  </ul>
                </div>
                <div className="w-full">
                  <p className="text-gray-900 mb-2 font-semibold">legal</p>
                  <ul className="space-y-2">
                    <li>
                      <NavLink to="listing">Listing</NavLink>
                    </li>
                    <li>
                      <NavLink to="constructor">Constructor</NavLink>
                    </li>
                    <li>
                      <NavLink to="visualization">Visualization</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full space-y-2 text-gray-950">
                <p className="text-gray-900 mb-2 font-semibold">Contact</p>
                <p className="text-gray-500">0813 135 8169</p>
                <p className="text-gray-500">
                  Mercy Samuelson, Block L, House 2, Karmo,
                  <br /> Abuja
                </p>
                <div className="flex gap-2"></div>
              </div>
            </div>
          </div>

          <div className="hidden md:flex justify-between w-full py-2 px-6 mx-auto">
            <p className="">©Budeshi 2025, All rights reserved</p>
            <div className="flex gap-4">
              <p>
                <a href="info@budashi.ng">
                  <span>info@budashi.ng</span>
                </a>
              </p>
              <p>
                <a href="tel+2348131358169">
                  <span>+234-813-135-8169</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

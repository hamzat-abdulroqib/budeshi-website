import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import hamburgerIcon from "../assets/handburger.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <nav className="w-full flex justify-center py-4  fixed top-0 left-0 z-50 ">
      <div className="flex items-center w-full bg-white rounded-full shadow-lg px-10 py-3 max-w-[1110px] mt-0">
        <img
          src={logo}
          alt="Budeshi Logo"
          className="h-12 w-12 rounded-full object-contain mr-6"
        />

        {/* Desktop Menu as list items */}
        <div className="flex-1 hidden md:flex items-center">
          <ul className="flex space-x-8">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `relative text-lg font-medium flex flex-col items-center ${
                    isActive || activeIdx === 0
                      ? "text-blue-900"
                      : "text-gray-800"
                  }`
                }
                onClick={() => setActiveIdx(0)}
                end
              >
                Home
                {activeIdx === 0 && (
                  <span className="block w-10 h-0.5 bg-blue-900 mt-1 rounded"></span>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/listing"
                className={({ isActive }) =>
                  `relative text-lg font-medium flex flex-col items-center ${
                    isActive || activeIdx === 1
                      ? "text-blue-900"
                      : "text-gray-800"
                  }`
                }
                onClick={() => setActiveIdx(1)}
                end
              >
                Listing
                {activeIdx === 1 && (
                  <span className="block w-10 h-0.5 bg-blue-900 mt-1 rounded"></span>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contractors"
                className={({ isActive }) =>
                  `relative text-lg font-medium flex flex-col items-center ${
                    isActive || activeIdx === 2
                      ? "text-blue-900"
                      : "text-gray-800"
                  }`
                }
                onClick={() => setActiveIdx(2)}
                end
              >
                Contractors
                {activeIdx === 2 && (
                  <span className="block w-10 h-0.5 bg-blue-900 mt-1 rounded"></span>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/visualization"
                className={({ isActive }) =>
                  `relative text-lg font-medium flex flex-col items-center ${
                    isActive || activeIdx === 3
                      ? "text-blue-900"
                      : "text-gray-800"
                  }`
                }
                onClick={() => setActiveIdx(3)}
                end
              >
                Visualization
                {activeIdx === 3 && (
                  <span className="block w-10 h-0.5 bg-blue-900 mt-1 rounded"></span>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="state"
                className={({ isActive }) =>
                  `relative text-lg font-medium flex flex-col items-center ${
                    isActive || activeIdx === 4
                      ? "text-blue-900"
                      : "text-gray-800"
                  }`
                }
                onClick={() => setActiveIdx(4)}
                end
              >
                State of Procurement
                {activeIdx === 4 && (
                  <span className="block w-10 h-0.5 bg-blue-900 mt-1 rounded"></span>
                )}
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <NavLink to="/grant-application">
            <button className="px-6 py-2 rounded-full border border-blue-900 text-blue-900 font-medium text-lg hover:bg-blue-50 transition">
              Grant Application
            </button>
          </NavLink>
          <NavLink to="login">
            <button className="px-6 py-2 rounded-full bg-blue-900 text-white font-medium text-lg hover:bg-blue-800 transition">
              Login
            </button>
          </NavLink>
        </div>

        <button
          className="md:hidden ml-auto focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          <img src={hamburgerIcon} alt="Menu" className="w-8 h-8" />
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col p-8 space-y-6">
          <button
            className="self-end mb-4 focus:outline-none"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor">
              <path
                d="M6 6l12 12M6 18L18 6"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <ul className="flex flex-col space-y-6">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-lg font-medium py-1 ${
                    isActive || activeIdx === 0
                      ? "text-blue-900 underline underline-offset-4"
                      : "text-gray-800"
                  }`
                }
                onClick={() => {
                  setActiveIdx(0);
                  setMenuOpen(false);
                }}
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="listing"
                className={({ isActive }) =>
                  `text-lg font-medium py-1 ${
                    isActive || activeIdx === 1
                      ? "text-blue-900 underline underline-offset-4"
                      : "text-gray-800"
                  }`
                }
                onClick={() => {
                  setActiveIdx(1);
                  setMenuOpen(false);
                }}
                end
              >
                Listing
              </NavLink>
            </li>
            <li>
              <NavLink
                to="contractors"
                className={({ isActive }) =>
                  `text-lg font-medium py-1 ${
                    isActive || activeIdx === 2
                      ? "text-blue-900 underline underline-offset-4"
                      : "text-gray-800"
                  }`
                }
                onClick={() => {
                  setActiveIdx(2);
                  setMenuOpen(false);
                }}
                end
              >
                Contractors
              </NavLink>
            </li>
            <li>
              <NavLink
                to="visualization"
                className={({ isActive }) =>
                  `text-lg font-medium py-1 ${
                    isActive || activeIdx === 3
                      ? "text-blue-900 underline underline-offset-4"
                      : "text-gray-800"
                  }`
                }
                onClick={() => {
                  setActiveIdx(3);
                  setMenuOpen(false);
                }}
                end
              >
                Visualization
              </NavLink>
            </li>
            <li>
              <NavLink
                to="state"
                className={({ isActive }) =>
                  `text-lg font-medium py-1 ${
                    isActive || activeIdx === 4
                      ? "text-blue-900 underline underline-offset-4"
                      : "text-gray-800"
                  }`
                }
                onClick={() => {
                  setActiveIdx(4);
                  setMenuOpen(false);
                }}
                end
              >
                State of Procurement
              </NavLink>
            </li>
          </ul>
          <NavLink to="grant-application">
            <button className="px-6 py-2 rounded-full border border-blue-900 text-blue-900 font-medium text-lg hover:bg-blue-50 transition">
              Grant Application
            </button>
          </NavLink>
          <NavLink to="login">
            <button className="px-6 py-2 rounded-full bg-blue-900 text-white font-medium text-lg hover:bg-blue-800 transition">
              Login
            </button>
          </NavLink>
        </div>
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
};
export default Header;

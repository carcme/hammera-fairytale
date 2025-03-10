import React, { useContext, useState } from "react";
import { GlobalStateContext } from "../context/GlobalContextProvider";

const EbookDropDown = ({ toggle, isOpen }) => {
  const lang = useContext(GlobalStateContext);

  return (
    <div
      className="relative inline-block text-left transition-all duration-1000 ease-in-out"
      //   onClick={closeDropdown}
    >
      <div>
        <button
          onClick={toggle}
          className="text-white bg-brown-700 hover:bg-brown-800 focus:ring focus:ring-brown-500 font-medium rounded-md text-sm px-8 py-2.5 inline-flex justify-center shadow-lg"
        >
          eBook Download
          <svg
            className="ml-2 -mr-1 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="absolute bottom-9.5 mt-2 w-56 text-brown-700 rounded-md shadow-lg bg-bisque ring ring-brown-700 ring-opacity-50 focus:outline-none"
          role="menu"
        >
          <div className="my-1" role="none">
            <a
              href="/Hammera_de.epub"
              _target="blank"
              className="block px-4 py-2 text-sm hover:bg-brown-500 hover:text-white"
              role="menuitem"
              onClick={toggle}
            >
              {lang.lang === "en" ? "German" : "Deutsch"}
            </a>
            <a
              href="/Hammera_en.epub"
              _target="blank"
              className="block px-4 py-2 text-sm hover:bg-brown-500 hover:text-white"
              role="menuitem"
              onClick={toggle}
            >
              {lang.lang === "en" ? "English" : "Englisch"}
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default EbookDropDown;

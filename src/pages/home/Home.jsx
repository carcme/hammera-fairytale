import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

// App level imports
import BaseLayout from "../../components/layout/BaseLayout";
import { FaClock, FaChild, FaMapMarkerAlt, FaSignal } from "react-icons/fa";
import { HomeData } from "../../json";

import forstryImg from "../../assets/Brandenburg-Maerchenwald-Wandern-oberfeorsterei-hammer-s.jpg";
import LangBtn from "../../components/layout/navbar/langBtn";

import { TourData } from "../../json";

import {
  GlobalStateContext,
  getLanguage,
} from "../../context/GlobalContextProvider";
import EbookDropDown from "../../components/ebookDropDown";
import preloadImageList from "../../lib/preLoadHook";

import { preloadSrcList } from "../../json/imageList";

export const Home = () => {
  preloadImageList(preloadSrcList);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    if (isOpen) setIsOpen(false);
  };

  const globalState = useContext(GlobalStateContext);
  const data = getLanguage(globalState.lang, HomeData);
  const tours = getLanguage(globalState.lang, TourData);

  return (
    <>
      <title>{data.helmetTitle}</title>
      <meta name="description" content={data.meta} />
      <BaseLayout>
        <div
          className="justify-center items-center flex flex-col bg-bisque"
          onClick={closeDropdown}
        >
          <div className="max-w-[600px] pt-2">
            <div className="relative justify-center items-center">
              <img
                src={forstryImg}
                loading="lazy"
                className=" object-cover w-full h-full rounded-xl shadow-lg"
                alt="Brandenburg fairy tale OberförsterglobalState.pageei Hammer"
              />
              <div className="absolute top-0 right-0 max-w-[600px] bg-transparent">
                <div className="p-4">
                  <LangBtn />
                </div>
              </div>
            </div>
            <div className="flex flex-col xxs:grid xxs:grid-cols-3 gap-1 py-6 px-2 place-items-center text-brown-600">
              <div className="flex gap-2 xxs:items-center w-32 xxs:w-auto justify-between xs:justify-center">
                <FaClock />
                {globalState.lang === "en" ? "45-60 mins" : "45-60 Min."}
              </div>
              <div className="flex gap-2 xxs:items-center w-32 xxs:w-auto justify-between xs:justify-center">
                <FaChild />
                {globalState.lang === "en" ? "1-99 years" : "1-99 Jahre"}
              </div>
              <div className="flex gap-2 xxs:items-centglobalState.pageer w-32 xxs:w-auto justify-between xs:justify-center">
                <FaMapMarkerAlt /> <p>&lt; 2km</p>
              </div>
            </div>

            <div className="px-4">
              <h4 className="leading-8 text-xl">
                <strong>{data.title}</strong>
              </h4>

              {data.intro.map((item, index) => (
                <p key={index} className="py-2 tracking-wide leading-6 ">
                  {item}
                </p>
              ))}
            </div>

            <hr className="my-3 text-brown-200 mx-8" />

            <div className="italic flex  gap-2">
              <div className="justify-center items-center flex gap-2 p-4">
                <FaSignal size={25} className="" />
              </div>
              {globalState.lang === "en" && (
                <p>
                  Mobile phone connectivity may not be ideal in the forest.
                  Maybe download the eBook provided below if you have problems
                  with your connection.
                </p>
              )}
              {globalState.lang === "de" && (
                <p>
                  Die Handy-Verbindung ist im Wald möglicherweise nicht ideal.
                  Ladet für den Fall der Fälle am besten das unten stehende
                  eBook runter, wenn ihr Probleme mit eurem Empfang haben
                  solltet.
                </p>
              )}
            </div>
            <hr className="my-3 text-brown-200 mx-8" />

            <div className="flex justify-between ms-2 me-2">
              <div className="">
                <EbookDropDown toggle={toggleDropdown} isOpen={isOpen} />
              </div>
              <div
                className="flex justify-center"
                role="toolbar"
                aria-label="Toolbar with button groups"
              >
                <Link
                  to={"/tour"}
                  state={{ data: tours }}
                  type="button"
                  aria-label="start the tour"
                  className="text-white bg-brown-700 hover:bg-brown-800 focus:ring focus:ring-brown-500 font-medium rounded-md text-sm px-6 xs:px-8 py-2.5 me-2 mb-2 shadow-lg"
                >
                  {data.startBtn}
                </Link>
                <div className="flex justify-right bg-brown-500/30 px-2.5 py-2.5 rounded-md mb-2">
                  <LangBtn />
                </div>
              </div>
            </div>
          </div>
        </div>
      </BaseLayout>
    </>
  );
};

import React, { use, useContext, useEffect, useState } from "react";
import LangBtn from "../../components/layout/navbar/langBtn";
import BaseLayout from "../../components/layout/BaseLayout";
import { useNavigate } from "react-router-dom";

import { TourData } from "../../json";

import {
  GlobalStateContext,
  getLanguage,
} from "../../context/GlobalContextProvider";
import { getAssetURL } from "../../lib/image-util";
import Interactive from "../../components/interactive";

export const Tour = () => {
  const [page, setPage] = useState(0);
  const globalState = useContext(GlobalStateContext);
  const data = getLanguage(globalState.lang, TourData);
  const tour = data.tour[page];
  const navigate = useNavigate();

  const image = getAssetURL(tour.image);
  const hintImg = getAssetURL(tour.hintImg);
  const hasHint = tour.hasHint;

  const handleNext = () => {
    if (page === 13) {
      navigate("/");
    } else {
      setPage((next) => next + 1);
    }
  };
  const handlePrev = () => {
    if (page === 0) {
      navigate("/");
    } else setPage((prev) => prev - 1);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <>
      <BaseLayout>
        <div className="justify-center items-center flex flex-col bg-bisque pt-2 px-2">
          <div className="max-w-[600px]">
            <div className="relative justify-center items-center group">
              <img
                src={image}
                alt={tour.alt}
                loading="lazy"
                className={`object-cover w-full h-full rounded-xl shadow-lg transition-transform duration-300 transform opacity-100 ${
                  hasHint ? "group-hover:opacity-0" : "group-hover:opacity-30"
                }`}
              />
              {/* Show no hint available text */}
              {!hasHint && (
                <p
                  className={`absolute bottom-2 right-2  text-3xl text-center items-center justify-center transition-transform duration-300 transform opacity-0 text-black ${
                    hasHint ? "" : "group-hover:opacity-100"
                  }`}
                >
                  {data.noHintText}
                </p>
              )}

              {/* hasHint, show the text */}
              {hasHint && (
                <p className="absolute right-0 text-sm transition-transform duration-300 transform group-hover:opacity-0 opacity-100">
                  {data.revealHint}
                </p>
              )}

              {hasHint && (
                <img
                  src={hintImg}
                  alt={tour.alt}
                  loading="lazy"
                  className="object-cover w-full h-full rounded-xl shadow-lg absolute top-0 left-0 opacity-0 transition-opacity duration-300 transform group-hover:opacity-100"
                />
              )}

              <p className="absolute right-0 text-sm opacity-0 transition-opacity duration-300 transform group-hover:opacity-100 ">
                {tour.hintText.length > 0 ? tour.hintText : ""}
              </p>

              <LangBtn clsName="absolute top-0 right-0 p-4 rounded-full  text-white" />
            </div>

            <div className="px-2 pt-16">
              <h4 className="leading-8 text-xl font-bold">{tour.title}</h4>
              {tour.intro &&
                tour.intro.map((item, index) => (
                  <p key={index} className="py-2 tracking-wide leading-6 ">
                    {item}
                  </p>
                ))}
              {/* intro && interact are present */}
              {tour.intro && tour.interact && (
                <Interactive title={data.interactive} text={tour.interact} />
              )}

              {tour.body.map((item, index) => (
                <p
                  key={index}
                  className="py-2 tracking-wide leading-6 "
                  dangerouslySetInnerHTML={{ __html: item }}
                ></p>
              ))}
            </div>

            {!tour.intro && tour.interact && (
              <Interactive title={data.interactive} text={tour.interact} />
            )}

            <div className="flex justify-center m-5">
              <div
                type="button"
                aria-label="previous tour step"
                className="text-white bg-brown-700 hover:bg-brown-800 focus:ring focus:ring-brown-500 font-medium rounded-l-md text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
                onClick={handlePrev}
              >
                {page === 0 ? "Home" : data.btnPrev}
              </div>
              <div
                type="button"
                aria-label="next tour step"
                className="text-white bg-brown-700 hover:bg-brown-800 focus:ring focus:ring-brown-500 font-medium rounded-r-md text-sm px-5 py-2.5 me-2 mb-2 focus:outline-non"
                onClick={handleNext}
              >
                {page === 13 ? "Home" : data.btnNext}
              </div>
              <div className="-translate-y-1">
                <LangBtn clsName=" px-2 py-3 text-white" />
              </div>
            </div>
          </div>
        </div>
      </BaseLayout>
    </>
  );
};

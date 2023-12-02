import React, { useState } from "react";
import About from "./components/about";
import Audience from "./components/audience";
import Price from "./components/prices";
import Review from "./components/reviews";
import Samples from "./components/sample";
// function to add classes conditions
function classNames(...classes:string[]) {
  return classes.filter(Boolean).join(" ");
}
export default function Left() {
  const [audience, setAudience] = useState(true);
  const [reviews, setReviews] = useState(false);
  const [about, setAbout] = useState(false);
  const [samples, setSamples] = useState(false);
  const [prices, setPrices] = useState(false);
  return (
    <div className="w-3/4 mb-10">
      <div className="w-full bg-white rounded mx-2 py-6 px-4">
        <center>
          <h2 className="text-2xl">Channel Insight</h2>
        </center>
        <div className="flex justify-center mt-10">
          <div className="flex px-4 py-1 bg-[#f5f5f5]">
            <div
              onClick={() => {
                setAudience(true);
                setReviews(false);
                setAbout(false);
                setSamples(false);
                setPrices(false);
              }}
              className={classNames(
                audience ? "bg-white text-green-500 " : "",
                "px-2  cursor-pointer"
              )}
            >
              <span>Audience</span>
            </div>
            <div
              onClick={() => {
                setAudience(false);
                setReviews(true);
                setAbout(false);
                setSamples(false);
                setPrices(false);
              }}
              className={classNames(
                reviews ? "bg-white text-green-500 " : "",
                "px-2  cursor-pointer"
              )}
            >
              <span>Reviews</span>
            </div>
            <div
              onClick={() => {
                setAudience(false);
                setReviews(false);
                setAbout(true);
                setSamples(false);
                setPrices(false);
              }}
              className={classNames(
                about ? "bg-white text-green-500 " : "",
                "px-2  cursor-pointer"
              )}
            >
              <span>About</span>
            </div>
            <div
              onClick={() => {
                setAudience(false);
                setReviews(false);
                setAbout(false);
                setSamples(true);
                setPrices(false);
              }}
              className={classNames(
                samples ? "bg-white text-green-500 " : "",
                "px-2  cursor-pointer"
              )}
            >
              <span>Samples</span>
            </div>
            <div
              onClick={() => {
                setAudience(false);
                setReviews(false);
                setAbout(false);
                setSamples(false);
                setPrices(true);
              }}
              className={classNames(
                prices ? "bg-white text-green-500 " : "",
                "px-2  cursor-pointer"
              )}
            >
              <span>Prices</span>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className={classNames(audience ? "" : "hidden", "")}>
            <Audience />
          </div>
          <div className={classNames(reviews ? "" : "hidden", "")}>
            <Review />
          </div>
          <div className={classNames(about ? "" : "hidden", "h-[90%] ")}>
            <About />
          </div>
          <div className={classNames(samples ? "" : "hidden", "")}>
            <Samples />
          </div>
          <div className={classNames(prices ? "" : "hidden", "")}>
            <Price />
          </div>
        </div>
      </div>
    </div>
  );
}

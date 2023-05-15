/* eslint-disable react/style-prop-object */
import React from "react";
import Like from "../Like";

const SongDetail = () => {
  return (
    <div className="w-6/12 bg h-full flex justify-center items-center px-2 max-lg:w-8/12 max-md:w-full">
      <img
        className="w-10 h-10 max-lg:hidden rounded-md"
        src="https://lh3.googleusercontent.com/jrRuZ9OiO5H4kg_yqED8252xKII8eAEONsCXY3ceROEklY960TUfaK2p7pNtQsdlXCsi3G8hcFuUYFu8=w1000-h1000-l90-rj"
        alt=""
      />
      <div className="flex flex-col justify-center text-base font-roboto mx-2 max-lg:text-sm">
        <p className="font-semibold">Kanja Poovu Kannala (From "Viruman")</p>
        <p className=" text-ellipsis w-11/12 overflow-hidden lg:whitespace-nowrap max-md:w-full">
          Yuvanshankar Raja & Sid Sriram • Kanja Poovu Kannala (From "Viruman")
          • 2022
        </p>
      </div>
      <Like style={"max-lg:hidden"} />
    </div>
  );
};

export default SongDetail;

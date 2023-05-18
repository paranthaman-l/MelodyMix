/* eslint-disable react/style-prop-object */
import React from "react";
import Like from "../Like";
import { useStates } from "../../context/useStates";

const SongDetail = () => {
  const { currentSong } = useStates();
  return (
    <div className="w-6/12 bg h-full flex justify-center items-center px-2 max-lg:w-8/12 max-md:w-full">
      <img
        className="w-10 h-10 max-lg:hidden rounded-md"
        src={currentSong?.img}
        alt=""
      />
      <div className="flex flex-col w-10/12 justify-center text-base font-roboto mx-2 max-lg:text-sm">
        <p className="font-semibold">
          {currentSong?.title} (From {currentSong?.movie})
        </p>
        <p className=" text-ellipsis w-11/12 overflow-hidden lg:whitespace-nowrap max-md:w-full">
          {currentSong?.music + currentSong?.singer} • {currentSong?.title} (From{" "}
          {currentSong?.movie}• {currentSong?.year}
        </p>
      </div>
      <Like style={"max-lg:hidden"} />
    </div>
  );
};

export default SongDetail;

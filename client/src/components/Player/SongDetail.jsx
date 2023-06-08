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
        src={`https://music-data-bucket.s3.ap-south-1.amazonaws.com/public/${currentSong?.thumnail}`}
        alt=""
      />
      <div className="flex flex-col w-10/12 justify-center text-base font-roboto mx-2 max-lg:text-sm">
        <p className="font-semibold">
          {currentSong?.title} (From {currentSong?.movie?.movie})
        </p>
        <p className=" text-ellipsis w-11/12 overflow-hidden lg:whitespace-nowrap max-md:w-full">
          {currentSong?.movie?.music +
            currentSong?.singers?.map((singer) => `• `+singer)}{" "}
          •{" "}
          <span className="font-light text-base">
            {currentSong?.views} <span className="text-sm ">views</span>{" "}•{" "}
            {currentSong?.likes}  <span className="text-sm ">likes</span>
          </span>
        </p>
      </div>
      <Like style={"max-lg:hidden"} />
    </div>
  );
};

export default SongDetail;

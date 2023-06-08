import React from "react";
import LeftControl from "./LeftControl";
import RightControl from "./RightControl";
import SongDetail from "./SongDetail";
import { BiFullscreen } from "react-icons/bi";
import { TbPictureInPictureOff } from "react-icons/tb";
import Slider from "./Slider";
import { useStates } from "../../context/useStates";

const Player = () => {
  const { currentSong } = useStates();
  return (
    <>
      {currentSong!==null && (
        <div className="bg-[#212121] text-white z-50 bottom-0 h-20 fixed w-full flex items-center justify-between max-lg:bottom-14">
          <div className="absolute right-8 bottom-28 duration-500 w-48 h-48 group max-lg:bottom-16 max-lg:-right-3">
            <div className="absolute h-full w-full bg-black bg-opacity-40 hidden group-hover:flex duration-500 justify-end p-7 text-xl ">
              <TbPictureInPictureOff className="cursor-pointer mx-4" />
              <BiFullscreen className="cursor-pointer" />
            </div>
            <img
              className="rounded-md w-full h-full max-lg:w-10/12 max-lg:h-5/6"
              src={`https://music-data-bucket.s3.ap-south-1.amazonaws.com/public/${currentSong?.thumnail}`}
              alt=""
            />
          </div>
          <div className="bg-[#212121] text-white z-50 bottom-0 h-20 fixed w-full flex items-center justify-between max-lg:bottom-14">
            <Slider />
            <LeftControl />
            <SongDetail />
            <RightControl />
          </div>
        </div>
      )}
    </>
  );
};

export default Player;

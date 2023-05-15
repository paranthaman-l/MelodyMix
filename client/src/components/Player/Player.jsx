import React from "react";
import LeftControl from "./LeftControl";
import RightControl from "./RightControl";
import SongDetail from "./SongDetail";
import { BiFullscreen } from "react-icons/bi";
import { TbPictureInPictureOff } from "react-icons/tb";
import Slider from "./Slider";

const Player = () => {
  return (
    <div className="bg-[#212121] text-white z-50 bottom-0 h-20 fixed w-full flex items-center justify-between max-lg:bottom-14" >
      <div className="absolute right-8 bottom-28 duration-500 w-48 h-48 group">
          <div className="absolute h-full w-full bg-black bg-opacity-40 hidden group-hover:flex duration-500 justify-end p-7 text-xl ">
            <TbPictureInPictureOff className="cursor-pointer mx-4"/>
            <BiFullscreen className="cursor-pointer"/>
          </div>
          <img className="rounded-md w-full h-full" src="https://lh3.googleusercontent.com/jrRuZ9OiO5H4kg_yqED8252xKII8eAEONsCXY3ceROEklY960TUfaK2p7pNtQsdlXCsi3G8hcFuUYFu8=w1000-h1000-l90-rj" alt="" />
      </div>
      <div className="bg-[#212121] text-white z-50 bottom-0 h-20 fixed w-full flex items-center justify-between max-lg:bottom-14">
        <Slider/>
        <LeftControl />
        <SongDetail />
        <RightControl />
      </div>
    </div>
  );
};

export default Player;

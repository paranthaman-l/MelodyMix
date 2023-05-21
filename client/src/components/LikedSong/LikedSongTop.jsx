import React from "react";
import { useSelector } from "react-redux";
import { getUser } from "../../Slice/UserSlice";
import { BsShuffle } from "react-icons/bs";
import { RxDotsVertical } from "react-icons/rx";

const LikedSongTop = () => {
  const user = useSelector(getUser);
  return (
    <div className="mx-20 max-lg:mx-10 flex flex-col text-white ">
      <div className="flex items-center">
        <img
          className="w-64 h-64  max-lg:w-2/6 max-lg:h-2/6 max-md:w-3/6 max-md:h-3/6 rounded-md"
          src="https://www.gstatic.com/youtube/media/ytm/images/pbg/liked-music-@576.png"
          alt=""
        />
        <div className="flex flex-col ml-14">
          <p className="font-bold text-3xl pt-3 pb-1 w-full">Your Likes</p>
          <p className="text-[#b4b4b4] text-base mt-3">Auto Playlist</p>
          <p className="text-[#b4b4b4] text-base mb-4">
            {user?.likedsongs?.length} song
          </p>
          <p className="text-[#b4b4b4] text-sm mb-5 w-full">
            Music you like in any Music app will show here.
          </p>
          <div className="flex items-center max-md:hidden">
            <button className="px-2  text-base font-roboto py-1 bg-white rounded-2xl text-black font-semibold flex justify-center items-center focus:bg-black focus:text-white focus:border-white border-2 outline-none">
              <BsShuffle className="font-semibold mx-1" />
              Shuffle
            </button>
            <span className="p-2 cursor-pointer mx-5 rounded-full hover:bg-slate-700">
              <RxDotsVertical className=" text-xl " />
            </span>
          </div>
        </div>
      </div>
      <div className="max-md:flex items-center hidden mt-5">
        <button className="px-2  text-base font-roboto py-1 bg-white rounded-2xl text-black font-semibold flex justify-center items-center focus:bg-black focus:text-white focus:border-white border-2 outline-none">
          <BsShuffle className="font-semibold mx-1" />
          Shuffle
        </button>
        <span className="p-2 cursor-pointer mx-5 rounded-full hover:bg-slate-700">
          <RxDotsVertical className=" text-xl " />
        </span>
      </div>
    </div>
  );
};

export default LikedSongTop;

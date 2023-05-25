import React from "react";
import { BiPlay } from "react-icons/bi";
import { BsShuffle } from "react-icons/bs";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { RxDotsVertical } from "react-icons/rx";

const Movie = () => {
  return (
    <div className="mx-20 pt-32 max-lg:mx-10 flex flex-col text-white ">
      <div className="flex items-center">
        <img
          className="w-64 h-64  max-lg:w-2/6 max-lg:h-2/6 max-md:w-3/6 max-md:h-3/6 rounded-md"
          src="https://www.gstatic.com/youtube/media/ytm/images/pbg/liked-music-@576.png"
          alt=""
        />
        <div className="flex flex-col ml-14">
          <p className="font-bold text-4xl pt-3 pb-1 w-full">Your Likes</p>
          <p className="text-[#b4b4b4] text-base mt-3">Single • </p>
          <p className="text-[#b4b4b4] text-base mb-4">
            {/* {user?.likedsongs?.length} song */}
          </p>
          <div className="flex items-center max-md:hidden">
            <button className="hover:bg-opacity-90 px-2  text-base font-roboto bg-white rounded-2xl text-black font-semibold flex justify-center items-center focus:bg-black focus:text-white focus:border-white border-2 outline-none">
              <BiPlay className="font-semibold text-3xl" />
              Play
            </button>
            <button className="px-2 mx-3  text-base font-roboto py-1 bg-transparent rounded-2xl text-white flex justify-center items-center focus:bg-white focus:text-black focus:border-black border-2 outline-none">
              <MdOutlineLibraryAdd className=" text-2xl mr-2" />
              Add to Library
            </button>
            <span className="p-2 cursor-pointer mx-2 rounded-full hover:bg-slate-700">
              <RxDotsVertical className=" text-xl " />
            </span>
          </div>
        </div>
      </div>
      <div className="max-md:flex items-center hidden mt-5">
        <button className="hover:bg-opacity-90 px-2  text-base font-roboto bg-white rounded-2xl text-black font-semibold flex justify-center items-center focus:bg-black focus:text-white focus:border-white border-2 outline-none">
          <BiPlay className="font-semibold text-3xl" />
          Play
        </button>
        <button className="px-2 mx-3  text-base font-roboto py-1 bg-transparent rounded-2xl text-white flex justify-center items-center focus:bg-white focus:text-black focus:border-black border-2 outline-none">
          <MdOutlineLibraryAdd className=" text-2xl mr-2" />
          Add to Library
        </button>
        <span className="p-2 cursor-pointer mx-2 rounded-full hover:bg-slate-700">
          <RxDotsVertical className=" text-xl " />
        </span>
      </div>
    </div>
  );
};

export default Movie;

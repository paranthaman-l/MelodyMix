/* eslint-disable react/prop-types */
import { BsFillPlayFill } from "react-icons/bs";
import { BiDotsVerticalRounded } from "react-icons/bi";
import {
  //   AiFillDislike,
  //   AiFillLike,
  AiOutlineDislike,
  AiOutlineLike,
} from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import { songOptions } from "../../constants";
import { useStates } from "../../context/useStates";
const Rows4Song = ({ containerRef, songs }) => {
  return (
    <div>
      <ul
        ref={containerRef}
        className="grid grid-rows-4 grid-flow-col  scroll-smooth  overflow-x-scroll h-full snap-mandatory snap-x scrollbar-none justify-start"
      >
        {songs.map((song, i) => {
          return <SingleSongComponent song={song} key={i} i={i} />;
        })}
      </ul>
    </div>
  );
};

const SingleSongComponent = ({ song, i }) => {
  const { setCurrentSongPlaying } = useStates();
  const songDivRef = useRef(null);
  const [isShowOptions, setIsShowOptions] = useState(false);
  const handleClickOutside = (event) => {
    if (songDivRef.current && !songDivRef.current.contains(event.target)) {
      setIsShowOptions(false);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <li
      className="snap-start relative mt-3 flex items-center w-[410px] overflow-hidden  mb-2 mr-[14px] group"
      key={i}
    >
      <div className="h-12 w-12 mr-2 relative">
        <div className="absolute h-12 w-12 flex justify-center items-center group-hover:bg-half-black1 group-hover:bg-opacity-80">
          <BsFillPlayFill className="text-2xl text-transparent  group-hover:text-white" />
        </div>
        <img
          className="w-full h-full rounded-md min-w-fit"
          src={song.img}
          alt=""
        />
      </div>
      <div className="flex flex-col font-roboto overflow-y-hidden w-full justify-start ml-2">
        <p
          onClick={() => setCurrentSongPlaying(song)}
          className="text-[16px] font-semibold group-hover:w-52  whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer"
        >
          {song.title}
        </p>
        <p className="text-[16px] text-half-black  overflow-hidden ">
          <span className="whitespace-nowrap overflow-hidden text-ellipsis w-24">
            {song.music}
          </span>
          <span className="">•</span>
          <span className="hover:underline hover:cursor-pointer">
            {song.movie}
          </span>
        </p>
      </div>
      <div className="group-hover:flex hidden absolute right-0 w-40 bg-black  justify-center items-center">
        <span className="rounded-full flex justify-center items-center  cursor-pointer w-10 h-10 hover:bg-half-black1">
          <AiOutlineDislike className="text-xl" />
        </span>
        <span className="rounded-full flex justify-center items-center  cursor-pointer w-10 h-10 hover:bg-half-black1">
          <AiOutlineLike className="text-xl" />
        </span>
        <span
          // onClick={() => setIsShowOptions(!isShowOptions)}
          ref={songDivRef}
          className="rounded-full flex justify-center items-center cursor-pointer w-10 h-10 hover:bg-half-black1"
        >
          <BiDotsVerticalRounded className="text-xl" />
        </span>
      </div>
      {isShowOptions && (
        <div
          className={`absolute z-40  right-0 text-black bg-half-black1 duration-700  font-roboto rounded-lg`}
          ref={songDivRef}
        >
          <ul className="flex flex-col justify-center items-center py-2 w-56 ">
            {songOptions.map((songOptions) => {
              return (
                <li
                  className="flex justify-start items-center py-2 hover:bg-half-black2 w-full cursor-pointer "
                  key={songOptions.id}
                >
                  <span className="text-half-black px-4 text-2xl">
                    {songOptions.icon}
                  </span>
                  <span className="text-white text-base">
                    {songOptions.title}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </li>
  );
};
export default Rows4Song;

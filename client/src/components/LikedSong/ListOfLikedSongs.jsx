import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUser } from "../../Slice/UserSlice";
import { songs } from "../../constants";
import { useStates } from "../../context/useStates";
import { BsFillPlayFill } from "react-icons/bs";
import { AiFillLike, AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
const ListOfLikedSongs = () => {
  const user = useSelector(getUser);
  const [likedSongs, setLikedSongs] = useState(user?.likedsongs || []);
  useEffect(() => {
    const filterLikedSongs = songs.filter((song) =>
      user?.likedsongs?.some((sid) => sid == song.id)
    );
    setLikedSongs(filterLikedSongs);
  }, [user]);
  return (
    <div className="text-white my-16">
      <ul className="flex flex-col mx-24 max-md:w-full max-md:mx-4">
        {likedSongs?.map((song, i) => {
          return <SingleComponent song={song} i={i} />;
        })}
      </ul>
    </div>
  );
};

const SingleComponent = ({ song, i }) => {
  const { setCurrentSongPlaying } = useStates();
  const [isShowOptions, setIsShowOptions] = useState(false);
  const { addLikedSong, currentSong } = useStates();
  const user = useSelector(getUser);
  const [like, setLike] = useState(false);
  useEffect(() => {
    const isLikeSong = user?.likedsongs?.find((sid) => sid == song?.id);
    if (isLikeSong) {
      setLike(true);
    } else setLike(false);
  }, [currentSong, song?.id, user]);
  return (
    <li
      className="snap-start relative mt-3 flex items-center w-full overflow-hidden  mb-2 mr-[14px] group border-b-[1px] border-b-[#030303]"
      key={i}
    >
      <div className="h-10 w-10 max-md:h-12 max-md:w-12 mr-2 rounded-md relative">
        <div className="absolute h-10 w-10 left-0 top-0 max-md:h-12 max-md:w-12 flex justify-center items-center group-hover:bg-half-black1 group-hover:bg-opacity-80">
          <BsFillPlayFill className="text-2xl text-transparent  group-hover:text-white" />
        </div>
        <img
          className="w-full h-full rounded-md min-w-fit"
          src={song.img}
          alt=""
        />
      </div>
      <div className="flex font-roboto overflow-y-hidden w-full justify-start ml-2 max-lg:flex-col">
        <p
          onClick={() => setCurrentSongPlaying(song)}
          className="text-[16px] w-4/12 max-lg:w-full font-semibold pr-4 whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer"
        >
          {song.title + `(From ${song.movie})`}
        </p>
        <p className="text-[16px] w-3/12 text-half-black overflow-hidden max-lg:w-full">
          <span className="whitespace-nowrap overflow-hidden text-ellipsis">
            {song.music}
          </span>
          <span className="">•</span>
          <span className="hover:underline hover:cursor-pointer whitespace-nowrap overflow-hidden text-ellipsis">
            {song.singer}
          </span>
        </p>
        <p className="text-[16px] w-4/12 text-half-black overflow-hidden max-lg:w-full flex mx-auto justify-start">
          {song?.movie}
        </p>
      </div>
        <div className="group-hover:flex h-full hidden absolute right-0 w-40 bg-black  justify-center items-center">
          <span className="rounded-full flex justify-center items-center  cursor-pointer w-10 h-10 hover:bg-half-black1">
            <AiOutlineDislike className="text-xl" />
          </span>
          <span
            onClick={() => addLikedSong(song.id)}
            className="rounded-full flex justify-center items-center z-30 cursor-pointer w-10 h-10 hover:bg-half-black1"
          >
            {like ? (
              <AiFillLike className="text-xl " />
            ) : (
              <AiOutlineLike className="text-xl" />
            )}
          </span>
          {/* <span>
            <input className="mx-2" type="checkbox" name="" id="" />
          </span> */}
        </div>
        {like && <AiFillLike className="text-xl z-10 max-md:hidden right-12 mr-[2px] absolute " />}
    </li>
  );
};
export default ListOfLikedSongs;

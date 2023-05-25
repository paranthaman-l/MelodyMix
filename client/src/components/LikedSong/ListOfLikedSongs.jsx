import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUser } from "../../Slice/UserSlice";
import { songs } from "../../constants";
import { useStates } from "../../context/useStates";
import { BsFillPlayFill } from "react-icons/bs";
import { AiFillLike, AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import SingleComponent from "../SingleComponent";
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

export default ListOfLikedSongs;

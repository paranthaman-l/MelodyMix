import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUser } from "../../Slice/UserSlice";
import { songs } from "../../constants";
import SingleComponent from "../SingleComponent";
import { useStates } from "../../context/useStates";
const ListOfLikedSongs = () => {
  const user = useSelector(getUser);
  const {currentSongs} = useStates();
  const [likedSongs, setLikedSongs] = useState(user?.likedsongs || []);
  useEffect(() => {
    const filterLikedSongs = currentSongs.filter((song) =>
      // eslint-disable-next-line
      user?.likedsongs?.some((sid) => sid == song.sid)
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

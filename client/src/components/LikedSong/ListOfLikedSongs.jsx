import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUser } from "../../Slice/UserSlice";
import SingleComponent from "../SingleComponent";
import UserServices from "../../services/UserServices";
const ListOfLikedSongs = () => {
  const user = useSelector(getUser);
  const [likedSongs, setLikedSongs] = useState([]);
  const getLikedSongs = async () => {
    await UserServices.getLikedSongs(user?.uid)
      .then((response) => {
        setLikedSongs(response.data);
      })
      .catch((error) => {
        // console.log(error);
      });
  };
  useEffect(() => {
    getLikedSongs();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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

import React from "react";
import { LikedSongTop, ListOfLikedSongs } from "../../components";

const LikedSongs = () => {
  return (
    <div className="flex flex-col justify-center pt-32">
      <LikedSongTop />
      <ListOfLikedSongs />
    </div>
  );
};

export default LikedSongs;

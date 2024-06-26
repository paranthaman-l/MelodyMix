import React from "react";
import { useStates } from "../../context/useStates";
import UserServices from "../../services/UserServices";

const Audio = () => {
  const { audioRef, currentSong, isLoop,nextSong } = useStates();
  const addView = async (sid) => {
    const response = await UserServices.addView(sid);
    console.log(response);
  };
  return (
    <div>
      <audio
        className="h-10 mx-3"
        ref={audioRef}
        // src={`${currentSong?.audio}`}
        src={`${currentSong?.audio}`}
        loop={isLoop}
        onEnded={() => {addView(currentSong.sid);nextSong();}}
      ></audio>
    </div>
  );
};

export default Audio;

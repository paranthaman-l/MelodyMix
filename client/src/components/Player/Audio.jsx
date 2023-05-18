import React from "react";
import { useStates } from "../../context/useStates";

const Audio = () => {
  const { audioRef,currentSong,isLoop } = useStates();

  return (
    <div>
      <audio
        className="h-10 mx-3"
        ref={audioRef}
        src={currentSong?.url}
        loop={isLoop}
      ></audio>
    </div>
  );
};

export default Audio;

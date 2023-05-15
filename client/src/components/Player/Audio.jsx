import React from "react";
import { useStates } from "../../context/useStates";

const Audio = () => {
  const { audioRef } = useStates();
  return (
    <div>
      <audio
        className="h-10 mx-3"
        ref={audioRef}
        src={"https://music-data-bucket.s3.ap-south-1.amazonaws.com/public/Mayilirage.mp3"}
        autoPlay
        // controls
      ></audio>
    </div>
  );
};

export default Audio;

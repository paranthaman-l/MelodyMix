/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Audio from "./Audio";
import { useStates } from "../../context/useStates";

const Slider = () => {
  const [value, setValue] = useState(0);
  const { audioRef } = useStates();
  useEffect(() => {
    const handleTimeUpdate = () => {
      const currentTime = audioRef.current.currentTime;
      const duration = audioRef.current.duration;
      const progress = (currentTime / duration) * 100;
      setValue(progress);
    };

    audioRef.current.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [audioRef]);
  const handleChange = (event) => {
    const duration = audioRef.current.duration;
    const value = event.target.value;
    audioRef.current.currentTime = (value / 100) * duration;
    setValue(value);
  };
  return (
    <div className="absolute top-0 w-full left-0 flex items-start audio_slider">
      <Audio />
      <input
        className="w-full cursor-pointer"
        onChange={handleChange}
        value={value}
        type="range"
        name=""
        id=""
      />
      <style>{`
        .audio_slider input[type=range]::-webkit-slider-runnable-track {
          background: linear-gradient(to right, #29dc5e 0%, #29dc5e ${value}%, #383838 ${value}%, #383838 100%);
          height: 2px;
        }
        .audio_slider input[type=range]::-webkit-slider-thumb {
          background-color: transparent ;
          cursor: pointer;
          margin-top: -7px;
        }
      `}</style>
    </div>
  );
};

export default Slider;

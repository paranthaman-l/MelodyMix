/* eslint-disable react-hooks/exhaustive-deps */
import { FaPlay } from "react-icons/fa";
import {
  TbPlayerSkipBackFilled,
  TbPlayerSkipForwardFilled,
} from "react-icons/tb";
import { useStates } from "../../context/useStates";
import { VscDebugPause } from "react-icons/vsc";
import { useEffect, useState } from "react";
const LeftControl = () => {
  const { audioRef, isPlay, setIsPlay } = useStates();
  const [curTime, setCurTime] = useState("00:00");
  const [endTime, setEndTime] = useState("00:00");
  useEffect(() => {
    const handleTimeUpdate = () => {
      currentTime(audioRef.current?.currentTime);
      duration(audioRef.current?.currentTime);
    };

    audioRef.current.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [audioRef]);
  function currentTime(time) {
    if (time && !isNaN(time)) {
      const minutes =
        Math.floor(time / 60) < 10
          ? `0${Math.floor(time / 60)}`
          : Math.floor(time / 60);
      const seconds =
        Math.floor(time % 60) < 10
          ? `0${Math.floor(time % 60)}`
          : Math.floor(time % 60);

      setCurTime(minutes + ":" + seconds);
    }
  }
  const duration = (time) => {
    if (time && !isNaN(time)) {
      const max = audioRef.current.duration;
      const minutes =
        Math.floor((max - time) / 60) < 10
          ? `0${Math.floor((max - time) / 60)}`
          : Math.floor((max - time) / 60);
      const seconds =
        Math.floor((max - time) % 60) < 10
          ? `0${Math.floor((max - time) % 60)}`
          : Math.floor((max - time) % 60);

      setEndTime(-minutes + ":" + seconds);
    }
  };
  return (
    <div className="flex items-center text-2xl w-3/12 max-md:w-32">
      <ul className="flex items-center w-8/12 max-md:w-full justify-evenly">
        <li className="">
          <TbPlayerSkipBackFilled />
        </li>
        <li className="" onClick={() => setIsPlay(!isPlay)}>
          {!isPlay ? (
            <FaPlay
              onClick={() => audioRef.current.play()}
              className="cursor-pointer"
            />
          ) : (
            <VscDebugPause
              onClick={() => audioRef.current.pause()}
              className="cursor-pointer text-3xl"
            />
          )}
        </li>
        <li className="">
          <TbPlayerSkipForwardFilled />
        </li>
      </ul>

      <div className="text-xs max-xl:hidden">
        {curTime}/ {endTime}
      </div>
    </div>
  );
};

export default LeftControl;

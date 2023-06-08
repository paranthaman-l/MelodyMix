import React, { useEffect, useState } from "react";
import { BsShuffle } from "react-icons/bs";
import { IoCaretUpOutline } from "react-icons/io5";
import { RiRepeat2Line } from "react-icons/ri";
import { RxSpeakerLoud } from "react-icons/rx";
import { useStates } from "../../context/useStates";
const RightControl = () => {
  const { audioRef,isLoop,isShuffle, setIsShuffle, setIsLoop } = useStates();
  const [isMute, setIsMute] = useState(false);
  const [volume, setVolume] = useState(0);

  const handleVolumeChange = (event) => {
    audioRef.current.volume = event.target.value;
    setVolume(event.target.value * 100);
    if (volume === 0) setIsMute(true);
    else setIsMute(false);
  };
  const handleMute = () => {
    setIsMute(!isMute);
  };
  useEffect(() => {
    if (isMute) {
      setVolume(0);
      audioRef.current.volume = 0;
    } else {
      setVolume(50);
      audioRef.current.volume = 0.5;
    }
  }, [audioRef, isMute]);

  return (
    <div className="w-3/12 flex items-center">
      <ul className="flex items-center justify-end w-full text-lg max-md:hidden">
        <li className="mx-4 relative cursor-pointer flex items-center volume_slider group">
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            onChange={handleVolumeChange}
            className="group-hover:opacity-100 delay-200 transition-opacity opacity-0 mx-3 w-[60px] h-[2px]"
          />
          <span onClick={handleMute}>
            <RxSpeakerLoud className="" />
          </span>
          {isMute && (
            <span className="absolute w-[1px] h-[18px] bg-white right-2 top-0 -rotate-45"></span>
          )}
        </li>
        <li
          onClick={() => setIsLoop(!isLoop)}
          className={`flex items-center mx-4 cursor-pointer ${
            isLoop ? "text-white" : "text-gray-500"
          }`}
        >
          <RiRepeat2Line />
        </li>
        <li
          onClick={() => setIsShuffle(!isShuffle)}
          className={`flex items-center mx-4 cursor-pointer ${
            isShuffle ? "text-white" : "text-gray-500"
          }`}
        >
          <BsShuffle />
        </li>
      </ul>
      <span className="mx-4 cursor-pointer">
        <IoCaretUpOutline className="text-2xl" />
      </span>
      <style>{`
        .volume_slider input[type=range]::-webkit-slider-runnable-track {
          background: linear-gradient(to right, #fff 0%, #fff ${volume}%, #909090 ${volume}%, #909090 100%);
          height: 2px;
        }
        .volume_slider input[type=range]::-webkit-slider-thumb {
          background-color: transparent ;
          cursor: pointer;
          margin-top: -7px;
        }
      `}</style>
    </div>
  );
};

export default RightControl;

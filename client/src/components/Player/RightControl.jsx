import React from "react";
import { BsShuffle } from "react-icons/bs";
import { IoCaretUpOutline } from "react-icons/io5";
import { RiRepeat2Line, RiRepeatOneFill } from "react-icons/ri";
import { RxSpeakerLoud } from "react-icons/rx";
const RightControl = () => {
  return (
    <div className="w-3/12 flex items-center">
      <ul className="flex items-center justify-end w-full text-lg max-md:hidden">
        <li className="mx-4">
          <RxSpeakerLoud />
        </li>
        <li className="flex items-center mx-4">
          <RiRepeat2Line />
          {/* <RiRepeatOneFill /> */}
        </li>
        <li className="mx-4">
          <BsShuffle />
        </li>
      </ul>
      <span className="mx-4">
        <IoCaretUpOutline className="text-2xl" />
      </span>
    </div>
  );
};

export default RightControl;

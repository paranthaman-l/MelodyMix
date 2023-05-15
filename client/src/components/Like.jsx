import React from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";

const Like = ({style}) => {
  return (
    <div className={`flex   w-40  justify-center items-center ${style}`} >
      <span className="rounded-full flex justify-center items-center  cursor-pointer w-10 h-10 hover:bg-half-black1">
        <AiOutlineDislike className="text-xl" />
      </span>
      <span className="rounded-full flex justify-center items-center  cursor-pointer w-10 h-10 hover:bg-half-black1">
        <AiOutlineLike className="text-xl" />
      </span>
      <span
        // onClick={() => setIsShowOptions(!isShowOptions)}
        //   ref={songDivRef}
        className="rounded-full flex justify-center items-center cursor-pointer w-10 h-10 hover:bg-half-black1"
      >
        <BiDotsVerticalRounded className="text-xl" />
      </span>
    </div>
  );
};

export default Like;

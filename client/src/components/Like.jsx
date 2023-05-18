import React, { useEffect, useState } from "react";
import { AiFillLike, AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useStates } from "../context/useStates";
import { useSelector } from "react-redux";
import { getUser } from "../Slice/UserSlice";

const Like = ({ style }) => {
  const { addLikedSong, currentSong } = useStates();
  const user = useSelector(getUser);
  const [like, setLike] = useState(false);
  useEffect(() => {
    const isLikeSong = user?.likedsongs?.find((sid) => sid ==currentSong.id);
    if (isLikeSong) {
      setLike(true);
    } else setLike(false);
  }, [currentSong,user]);

  return (
    <div className={`flex   w-40  justify-center items-center ${style}`}>
      <span className="rounded-full flex justify-center items-center  cursor-pointer w-10 h-10 hover:bg-half-black1">
        <AiOutlineDislike className="text-xl" />
      </span>
      <span
        onClick={() => addLikedSong(currentSong.id)}
        className="rounded-full flex justify-center items-center  cursor-pointer w-10 h-10 hover:bg-half-black1"
      >
        {like ? (
          <AiFillLike className="text-xl" />
        ) : (
          <AiOutlineLike className="text-xl" />
        )}
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

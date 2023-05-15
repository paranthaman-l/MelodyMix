/* eslint-disable no-unused-vars */
import { useRef } from "react";
import { songs } from "../../constants";
import OntopOption from "./OntopOption";

import {
  //   AiFillDislike,
  //   AiFillLike,
  AiOutlineDislike,
  AiOutlineLike,
} from "react-icons/ai";
import Rows4Song from "./4RowsSong";
const QuickPicks = () => {
  const containerRef = useRef(null);
  const handleClick = (side) => {
    const contentDiv = containerRef.current;
    const scrollDistance = side === "left" ? -100 : 900;
    contentDiv.scrollBy({ left: scrollDistance, behavior: "smooth" });
  };

  return (
    <>
      <OntopOption description="START RADIO FROM A SONG" title="Quick picks" handleClick={handleClick} />
      <div className="text-white h-[340px]">
        <Rows4Song containerRef={containerRef} songs={songs} />
      </div>
    </>
  );
};

export default QuickPicks;

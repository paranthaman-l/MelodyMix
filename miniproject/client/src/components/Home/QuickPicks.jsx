/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
// import { songs } from "../../constants";
import OntopOption from "./OntopOption";

import {
  //   AiFillDislike,
  //   AiFillLike,
  AiOutlineDislike,
  AiOutlineLike,
} from "react-icons/ai";
import Rows4Song from "./4RowsSong";
import UserServices from "../../services/UserServices";
import { useStates } from "../../context/useStates";
const QuickPicks = () => {
  const containerRef = useRef(null);
  const {shuffleArray} = useStates();
  const handleClick = (side) => {
    const contentDiv = containerRef.current;
    const scrollDistance = side === "left" ? -100 : 900;
    contentDiv.scrollBy({ left: scrollDistance, behavior: "smooth" });
  };
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    const getAllSongs = async () => {
      await UserServices.getAllSongs()
        .then((response) => {
          console.log(response.data);
          setSongs(shuffleArray(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getAllSongs();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <OntopOption
        description="START RADIO FROM A SONG"
        title="Quick picks"
        handleClick={handleClick}
      />
      <div className="text-white h-[340px]">
        <Rows4Song containerRef={containerRef} songs={songs} />
      </div>
    </>
  );
};

export default QuickPicks;



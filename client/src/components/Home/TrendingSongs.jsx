import { useRef } from "react";
import Rows4Song from "./4RowsSong";
import OntopOption from "./OntopOption";
import { songs } from "../../constants";
const TrendingSongs = () => {
    const containerRef = useRef(null);
    const handleClick = (side) => {
      const contentDiv = containerRef.current;
      const scrollDistance = side === "left" ? -100 : 900;
      contentDiv.scrollBy({ left: scrollDistance, behavior: "smooth" });
    };
  return (
    <>
      <OntopOption description="FOR YOU" title="Trending songs" handleClick={handleClick} />
      <div className="text-white h-[340px] pb-10">
        <Rows4Song containerRef={containerRef} songs={songs} />
      </div>
    </>
  );
};

export default TrendingSongs;

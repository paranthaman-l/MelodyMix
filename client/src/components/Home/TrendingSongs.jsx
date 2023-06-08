import { useEffect, useRef, useState } from "react";
import Rows4Song from "./4RowsSong";
import OntopOption from "./OntopOption";
import UserServices from "../../services/UserServices";
const TrendingSongs = () => {
    const containerRef = useRef(null);
    const [songs, setSongs] = useState([]);
    useEffect(() => {
      const getAllSongs = async () => {
        await UserServices.getTrending()
          .then((response) => {
            console.log(response.data);
            setSongs(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      };
      getAllSongs();
    }, []);
  
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

import React, { useRef } from "react";
import OntopOption from "../Home/OntopOption";
import {useStates} from '../../context/useStates'
const MoodAndGenre = () => {
  const containerRef = useRef(null);
  const {handleNavigate} = useStates();
  const handleClick = (side) => {
    const contentDiv = containerRef.current;
    const scrollDistance = side === "left" ? -100 : 900;
    contentDiv.scrollBy({ left: scrollDistance, behavior: "smooth" });
  };
  const choices = [
    {"id": 1, "value": "Tamil", "color": "#FF5733"},
    {"id": 2, "value": "Commute", "color": "#F700FF"},
    {"id": 3, "value": "Romance", "color": "#33FF57"},
    {"id": 4, "value": "Party", "color": "#3357FF"},
    {"id": 5, "value": "Workout", "color": "#FFA500"},
    {"id": 6, "value": "Hindi", "color": "#800080"},
    {"id": 7, "value": "2000s", "color": "#FFFF00"},
    {"id": 8, "value": "Energy Boosters", "color": "#00FFFF"},
    {"id": 9, "value": "2010s", "color": "#FF4500"},
    {"id": 10, "value": "Malayalam", "color": "#FF00FF"},
    {"id": 11, "value": "Carnatic Classical", "color": "#7CFC00"},
    {"id": 12, "value": "Devotional", "color": "#8A2BE2"},
    {"id": 13, "value": "1990s", "color": "#FFD700"},
    {"id": 14, "value": "Indian Indie", "color": "#00CED1"},
    {"id": 15, "value": "Focus", "color": "#BA55D3"},
    {"id": 16, "value": "1980s", "color": "#FF69B4"},
    {"id": 17, "value": "Monsoon", "color": "#32CD32"},
    {"id": 18, "value": "1960s", "color": "#0000FF"},
    {"id": 19, "value": "Folk & Acoustic", "color": "#FF8C00"},
    {"id": 20, "value": "Sleep", "color": "#8B008B"},
    {"id": 21, "value": "1970s", "color": "#FFFF00"},
    {"id": 22, "value": "Chill", "color": "#00FFFF"},
    {"id": 23, "value": "Indian Pop", "color": "#FF4500"},
    {"id": 24, "value": "Hindi", "color": "#FF00FF"},
    {"id": 25, "value": "Ghazal/Sufi", "color": "#7CFC00"},
    {"id": 26, "value": "Hindustani Classical", "color": "#8A2BE2"},
    {"id": 27, "value": "Desi Hip-Hop", "color": "#FFD700"},
    {"id": 28, "value": "Hip-Hop", "color": "#00CED1"},
    {"id": 29, "value": "Haryanvi", "color": "#BA55D3"},
    {"id": 30, "value": "African", "color": "#FF69B4"},
    {"id": 31, "value": "R&B & Soul", "color": "#32CD32"},
    {"id": 32, "value": "Country & Americana", "color": "#0000FF"},
    {"id": 33, "value": "Dance & Electronic", "color": "#FF8C00"},
    {"id": 34, "value": "Classical", "color": "#8B008B"},
    {"id": 35, "value": "Family", "color": "#FFFF00"},
    {"id": 36, "value": "Pop", "color": "#00FFFF"},
    {"id": 37, "value": "Reggae & Caribbean", "color": "#FF4500"},
    {"id": 38, "value": "Rock", "color": "#FF00FF"},
    {"id": 39, "value": "Indie & Alternative", "color": "#7CFC00"},
    {"id": 40, "value": "Jazz", "color": "#8A2BE2"},
    {"id": 41, "value": "Metal", "color": "#FFD700"},
    {"id": 42, "value": "J-Pop", "color": "#00CED1"},
    {"id": 43, "value": "Punjabi", "color": "#BA55D3"},
    {"id": 44, "value": "Egyptian", "color": "#FF69B4"},
    {"id": 45, "value": "Khaleeji", "color": "#32CD32"},
    {"id": 46, "value": "K-Pop", "color": "#0000FF"},
    {"id": 47, "value": "Arab Diaspora", "color": "#FF8C00"},
    {"id": 48, "value": "Latin", "color": "#8B008B"},
    {"id": 49, "value": "Telugu", "color": "#FFFF00"},
    {"id": 50, "value": "Kannada", "color": "#00FFFF"},
    {"id": 51, "value": "Bhojpuri", "color": "#FF4500"},
    {"id": 52, "value": "Marathi", "color": "#FF00FF"},
    {"id": 53, "value": "Gujarati", "color": "#7CFC00"},
    {"id": 54, "value": "Bengali", "color": "#8A2BE2"},
    {"id": 55, "value": "Iraqi", "color": "#FFD700"},
    {"id": 56, "value": "Assamese & Odia", "color": "#00CED1"},
    {"id": 57, "value": "All Time Arabic Hits", "color": "#BA55D3"},
    {"id": 58, "value": "Arabic Favorites", "color": "#FF69B4"},
    {"id": 59, "value": "Rock en Español", "color": "#32CD32"},
    {"id": 60, "value": "Feel Good", "color": "#0000FF"}
  ]
  
  
  return (
    <div>
      <OntopOption
        description=""
        title="Mood & Genre"
        handleClick={handleClick}
      />
      <ul
        ref={containerRef}
        className="grid font-roboto grid-rows-4 grid-flow-col mt-3 scroll-smooth min-h-[260px] overflow-x-scroll h-full snap-mandatory snap-x scrollbar-none justify-start"
      >
        {choices.map((choice) => {
          return (
            <li
              key={choice.id}
              style={{borderLeft:`6px solid ${choice.color}`}}
              onClick={()=>handleNavigate(`/mood/${choice.value}`)}
              className={` pl-2 snap-start mx-2 relative rounded-sm my-1 cursor-pointer font-semibold   flex bg-[#292929] hover:bg-[#212121] min-h-[48px] min-w-[190px] py-2  items-center overflow-hidden  mb-2 mr-[14px] group`}
            >
              <p> {choice.value}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MoodAndGenre;

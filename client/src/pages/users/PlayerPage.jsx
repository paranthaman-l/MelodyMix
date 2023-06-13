import React, { useEffect, useRef } from "react";
import { useStates } from "../../context/useStates";
import {  useParams } from "react-router-dom";
import UserServices from "../../services/UserServices";
import { BiFullscreen, BiPlay } from "react-icons/bi";
import { BsPip } from "react-icons/bs";

const PlayerPage = () => {
  const {
    currentSong,
    handleNavigate,
    setCurrentSongs,
    setCurrentSongPlaying,
    currentSongs,
  } = useStates();
  const { sid } = useParams();
  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("text/plain", index.toString());
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
  };

  const handleDrop = (e, dropIndex) => {
    e.preventDefault();

    const draggedIndex = parseInt(e.dataTransfer.getData("text/plain"), 10);
    const newItems = [...currentSongs];
    const [draggedItem] = newItems.splice(draggedIndex, 1);
    newItems.splice(dropIndex, 0, draggedItem);

    setCurrentSongs(newItems);
  };
  const imageRef = useRef(null);
  const toggleFullscreen = () => {
    const element = imageRef.current;

    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      element.requestFullscreen().catch((err) => {
        console.error("Error attempting to enable full-screen mode:", err);
      });
    }
  };

  useEffect(() => {
    const loadData = async () => {
      await UserServices.getSongById(sid)
        .then((response) => {
          setCurrentSongPlaying(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    loadData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

 

  return (
    <div className="bg-black pt-24 ml-20 text-white justify-between w-screen max-h-screen flex items-center">
      <div
        ref={imageRef}
        className="w-[700px] relative h-full flex items-center group"
      >
        <div className="absolute h-full w-full bg-black bg-opacity-40 hidden group-hover:flex duration-500 justify-end p-7 text-xl ">
          <BsPip
            onClick={() => handleNavigate(-1)}
            className="cursor-pointer mx-4"
          />
          <BiFullscreen onClick={toggleFullscreen} className="cursor-pointer" />
        </div>
        <img
          className="w-11/12 ml-10 object-contain"
          src={`https://music-data-bucket.s3.ap-south-1.amazonaws.com/public/${currentSong?.thumnail}`}
          alt=""
        />
      </div>
      <div className=" w-[480px] mr-32 bg-[#030303] flex flex-col min-h-[655px]">
        <div className="flex justify-evenly uppercase ">
          <button className="border-b-[3px] px-3 border-b-white pb-2">
            UpNext
          </button>
          <button>Lyrics</button>
          <button>Related</button>
        </div>
        <div className="mt-10 relative flex flex-col">
          <ul className="flex h-[600px] flex-col overflow-hidden overflow-y-scroll">
            {currentSongs.map((song, index) => {
              return (
                <li
                  key={song.sid}
                  draggable
                  onDragStart={(e) => handleDragStart(e, index)}
                  onDragOver={(e) => handleDragOver(e, index)}
                  onDrop={(e) => handleDrop(e, index)}
                  className={`${
                    currentSong.sid === song.sid && "bg-[#1d1d1d] "
                  } mx-3 cursor-move  relative max-h-20 flex justify-start p-2 items-center`}
                >
                  <div
                    className={`h-10 w-10 absolute flex justify-center bg-opacity-80 items-center left-2 top-3
                  object-contain ${
                    currentSong.sid === song.sid && "bg-[#1d1d1d]"
                  } `}
                  >
                    {currentSong.sid === song.sid && (
                      <BiPlay className="text-white text-xl" />
                    )}
                  </div>
                  <img
                    className="h-10 w-10 object-contain"
                    src={`https://music-data-bucket.s3.ap-south-1.amazonaws.com/public/${song?.thumnail}`}
                    alt=""
                  />
                  <div className="flex flex-col ml-3">
                    <p className="font-bold ">{song.title}</p>
                    <p
                      className={` text-gray-400 w-80 inline-block  overflow-y-hidden`}
                    >
                      {song.lyricist}
                    </p>
                  </div>
                  <p>{song.length}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlayerPage;

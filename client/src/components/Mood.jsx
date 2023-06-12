import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axios } from "../api/axios";
import UserServices from "../services/UserServices";
import { RiPlayList2Fill } from "react-icons/ri";
import { BsFillPlayFill } from "react-icons/bs";
import { useStates } from "../context/useStates";

const Mood = () => {
  const { mood } = useParams();
  const [songs, setSongs] = useState([]);
  const { setCurrentSongPlaying } = useStates();
  useEffect(() => {
    const getAllSongs = async () => {
      await UserServices.getAllSongs().then((response) => {
        const filteredSongs = response.data.filter((song) => {
            return song?.mood?.filter((m) => {
              return m === mood;
            }).length > 0;
          });
        setSongs(filteredSongs);
      });
    };
    getAllSongs();
  }, []);

  return (
    <div className=" text-white px-20 pt-20 pb-20 ">
      <p className="text-[34px] font-bold hover:underline  cursor-pointer mb-10">
        {mood}
      </p>
      <div className="">
        <ul className=" grid grid-cols-6 gap-3 grid-flow-row scroll-smooth  overflow-x-scroll h-full snap-mandatory snap-x scrollbar-none justify-start">
          {songs.map((song, index) => {
            return (
              <li
                key={song.sid}
                className="snap-start relative flex items-center flex-col w-56 justify-center  overflow-hidden  group"
              >
                <div className="relative group mb-2">
                  <img
                    className="w-48 h-48 rounded-md hover:cursor-pointer"
                    src={`https://music-data-bucket.s3.ap-south-1.amazonaws.com/public/${song.thumnail}`}
                    alt=""
                  />
                  <div
                    onClick={() => setCurrentSongPlaying(song)}
                    className="absolute invisible bg-black cursor-pointer bg-opacity-40 h-48 w-48 top-0 left-0 group-hover:visible"
                  >
                    {/* <div className="rounded-full absolute h-10 w-10 right-2 top-2 max-md:h-12 max-md:w-12 flex justify-center items-center hover:bg-half-black1 hover:bg-opacity-80">
                      <RiPlayList2Fill className="text-xl  text-transparent  group-hover:text-white" />
                    </div>

                    <div className="rounded-full absolute hover:scale-[1.2] duration-300 h-10 w-10 right-2 bottom-2 max-md:h-12 max-md:w-12 flex justify-center items-center group-hover:bg-half-black1 group-hover:bg-opacity-80">
                      <BsFillPlayFill className="text-2xl text-transparent  group-hover:text-white" />
                    </div> */}
                  </div>
                </div>
                <div className="flex  flex-col justify-start w-full ml-10 ">
                  <p
                    onClick={() => setCurrentSongPlaying(song)}
                    className="font-roboto font-semibold hover:underline duration-150 cursor-pointer"
                  >
                    {song.title}
                  </p>
                  <p className="flex w-full text-[#b4b4b4] hover:underline duration-150 cursor-pointer">
                    {song.movie.music}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Mood;

import React, { useEffect, useRef, useState } from "react";
import OntopOption from "./OntopOption";
import UserServices from "../../services/UserServices";
import { BsFillPlayFill } from "react-icons/bs";
import { RiPlayList2Fill } from "react-icons/ri";
import { useStates } from "../../context/useStates";

const Albums = () => {
  const containerRef = useRef(null);
  const { handleNavigate } = useStates();
  const handleClick = (side) => {
    const contentDiv = containerRef.current;
    const scrollDistance = side === "left" ? -500 : 900;
    contentDiv.scrollBy({ left: scrollDistance, behavior: "smooth" });
  };
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getAllMovies = async () => {
      await UserServices.getAllMovie()
        .then((response) => {
          setMovies(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getAllMovies();
  }, []);

  return (
    <>
      <OntopOption
        description="Albums evoke nostalgia and memories"
        title="Album"
        handleClick={handleClick}
      />
      <div className="text-white h-[300px]">
        <ul
          ref={containerRef}
          className=" grid grid-rows-1 grid-flow-col scroll-smooth  overflow-x-scroll h-full snap-mandatory snap-x scrollbar-none justify-start"
        >
          {movies.map((movie, index) => {
            return (
              <li
                key={movie.mid}
                className="snap-start relative flex items-center flex-col w-56 justify-center  overflow-hidden  group"
              >
                <div className="relative group mb-2">
                  <img
                    className="w-48 h-48 rounded-md hover:cursor-pointer"
                    src={`${movie.movieimg}`}
                    alt=""
                  />
                  <div className="absolute invisible bg-black cursor-pointer bg-opacity-40 h-48 w-48 top-0 left-0 group-hover:visible">
                    <div className="rounded-full absolute h-10 w-10 right-2 top-2 max-md:h-12 max-md:w-12 flex justify-center items-center hover:bg-half-black1 hover:bg-opacity-80">
                      <RiPlayList2Fill className="text-xl  text-transparent  group-hover:text-white" />
                    </div>

                    <div className="rounded-full absolute hover:scale-[1.2] duration-300 h-10 w-10 right-2 bottom-2 max-md:h-12 max-md:w-12 flex justify-center items-center group-hover:bg-half-black1 group-hover:bg-opacity-80">
                      <BsFillPlayFill className="text-2xl text-transparent  group-hover:text-white" />
                    </div>
                  </div>
                </div>
                <div className="flex  flex-col justify-start w-full ml-10 ">
                  <p
                    onClick={() => handleNavigate(`/movie/${movie.mid}`)}
                    className="font-roboto font-semibold hover:underline duration-150 cursor-pointer"
                  >
                    {movie.movie}
                  </p>
                  <p className="flex w-full text-[#b4b4b4] hover:underline duration-150 cursor-pointer">
                    {movie.music}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Albums;

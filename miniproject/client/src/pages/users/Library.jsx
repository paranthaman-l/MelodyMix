/* eslint-disable react/prop-types */
import { useState } from "react";
import { libraryList } from "../../constants";
import { libraryContent } from "../../components";
import { useSelector } from "react-redux";
import { getUser } from "../../Slice/UserSlice";
import { useStates } from "../../context/useStates";
import { BsFillPinFill } from "react-icons/bs";
const Library = () => {
  const { handleNavigate } = useStates();
  const [isLibraryActive, setIsLibraryActive] = useState(-1);
  const user = useSelector(getUser);
  return (
    <div className="bg-black flex flex-col top-20 text-white min-h-screen">
      <LibraryFilters
        isLibraryActive={isLibraryActive}
        setIsLibraryActive={setIsLibraryActive}
      />
      {isLibraryActive === -1 ? (
        <>
          <div className="grid grid-flow-col grid-cols-5 gap-3 mt-24 px-20">
            <>
              {user?.likedsong?.length !== 0 && (
                <div className="h-40 w-40 flex flex-col">
                  <img
                    onClick={() => handleNavigate(`/likedsongs`)}
                    className="h-full w-full rounded-md cursor-pointer"
                    src="https://www.gstatic.com/youtube/media/ytm/images/pbg/liked-music-@576.png"
                    alt=""
                  />
                  <p className="font-semibold font-roboto mt-1 ml-2">
                    Your Likes
                  </p>
                  <p className="flex items-center ml-1 text-gray-400">
                    <BsFillPinFill /> Auto playlist
                  </p>
                </div>
              )}
               {user.playlists.length > 0 && (
              <ul className=" grid grid-cols-6 gap-3 grid-flow-row scroll-smooth  overflow-x-scroll h-full snap-mandatory snap-x scrollbar-none justify-start">
                {user?.playlists.map((playlist, index) => {
                  return (
                    <li
                      onClick={()=>handleNavigate(`/playlist/${playlist.pid}`)}
                      key={playlist.pid}
                      className="snap-start relative flex items-center flex-col w-56 justify-center  overflow-hidden  group"
                    >
                      <div className="relative group mb-2">
                        <img
                          className="w-40 h-40 rounded-md hover:cursor-pointer"
                          src={`${playlist.image}`}
                          alt=""
                        />
                        <div
                          // onClick={() => setCurrentSongPlaying(song)}
                          className="absolute invisible bg-black cursor-pointer bg-opacity-40 h-40 w-40 top-0 left-0 group-hover:visible"
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
                          // onClick={() => setCurrentSongPlaying(song)}
                          className="font-roboto font-semibold hover:underline duration-150 cursor-pointer"
                        >
                          {playlist.name}
                        </p>
                        <p className="flex w-full text-[#b4b4b4] hover:underline duration-150 cursor-pointer">
                          {playlist.description}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>)}
            </>
          </div>
        </>
      ) : (
        <div className="mt-20">
          {libraryContent.map((library, i) => {
            return (
              <div
                className={`${i === isLibraryActive ? "block" : "hidden"}`}
                key={i}
              >
                {library}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export const LibraryFilters = ({ isLibraryActive, setIsLibraryActive }) => {
  return (
    <div className="top-20 relative px-32 h-16 backdrop-opacity-10 max-md:mx-auto max-md:px-10 max-sm:px-2 max-md:top-20 font-roboto w-6/12 max-md:w-full max-xl:w-9/12">
      <ul className="grid grid-cols-5 overflow-auto max-sm:grid-cols-4 max-sm:gap-2">
        {libraryList.map((lib, i) => {
          return (
            <>
              <li
                onClick={() => setIsLibraryActive(i)}
                key={lib}
                className={`flex justify-center items-center mx-[6px] rounded-md bg-gray-700 bg-opacity-60 backdrop-opacity-90 b text-sm text-white cursor-pointer hover:bg-half-black ${
                  isLibraryActive === i ? "bg-white text-black" : ""
                }`}
              >
                <span
                  className={`py-[5px]   w-full flex justify-center items-center rounded-lg ${
                    isLibraryActive === i
                      ? "bg-white bg-opacity-80 text-black "
                      : ""
                  }`}
                >
                  {lib}
                </span>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};
export default Library;

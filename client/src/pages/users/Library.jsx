/* eslint-disable react/prop-types */
import { useState } from "react";
import { libraryList } from "../../constants";
import { libraryContent } from "../../components";
import { useSelector } from "react-redux";
import { getUser } from "../../Slice/UserSlice";
const Library = () => {
  const [isLibraryActive, setIsLibraryActive] = useState(-1);
  const user = useSelector(getUser);
  return (
    <div className="bg-black flex flex-col top-20 text-white min-h-screen">
      <LibraryFilters
        isLibraryActive={isLibraryActive}
        setIsLibraryActive={setIsLibraryActive}
      />
      {isLibraryActive === -1 ? (
        <div className="grid grid-flow-row gap-3 mt-24 px-20">
          {user?.likedsong?.length !== 0 && (
            <div className="h-40 w-40 ">
              <img
                className="h-full w-full rounded-md cursor-pointer"
                src="https://www.gstatic.com/youtube/media/ytm/images/pbg/liked-music-@576.png"
                alt=""
              />
            </div>  
          )}
        </div>
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

import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { useStates } from "../../context/useStates";
import SongPagingOption from "../../components/AdminPageComponents/SongPagingOption";

const Songs = () => {
  const {
    allSongs,
    setCurrentSong,
    loading,
    setSongPagination,
    songPagination,
  } = useStates();
  return (
    <div className="py-24">
      {loading && (
        <div className="flex justify-center items-center z-10 -top-10 left-0 bg-black absolute w-full h-full bg-opacity-40 ">
          <svg
            className="animate-spin text-green w-12 h-12"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="3"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      )}
      <table className="w-full font-poppins text-lg">
        <tr className="">
          <th>Song</th>
          <th
            className="flex justify-start ml-10 cursor-pointer"
            onClick={() =>
              setSongPagination({
                ...songPagination,
                sortDirection:
                  songPagination.sortDirection === "ASC" ? "DESC" : "ASC",
                field: "title",
              })
            }
          >
            Title
          </th>
          <th>Visibility</th>
          {/* <div className="flex items-center justify-evenly"> */}
          <th
            className="flex justify-start cursor-pointer"
            onClick={() =>
              setSongPagination({
                ...songPagination,
                sortDirection:
                  songPagination.sortDirection === "ASC" ? "DESC" : "ASC",
                field: "views",
              })
            }
          >
            Plays
          </th>
          <th
            onClick={() => {
              setSongPagination({
                ...songPagination,
                sortDirection:
                  songPagination.sortDirection === "ASC" ? "DESC" : "ASC",
                field: "likes",
              });
            }}
            className="cursor-pointer"
          >
            <span className="flex justify-center">Likes</span>
          </th>
          {/* </div> */}
        </tr>
        <tbody className="">
          {allSongs.map((song) => {
            return (
              <tr className="hover:bg-half-black1 group">
                <td className="py-3 flex items-center justify-center">
                  <img
                    className="w-14 h-14 rounded-lg"
                    src={`https://music-data-bucket.s3.ap-south-1.amazonaws.com/public/${song.thumnail}`}
                    alt=""
                  />
                </td>
                <td className="ml-10 w-4/12 relative">
                  <p className="ml-10 font-roboto text-lg">{song.title}</p>
                  <div className="flex w-[150px] justify-evenly text-2xl group-hover:visible invisible right-0 top-[30%] absolute text-gray-400">
                    <span
                      onClick={() => setCurrentSong(song)}
                      className="hover:text-white cursor-pointer rounded-full"
                    >
                      <AiFillPlayCircle />
                    </span>
                  </div>
                </td>
                <td className="text-base text-gray-500 text-center">
                  <p className="">public</p>
                </td>
                {/* <span className="flex justify-evenly items-center text-center"> */}
                <td className="text-base text-gray-400 ">
                  <p className="ml-5">{song.views}</p>
                </td>
                <td className="text-base text-center text-gray-300">
                  <p className="">{song.likes}</p>
                </td>
                {/* </span> */}
              </tr>
            );
          })}
        </tbody>
      </table>
      <SongPagingOption />
    </div>
  );
};

export default Songs;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useStates } from "../../context/useStates";
import UserServices from "../../services/UserServices";
import { BiPlay } from "react-icons/bi";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { RxDotsVertical } from "react-icons/rx";
import SingleComponent from "../SingleComponent";

const PlayList = () => {
    const { pid } = useParams();
  const [playList, setPlayList] = useState();
  const { setCurrentSongs, setCurrentSong } = useStates();
  useEffect(() => {
    const getPlayList = async () => {
      await UserServices.getPlayList(pid)
        .then((response) => {
          setPlayList(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getPlayList();
  }, [pid]);
  const handleSetSongs = () => {
    setCurrentSongs(playList?.songs);
    setCurrentSong(playList?.songs[Math.floor(Math.random() * playList.songs.length)]); 
  };
  const [showAddPlayList,setShowAddPlayList]  = useState(false);
  useEffect(() => {
    document.body.style.overflow =
    showAddPlayList ? "hidden" : "auto";
  }, [showAddPlayList]);
  return (
    <div className="mx-20 pt-32 max-lg:mx-10 flex flex-col text-white ">
      <div className="flex items-center">
        <img
          className="w-64 h-64  max-lg:w-2/6 max-lg:h-2/6 max-md:w-3/6 max-md:h-3/6 rounded-md"
          src={`${playList?.image}`}
          alt=""
        />
        <div className="flex flex-col ml-14">
          <p className="font-bold text-4xl pt-3 pb-1 w-full">
            {playList?.name}
          </p>
          <p className="text-[#b4b4b4] text-base mt-3">
            Single • {playList?.description}
          </p>

          <p className="text-[#b4b4b4] text-base mb-4">
            {playList?.songs?.length} song
          </p>
          <div className="flex items-center max-md:hidden">
            <button
              onClick={handleSetSongs}
              className="hover:bg-opacity-90 px-2  text-base font-roboto bg-white rounded-2xl text-black font-semibold flex justify-center items-center focus:bg-black focus:text-white focus:border-white border-2 outline-none"
            >
              <BiPlay className="font-semibold text-3xl" />
              Play
            </button>
            <button
              onClick={() => setShowAddPlayList(true)}
              className="px-2 mx-3  text-base font-roboto py-1 bg-transparent rounded-2xl text-white flex justify-center items-center focus:bg-white focus:text-black focus:border-black border-2 outline-none"
            >
              <MdOutlineLibraryAdd className=" text-2xl mr-2" />
              Add to Library
            </button>
            <span className="p-2 cursor-pointer mx-2 rounded-full hover:bg-slate-700">
              <RxDotsVertical className=" text-xl " />
            </span>
          </div>
        </div>
      </div>
      <div className="max-md:flex items-center hidden mt-5">
        <button
          onClick={handleSetSongs}
          className="hover:bg-opacity-90 px-2  text-base font-roboto bg-white rounded-2xl text-black font-semibold flex justify-center items-center focus:bg-black focus:text-white focus:border-white border-2 outline-none"
        >
          <BiPlay className="font-semibold text-3xl" />
          Play
        </button>
        <button
          onClick={() => setShowAddPlayList(true)}
          className="px-2 mx-3  text-base font-roboto py-1 bg-transparent rounded-2xl text-white flex justify-center items-center focus:bg-white focus:text-black focus:border-black border-2 outline-none"
        >
          <MdOutlineLibraryAdd className=" text-2xl mr-2" />
          Add to Library
        </button>
        <span className="p-2 cursor-pointer mx-2 rounded-full hover:bg-slate-700">
          <RxDotsVertical className=" text-xl " />
        </span>
      </div>
      <div className="text-white my-16">
        <ul className="flex flex-col mx-24 max-md:w-full max-md:mx-4">
          {playList?.songs.map((song, i) => {
            return <SingleComponent song={song} i={i} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default PlayList;

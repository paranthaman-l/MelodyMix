import React from "react";
import { ChannelTop } from "../../components";
import { UploadStates } from "../../context/songUploadContext";
import Upload from "../../components/UploadSong.jsx/Upload";
import { useDispatch, useSelector } from "react-redux";
import { getUser, setUser } from "../../Slice/UserSlice";
import { MdDeleteOutline, MdOutlineModeEditOutline } from "react-icons/md";
import { AiFillPlayCircle } from "react-icons/ai";
import { useStates } from "../../context/useStates";
import EditSong from "../../components/UploadSong.jsx/EditSong";
import UserServices from "../../services/UserServices";

const Channel = () => {
  const { isSongUpload, isSongUpdate, setSong, setIsSongUpdate } =
    UploadStates();
  const user = useSelector(getUser);
  const { setCurrentSong } = useStates();
  const dispatch = useDispatch();
  const deleteSong = async (sid) => {
    await UserServices.deleteSong(sid);
    await UserServices.getUser(user.uid)
      .then((response) => {
        dispatch(setUser(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <ChannelTop />
      {isSongUpload && <Upload />}
      {isSongUpdate && <EditSong />}
      {user.songs.length!==0 ?
      <div className="w-full mb-24 mt-4">
        <p className="mx-14 text-2xl mb-4 font-semibold font-roboto">
          Your's Songs
        </p>
        <table className="w-full font-poppins text-lg">
          <tr className="">
            <th>Song</th>
            <th className="flex justify-start ml-10">Title</th>
            <th>Visibility</th>
            {/* <div className="flex items-center justify-evenly"> */}
              <th className="flex justify-start">Views</th>
              <th className=" ">
                <span className="flex justify-center">Likes</span>
              </th>
            {/* </div> */}
          </tr>
          <tbody className="">
            {user.songs.map((song) => {
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
                        onClick={() => {
                          setSong(song);
                          setIsSongUpdate(true);
                        }}
                        className="hover:text-white cursor-pointer rounded-full"
                      >
                        <MdOutlineModeEditOutline />
                      </span>
                      <span
                        onClick={() => setCurrentSong(song)}
                        className="hover:text-white cursor-pointer rounded-full"
                      >
                        <AiFillPlayCircle />
                      </span>
                      <span
                        onClick={() => deleteSong(song.sid)}
                        className="hover:text-white cursor-pointer rounded-full"
                      >
                        <MdDeleteOutline />
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
      </div>:""}
    </div>
  );
};

export default Channel;

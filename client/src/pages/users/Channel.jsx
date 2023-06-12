import React, { useEffect, useRef, useState } from "react";
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
import { BsExclamation, BsExclamationCircle } from "react-icons/bs";
import { toast } from "react-hot-toast";
const Channel = () => {
  const { isSongUpload, isSongUpdate, setSong, setIsSongUpdate } =
    UploadStates();
  const user = useSelector(getUser);

  const { setCurrentSong } = useStates();
  const dispatch = useDispatch();
  const [deleteSongSid, setDeleteSongSid] = useState();
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const deleteRef = useRef();
  const deleteSong = async () => {
    await UserServices.deleteSong(deleteSongSid).then(async (res) => {
      await UserServices.getUser(user.uid)
        .then((response) => {
          dispatch(setUser(response.data));
          toast.success(res.data)
          closeConfirmation();
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };
  const openConfirmation = (sid) => {
    setDeleteSongSid(sid);
    setIsConfirmationOpen(true);
  };

  const closeConfirmation = () => {
    setDeleteSongSid(null);
    setIsConfirmationOpen(false);
  };
  useEffect(() => {
    document.body.style.overflow =
      isSongUpdate || isSongUpload || isConfirmationOpen ? "hidden" : "auto";
  }, [isSongUpload, isSongUpdate, isConfirmationOpen]);
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <ChannelTop />
      {isSongUpload && <Upload />}
      {isSongUpdate && <EditSong />}
      {isConfirmationOpen && (
        <div className="fixed top-0 left-0 h-screen w-screen  bg-black bg-opacity-80 z-10 flex justify-center items-center">
          <div
            ref={deleteRef}
            className={"h-56 w-96 rounded-lg bg-white text-black"}
          >
            <BsExclamationCircle className="text-red-700 text-2xl text-center w-full mt-4 mb-2" />
            <h2 className="font-semibold text-center text-lg">Delete Song</h2>
            <p className="text-center mt-4">
              Are you sure you want to delete this Song? from MelodyMix Account
            </p>
            <div className="flex justify-end mt-7 mr-4">
              <button
                onClick={deleteSong}
                className="text-red-700 px-2 py-1 mx-2"
              >
                Delete
              </button>
              <button onClick={closeConfirmation} className="mx-2">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {user.songs.length !== 0 ? (
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
              <th className="flex justify-start">Plays</th>
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
                          onClick={() => {
                            openConfirmation(song.sid);
                          }}
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
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Channel;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserServices from "../../services/UserServices";
import { BiPlay, BiShuffle } from "react-icons/bi";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { RxDotsVertical } from "react-icons/rx";
import SingleComponent from "../SingleComponent";
import { useDispatch, useSelector } from "react-redux";
import { getUser, setUser } from "../../Slice/UserSlice";

const OthersChannel = () => {
  const { otheruid } = useParams();
  const [userData, setUserData] = useState();
  const [isSupport, setIsSupport] = useState(false);
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  const getChannelData = async () => {
    await UserServices.getUser(otheruid)
      .then((response) => {
        setUserData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getChannelData();
  }, [otheruid]);
  useEffect(() => {
    // eslint-disable-next-line
    const isSupport1 = user?.supportering?.find((uid) => uid === userData?.uid);
    if (isSupport1) {
      setIsSupport(true);
    } else setIsSupport(false);
    getChannelData();
  }, [user]);

  const addSupporters = async (uid, suid) => {
    await UserServices.addSupporters(uid, suid).then((response) => {
      dispatch(setUser(response.data));
    });
  };
  return (
    <div className="w-full mt-24 ml-28">
      <div className="flex">
        <img
          className="h-64 w-64 rounded-lg "
          src={
            `https://music-data-bucket.s3.ap-south-1.amazonaws.com/public/${
              userData?.profile[userData?.profile?.length - 1]
            }` || ""
          }
          alt=""
        />
        <div className="flex flex-col ml-20">
          <p className="uppercase  mt-10 text-white font-semibold text-4xl font-roboto">
            {userData?.username}
          </p>
          <div className="">
            <p className="text-gray-400 mb-6 mt-2">
              @{userData?.username} •{" "}
              <span>{userData?.songs.length} Songs</span>
            </p>
          </div>
          <div className="flex items-center max-md:hidden">
            <button className="hover:bg-opacity-90 px-2 py-1  text-base font-roboto bg-white rounded-2xl text-black font-semibold flex justify-center items-center focus:bg-black focus:text-white focus:border-white border-2 outline-none">
              <BiShuffle className="font-semibold text-xl mr-2" />
              Shuffle
            </button>
            <button className="px-2 mx-3  text-base font-roboto py-1 bg-transparent rounded-2xl text-white flex justify-center items-center focus:bg-white focus:text-black focus:border-black border-2 outline-none">
              <MdOutlineLibraryAdd className=" text-2xl mr-2" />
              Add to Library
            </button>
            {user && (
              <button
                onClick={() => {
                  addSupporters(user?.uid, userData?.uid);
                }}
                className="text-green border-[2px] px-5 py-1 font-semibold font-roboto rounded-3xl border-green min-w-[150px]"
              >
                {isSupport ? "Supporting " : "Support "}
                {userData?.supporters}
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="text-white my-16">
        <ul className="flex flex-col mx-40 -ml-5 max-md:w-full max-md:mx-4">
          {userData?.songs.map((song, i) => {
            return <SingleComponent song={song} i={i} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default OthersChannel;

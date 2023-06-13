import React from "react";
import { useSelector } from "react-redux";
import { getUser } from "../../Slice/UserSlice";
import { TbShare3 } from "react-icons/tb";
import Upload from "../UploadSong.jsx/Upload";

const ChannelTop = () => {
  const user = useSelector(getUser);
  return (
    <>
    <Upload/>
      <div className="flex justify-between px-16 items-center mb-10">
        <div className="flex items-center">
          <img
            className="w-48 h-48 relative rounded-full object-cover"
            src={
              `https://music-data-bucket.s3.ap-south-1.amazonaws.com/public/${
                user?.profile[user?.profile?.length - 1]
              }` || ""
            }
            alt=""
          />
          <span className="flex flex-col text-[#aaaaaa] mx-4">
            <p className="text-3xl text-white font-roboto font-semibold uppercase ">
              {user?.username}
            </p>
            {!user?.ischannel && (
              <p className="">
                @{user?.username}{" "}
                <span className="mx-4"> {user?.supporters} Supporters</span>
                <span>{user?.songs.length} Songs</span>
              </p>
            )}
          </span>
        </div>
        <div className="flex gap-2 -mt-10">
          {!user?.ischannel && (
            <>
              <button className="bg-[#272727] px-3 py-1 rounded-2xl font-semibold hover:bg-[#3f3f3f]">
                Customize Channel
              </button>
              <button className="bg-[#272727] px-3 py-1 rounded-2xl font-semibold hover:bg-[#3f3f3f]">
                Manage Songs
              </button>
            </>
          )}
          <button className="flex items-center min-w-[90px] justify-between bg-[#272727] px-3 py-1 rounded-2xl font-semibold hover:bg-[#3f3f3f]">
            <TbShare3 />
            Share
          </button>
        </div>
      </div>
    </>
  );
};

export default ChannelTop;

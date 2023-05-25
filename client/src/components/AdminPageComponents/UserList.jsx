import React from "react";
import { useStates } from "../../context/useStates";
import { BsThreeDotsVertical } from "react-icons/bs";

const UserList = () => {
  const { allUsers, loading } = useStates();
  return (
    <div className="px-28 pb-20 w-full h-full max-lg:pb-28 relative min-h-[89vh]">
      {loading && (
        <div className="flex justify-center items-center -top-10 left-0 bg-black absolute w-full h-full bg-opacity-40 ">
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
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      )}
      <ul className="grid grid-flow-row grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-5">
        {allUsers?.map((user) => {
          return (
            <li
              className="w-full bg-white flex flex-col items-center rounded-lg shadow-md max-md:w-full"
              key={user?.uid}
            >
              <span className="w-full flex justify-end text-[#909faa] mt-3 ">
                <BsThreeDotsVertical className="mr-4 text-xl cursor-pointer" />
              </span>
              <div className="flex flex-col justify-center w-full items-center py-3">
                <span className="w-[90px] h-[90px] flex justify-center items-center rounded-full bg-[#e4e9fa]">
                  <img
                    className="w-20 h-20 rounded-full top-0 left-0"
                    src={
                      `https://music-data-bucket.s3.ap-south-1.amazonaws.com/public/${
                        user?.profile[user?.profile?.length - 1]
                      }` || ""
                    }
                    alt=""
                  />
                </span>
                <p className="font-poppins font-semibold flex items-center">
                  {user.username}
                  {"  "}
                  {user.ischannel && (
                    <img
                      className="h-5 w-5"
                      src="https://www.pngall.com/wp-content/uploads/8/Verification-Blue-Tick-PNG.png"
                      alt=""
                    />
                  )}
                </p>
                <p className="text-[#909faa] text-sm">{user.email}</p>
              </div>
              <div className="flex items-center">
                <button className="bg-green px-5 py-1 rounded-xl text-sm mb-4">
                  View Profile
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UserList;

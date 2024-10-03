import React from "react";
import { useStates } from "../../context/useStates";

const UserList = () => {
  const { allUsers, loading, handleNavigate, pagination, setPagination } =
    useStates();
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
      <table className="w-full font-poppins mt-10 text-lg">
        <tr className="">
          <th className="cursor-pointer">Profile</th>
          <th
            onClick={() =>
              setPagination({
                ...pagination,
                sortDirection:
                  pagination.sortDirection === "ASC" ? "DESC" : "ASC",
                field: "username",
              })
            }
            className="cursor-pointer   ml-10"
          >
            UserName
          </th>
          <th className="cursor-pointer"
           onClick={() =>
            setPagination({
              ...pagination,
              sortDirection:
                pagination.sortDirection === "ASC" ? "DESC" : "ASC",
              field: "email",
            })
          }
          >email</th>
          {/* <div className="cursor-pointer flex items-center justify-evenly"> */}
          <th className="cursor-pointer  justify-start" onClick={() =>
            setPagination({
              ...pagination,
              sortDirection:
                pagination.sortDirection === "ASC" ? "DESC" : "ASC",
              field: "supporters",
            })
          }>Subscribers</th>
          <th onClick={() =>
            setPagination({
              ...pagination,
              sortDirection:
                pagination.sortDirection === "ASC" ? "DESC" : "ASC",
              field: "songs.length",
            })
          } className=" ">
            <span className="cursor-pointer flex justify-center">Songs</span>
          </th>
          {/* </div> */}
        </tr>
        <tbody className="">
          {allUsers.map((user) => {
            return (
              <tr className="hover:bg-half-black1 group relative">
                <td className="py-3 flex items-center justify-center cursor-pointer">
                  <img
                    className="w-14 h-14 rounded-lg"
                    src={
                      `${
                        user?.profile[user?.profile?.length - 1]
                      }` || ""
                    }
                    alt=""
                  />
                </td>
                <td className="ml-10  relative ">
                  <p
                    className="ml-10 font-roboto text-lg uppercase hover:underline cursor-pointer"
                    onClick={() => handleNavigate(`/channel/${user.uid}`)}
                  >
                    {user.username}
                  </p>
                </td>
                <td className="text-base  text-gray-300">{user.email}</td>
                {/* <span className="flex justify-evenly items-center text-center"> */}
                <td className="text-base text-center text-gray-400 ">
                  <p className="">{user.supporters}</p>
                </td>
                <td className="text-base text-center text-gray-300">
                  <p className="">{user?.songs?.length}</p>
                </td>
                {/* </span> */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;

import React from "react";
import { useStates } from "../../context/useStates";

const UserList = () => {
  const { allUsers } = useStates();
  return (
    <div>
      <ul className="flex flex-col w-full px-2">
        {allUsers.map((user) => {
          return (
            <li className="py-1 flex text-sm h-20 items-center " key={user.uid}>
              <p className="w-1/12 h-5 overflow-hidden text-ellipsis whitespace-nowrap">{user.uid}</p>
              <span className="flex items-center ml-20 w-1/12">
                <img
                  className="w-16 h-16 relative rounded-full "
                  src={
                    `https://music-data-bucket.s3.ap-south-1.amazonaws.com/public/${
                      user?.profile[user?.profile?.length - 1]
                    }` || ""
                  }
                  alt=""
                />
              </span>
              <p className="text-[#aaaaaa] text-sm w-3/12 flex items-center font-poppins hover:text-white cursor-pointer duration-500">
                {user.username}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UserList;

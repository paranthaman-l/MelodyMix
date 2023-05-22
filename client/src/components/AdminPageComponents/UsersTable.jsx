import React from "react";
import { usersTableTitle } from "../../constants";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import UserList from "./UserList";
import { useStates } from "../../context/useStates";
const UsersTable = () => {
  const { pagination, setPagination } = useStates();
  console.log(pagination);
  return (
    <div className="flex flex-col">
      <div className="">
        <ul className="flex items-center w-full border-y-[1px] border-[#3e3e3e] h-12 px-4">
          <li className="py-1 w-1/12 flex items-center justify-center mr-14">
            <p className="text-[#aaaaaa] text-sm font-poppins w-fit hover:text-white cursor-pointer duration-500">
              User Id
            </p>
          </li>
          <li className="py-1 w-1/12 flex items-center justify-center mr-24">
            <p className="text-[#aaaaaa] text-sm font-poppins w-fit hover:text-white cursor-pointer duration-500">
              Profile
            </p>
          </li>
          {usersTableTitle.map((head) => {
            return (
              <li className="py-1 w-3/12 flex items-center " key={head.id}>
                <p className="text-[#aaaaaa] text-sm font-poppins w-fit hover:text-white cursor-pointer duration-500">
                  {head.title}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="min-h-[100px]">
        <UserList />
      </div>
      <div className="flex items-center justify-end w-full border-y-[1px] border-[#3e3e3e] h-12 mb-56">
        <p className="mx-4">Rows per page :</p>
        <input
          className="w-10 bg-transparent indent-[5px] outline-none"
          defaultValue={pagination.offset}
          min={1}
          max={100}
          type="number"
          name="offset"
          id=""
          onChange={(e) =>
            setPagination({
              ...pagination,
              offset: parseInt(e.target.value, 10),
            })
          }
        />
        <div className="flex items-center mx-3 ">
          <span className="p-1 rounded-full group hover:bg-half-black hover:text-white cursor-pointer">
            <HiChevronLeft
              onClick={() => {
                if (pagination.pageSize !== 0) {
                  setPagination({
                    ...pagination,
                    pageSize: pagination.pageSize - 1,
                  });
                }
              }}
              className="text-2xl text-[#aaaaaa] group-hover:text-white"
            />
          </span>
          <span
            onClick={() => {
              if (pagination.pageSize <= 10) {
                setPagination({
                  ...pagination,
                  pageSize: pagination.pageSize + 1,
                });
              }
            }}
            className="p-1 rounded-full group hover:bg-half-black hover:text-white cursor-pointer"
          >
            <HiChevronRight className="text-2xl text-[#aaaaaa] group-hover:text-white" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default UsersTable;

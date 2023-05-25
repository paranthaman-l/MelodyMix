import React from "react";
import SortOption from "../../components/AdminPageComponents/SortOption";
import UserList from "../../components/AdminPageComponents/UserList";
import PagingOption from "../../components/AdminPageComponents/PagingOption";

const Users = () => {
  return (
    <div className="mt-16 bg-[#f1f3fa] text-black">
      <SortOption />
      <UserList />
      <PagingOption />
    </div>
  );
};

export default Users;

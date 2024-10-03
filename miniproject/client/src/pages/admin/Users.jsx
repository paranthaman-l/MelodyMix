import React from "react";
import UserList from "../../components/AdminPageComponents/UserList";
import PagingOption from "../../components/AdminPageComponents/PagingOption";

const Users = () => {
  return (
    <div className="mt-20">
      <UserList />
      <PagingOption />
    </div>
  );
};

export default Users;

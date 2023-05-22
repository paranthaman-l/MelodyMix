import React, { useEffect } from "react";
import { useAdminStates } from "../../context/useAdminStates";
import AdminUserServices from "../../services/AdminUserServices";
import { useStates } from "../../context/useStates";
import UsersTable from "../../components/AdminPageComponents/UsersTable";

const Users = () => {
  const { setAllUsers } = useStates();
  useEffect(() => {
    const getAllUsers = async () => {
      const response = await AdminUserServices.getAllUsers();
      setAllUsers(response.data);
    };
    getAllUsers();
  }, []);

  return (
    <div className="pt-24 bg-[#282828]">
      <UsersTable />
    </div>
  );
};

export default Users;

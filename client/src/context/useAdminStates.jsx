import { createContext, useContext, useEffect, useState } from "react";
import AdminUserServices from "../services/AdminUserServices";

const Context = createContext();

export const AdminStates = ({ Children }) => {
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    const getAllUsers = async () => {
      const response = await AdminUserServices.getAllUsers();
      setAllUsers(response.data);
      console.log(response);
    };
    getAllUsers();
  }, []);

  return (
    <Context.Provider value={{ allUsers, setAllUsers }}>
      {Children}
    </Context.Provider>
  );
};

export const useAdminStates = () => useContext(Context);

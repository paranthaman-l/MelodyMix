/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser, logout, setUser } from "../Slice/UserSlice";
import UserServices from "../services/UserServices";
import { Storage } from "aws-amplify";

const Context = createContext();

export const States = ({ children }) => {
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  //! Variable Declarations
  const [signUpFormUser, setSignUpFormUser] = useState({
    username: "",
    email: "",
    profile: ["iconT.png24c6baf6-8838-459f-964e-09d92d3ffd13"],
    password: "",
    confirmPassword: "",
  });
  const [signInFormUser, setSignInFormUser] = useState({
    email: "",
    password: "",
  });

  const audioRef = useRef(null);
  const [isPlay, setIsPlay] = useState(false);
  const [loading, setIsLoading] = useState(false);

  const [updatePath, setUpdatePath] = useState(1);

  const navigate = useNavigate();

  //! Variable Declarations End ---------------------------------------------------------------------------------------------------------------------------------

  //! Functions Declarations
  const handleNavigate = (link) => {
    navigate(link);
  };

  const handleChangeSignUpFormData = (e) => {
    const { name, value } = e.target;
    setSignUpFormUser({ ...signUpFormUser, [name]: value });
  };
  const handleChangeSignInFormData = (e) => {
    const { name, value } = e.target;
    setSignInFormUser({ ...signInFormUser, [name]: value });
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    setTimeout(async () => {
      const response = await UserServices.signUpUser(signUpFormUser);
      dispatch(setUser(response.data));
      localStorage.setItem("user", response.data.uid);
    }, 1000);
  };
  const handleSignIn = async (e) => {
    e.preventDefault();
    const response = (await UserServices.signInUser(signInFormUser.email)).data;

    dispatch(setUser(response));
    localStorage.setItem("user", response.uid);
  };

  const handleSignOut = (e) => {
    e.preventDefault();
    dispatch(logout());
    localStorage.removeItem("user");
  };

  const handleProfileUpload = async (file) => {
    setIsLoading(true);
    // await Storage.put(file.name, file)
    //   .then(async (response) => {
    //     await UserServices.updateProfile(user?.uid, `${response.key}`).then(
    //       (response1) => {
    //         dispatch(setUser(response1.data));
    //       }
    //     );
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    setTimeout(() => {
      setIsLoading(false);
      setUpdatePath(1);
    }, 2000);
  };
  //! Functions Declarations End ---------------------------------------------------------------------------------------------------------------------------------

  //! UseEffects Declarations
  useEffect(() => {
    const getUser = async () => {
      setIsLoading(true);
      if (localStorage.getItem("user")) {
        const userId = localStorage.getItem("user");
        const response = await UserServices.getUser(userId);
        dispatch(setUser(response.data));
      }
      setIsLoading(false);
    };
    getUser();
  }, []);

  //! UseEffects Declarations End ---------------------------------------------------------------------------------------------------------------------------------
  return (
    <Context.Provider
      value={{
        handleNavigate,
        handleSignIn,
        handleChangeSignUpFormData,
        handleSignUp,
        handleSignOut,
        signUpFormUser,
        setSignUpFormUser,
        handleProfileUpload,
        signInFormUser,
        setSignInFormUser,
        handleChangeSignInFormData,
        loading,
        updatePath,
        setUpdatePath,
        audioRef,
        isPlay,
        setIsPlay,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStates = () => useContext(Context);

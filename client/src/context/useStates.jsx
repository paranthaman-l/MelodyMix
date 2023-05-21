/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser, logout, setUser } from "../Slice/UserSlice";
import UserServices from "../services/UserServices";
import { Storage } from "aws-amplify";
import { signUpQuotes } from "../constants";
import { setAdmin } from "../Slice/AdminSlice";

const Context = createContext();

export const States = ({ children }) => {
  const user = useSelector(getUser);
  const quote = signUpQuotes[Math.floor(Math.random() * signUpQuotes.length)];
  const dispatch = useDispatch();
  //! Variable Declarations
  const [signUpFormUser, setSignUpFormUser] = useState({
    username: "",
    email: "",
    profile: ["iconT.png24c6baf6-8838-459f-964e-09d92d3ffd13"],
    password: "",
    confirmPassword: "",
  });
  const [signUpError, setSignUpError] = useState({});
  const [signInError, setSignInError] = useState({});
  const [signInFormUser, setSignInFormUser] = useState({
    email: "",
    password: "",
  });

  const audioRef = useRef(null);
  const [isPlay, setIsPlay] = useState(false);
  const [isLoop, setIsLoop] = useState(false);

  const [currentSong, setCurrentSong] = useState(null);

  const [loading, setIsLoading] = useState(false);

  const [updatePath, setUpdatePath] = useState(1);

  const navigate = useNavigate();

  //! Variable Declarations End ---------------------------------------------------------------------------------------------------------------------------------

  //! Functions Declarations
  const handleNavigate = (link) => {
    navigate(link);
  };

  const ValidateSignUpForm = () => {
    setSignUpError({});
    let error = {};
    var isValid = true;
    if (!signUpFormUser.email.trim()) {
      error.emailError = "Please enter your email";
      isValid = false;
    } else if (
      !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/.test(signUpFormUser.email)
    ) {
      error.emailError = "Email Address is Invalid!";
      isValid = false;
    }
    if (!signUpFormUser.password.trim()) {
      error.passwordError = "Please enter your password";
      isValid = false;
    } else if (signUpFormUser.password.length < 6) {
      error.passwordError = "Minimum password length must be 6";
      isValid = false;
    }
    if (!signUpFormUser.username.trim()) {
      error.usernameError = "Please enter your username";
      isValid = false;
    }
    if (!signUpFormUser.confirmPassword.trim()) {
      error.confirmPasswordError = "Please enter your confirmPassword";
      isValid = false;
    } else if (signUpFormUser.confirmPassword !== signUpFormUser.password) {
      error.confirmPasswordError = "Does Not Match Password";
      isValid = false;
    }
    setSignUpError(error);
    return isValid;
  };

  const ValidateSignInForm = () => {
    setSignInError({});
    let error = {};
    var isValid = true;
    if (!signInFormUser.email.trim()) {
      error.emailError = "Please enter your email";
      isValid = false;
    } 
    if (!signInFormUser.password.trim()) {
      error.passwordError = "Please enter your password";
      isValid = false;
    }
    setSignInError(error);
    return isValid;
  };
  const validateEmailAndPassword = (response) => {
    setSignInError({});
    let error = {};
    var isValid = true;
    if (response === "Invalid email") {
      error.emailError = "Invalid email";
      isValid = false;
    } 
    if (response === "Invalid password") {
      error.passwordError = "Invalid password";
      isValid = false;
    }
    setSignInError(error);
    return isValid;
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
    if (ValidateSignUpForm()) {
        const response = await UserServices.signUpUser(signUpFormUser);
        dispatch(setUser(response.data));
        localStorage.setItem("user", response.data.uid);
    }
  };
  const handleSignIn = async (e) => {
    e.preventDefault();
    if (ValidateSignInForm()) {
      if (
        signInFormUser.email.trim() === "paranthaman" &&
        signInFormUser.password.trim() === "02062004"
      ) {
        navigate("/admin/home");
        dispatch(
          setAdmin({
            aid: "paranthaman",
            username: "Paranthaman L",
          })
        );
        localStorage.setItem("admin", {
          aid: "paranthaman",
          username: "Paranthaman L",
        });
        return;
      }
      const response = (
        await UserServices.signInUser(
          signInFormUser.email,
          signInFormUser.password
        )
      ).data;
      if (validateEmailAndPassword(response)) {
        const responseData = await UserServices.getUser(response);
        dispatch(setUser(responseData.data));
        localStorage.setItem("user", responseData.data.uid);
      } else {
        console.log(response);
      }
    }
  };

  const handleSignOut = (e) => {
    e.preventDefault();
    setCurrentSong(null);
    dispatch(logout());
    setSignInFormUser({
      username: "",
      password: "",
    });
    localStorage.removeItem("user");
    localStorage.removeItem("admin");
    dispatch(setAdmin(null));
    navigate("/home");
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

  const setCurrentSongPlaying = (song) => {
    setCurrentSong(song);
  };

  const addLikedSong = async (sid) => {
    if (user?.uid) {
      const response = (await UserServices.addLikedSong(user?.uid, sid)).data;
      dispatch(setUser(response));
    } else {
    }
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
      } else if (localStorage.getItem("admin")) {
        dispatch(setAdmin(localStorage.getItem("admin")));
      }
      setIsLoading(false);
    };
    getUser();
  }, []);

  useEffect(() => {
    if (currentSong !== null) {
      audioRef.current?.play();
      setIsPlay(true);
    }
  }, [currentSong]);

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
        currentSong,
        setCurrentSong,
        setCurrentSongPlaying,
        isLoop,
        setIsLoop,
        addLikedSong,
        quote,
        signUpError,
        signInError,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStates = () => useContext(Context);

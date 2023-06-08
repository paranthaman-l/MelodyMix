/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser, logout, setUser } from "../Slice/UserSlice";
import UserServices from "../services/UserServices";
import { Storage } from "aws-amplify";
import { signUpQuotes, songs } from "../constants";
import { setAdmin } from "../Slice/AdminSlice";
import AdminUserServices from "../services/AdminUserServices";
import toast from 'react-hot-toast';

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
  const [signUpError, setSignUpError] = useState({});
  const [signInError, setSignInError] = useState({});
  const [signInFormUser, setSignInFormUser] = useState({
    email: "",
    password: "",
  });
  const [allUsers, setAllUsers] = useState([]);
  const audioRef = useRef(null);
  const [isPlay, setIsPlay] = useState(false);
  const [isLoop, setIsLoop] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [pagination, setPagination] = useState({
    pageSize: 5,
    offset: 0,
    field: "uid",
    sortDirection: "ASC",
  });
  const [totalPages, setTotalPages] = useState(
    allUsers.length / pagination.pageSize
  );

  const [currentSongs, setCurrentSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);

  const [loading, setIsLoading] = useState(false);

  const [updatePath, setUpdatePath] = useState(1);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  var quote;
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
      await UserServices.signUpUser(signUpFormUser)
        .then((response) => {
          dispatch(setUser(response.data));
          toast(`Welcome ${response?.data?.username}`)
          localStorage.setItem("user", response.data.uid);
        })
        .catch((err) => {
          console.log(err);
        });
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
        localStorage.setItem(
          "admin",
          JSON.stringify({
            aid: "paranthaman",
            username: "Paranthaman L",
          })
        );
        return;
      }
      const response = (
        await UserServices.signInUser(
          signInFormUser.email,
          signInFormUser.password
        )
      ).data;
      if (validateEmailAndPassword(response)) {
        await UserServices.getUser(response)
          .then((response) => {
            dispatch(setUser(response.data));
            toast.success(`Welcome ${response?.data?.username}`,{
              duration: 4000,
              position: 'top-center',})
            localStorage.setItem("user", response.data.uid);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        console.log(response);
      }
    }
  };

  const handleSignOut = (e) => {
    e.preventDefault();
    setCurrentSong(null);
    dispatch(logout());
    dispatch(setAdmin(null));
    setSignInFormUser({
      username: "",
      password: "",
    });
    localStorage.removeItem("user");
    localStorage.removeItem("admin");
    navigate("/home");
  };

  const handleProfileUpload = async (file) => {
    setIsLoading(true);
    await Storage.put(file.name, file)
      .then(async (response) => {
        await UserServices.updateProfile(user?.uid, `${response.key}`).then(
          (response1) => {
            dispatch(setUser(response1.data));
          }
        );
      })
      .catch((err) => {
        console.log(err);
      });
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
      await UserServices.addLikedSong(user?.uid, sid)
        .then((response) => {
          dispatch(setUser(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
    }
  };

  const nextSong = () => {
    const index = currentSongs.findIndex((x) => x.sid === currentSong.sid);
    if (isShuffle) {
      setCurrentSong(
        currentSongs[Math.floor(Math.random() * currentSongs.length)]
      );
    } else if (index === currentSongs.length - 1) {
      setCurrentSong(currentSongs[0]);
    } else {
      setCurrentSong(currentSongs[index + 1]);
    }
  };
  const prevSong = () => {
    const index = currentSongs.findIndex((x) => x.sid === currentSong.sid);
    if (isShuffle) {
      setCurrentSong(
        currentSongs[Math.floor(Math.random() * currentSongs.length)]
      );
    } else if (index === 0) {
      setCurrentSong(currentSongs[currentSongs.length - 1]);
    } else {
      setCurrentSong(currentSongs[index - 1]);
    }
  };

  const shuffleArray=(array)=> {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }
  //! Functions Declarations End ---------------------------------------------------------------------------------------------------------------------------------

  //! UseEffects Declarations
  useEffect(() => {
    const getUser = async () => {
      setIsLoading(true);
      if (localStorage.getItem("user")) {
        const userId = localStorage.getItem("user");
        await UserServices.getUser(userId)
          .then((response) => {
            dispatch(setUser(response.data));
          })
          .catch((error) => {
            console.log(error);
          });
      } else if (localStorage.getItem("admin")) {
        dispatch(setAdmin(JSON.parse(localStorage.getItem("admin"))));
      }
      setIsLoading(false);
    };
    getUser();
    quote = signUpQuotes[Math.floor(Math.random() * signUpQuotes.length)];
    const getAllSongs = async () => {
      await UserServices.getAllSongs()
        .then((response) => {
          setCurrentSongs(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getAllSongs();
  }, []);

  useEffect(() => {
    if (currentSong !== null) {
      audioRef.current?.play();
      setIsPlay(true);
    }
  }, [currentSong]);

  useEffect(() => {
    const getPagination = async () => {
      setIsLoading(true);
      setTimeout(async () => {
        await UserServices.userPagination(pagination)
          .then((response) => {
            setAllUsers(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
        await UserServices.getUsersCount()
          .then((countResponse) => {
            setTotalPages(Math.ceil(countResponse.data / pagination.pageSize));
          })
          .catch((error) => {
            console.log(error);
          });
        setIsLoading(false);
      }, 1500);
    };
    getPagination();
  }, [pagination]);

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
        allUsers,
        setAllUsers,
        pagination,
        setPagination,
        totalPages,
        setTotalPages,
        isShuffle,
        setIsShuffle,
        prevSong,
        currentSongs,
        nextSong,
        search,
        setSearch,
        shuffleArray,
        setCurrentSongs
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStates = () => useContext(Context);

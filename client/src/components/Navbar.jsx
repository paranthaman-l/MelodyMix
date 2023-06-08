import { useState, useEffect, useRef } from "react";
import { navLinks, menuLinks, homeMode } from "../constants";
import { FaChromecast } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";
import { IoSearchOutline } from "react-icons/io5";
import { BiDotsVerticalRounded, BiArrowBack } from "react-icons/bi";
import { MdOutlineClear } from "react-icons/md";
import List from "./List";
import { useStates } from "../context/useStates";
import Profile from "./Profile";
import { useSelector } from "react-redux";
import { getUser } from "../Slice/UserSlice";
import { SignIn } from "../pages";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { UploadStates } from "../context/songUploadContext";
import UserServices from "../services/UserServices";
import { getAdmin } from "../Slice/AdminSlice";
const Navbar = () => {
  const { handleNavigate, search, setSearch, setCurrentSongPlaying } =
    useStates();
  const { setIsSongUpload } = UploadStates();
  const user = useSelector(getUser);
  const admin = useSelector(getAdmin);
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [isShowSearch, setIsShowSearch] = useState(false);
  const [isShowProfile, setIsShowProfile] = useState(false);
  const [isScroll, setIsScrolled] = useState(false);
  const [isShowSignIn, setIsShowSignIn] = useState(false);
  const [isNavActive, setIsNavActive] = useState("home");
  const [searchSongs, setSearchSongs] = useState([]);
  const menuRef = useRef(null);
  const searchRef = useRef(null);
  const profileRef = useRef(null);
  const signUpRef = useRef(null);
  useEffect(() => {
    document.body.style.overflow = isShowSignIn ? "hidden" : "auto";
  }, [isShowSignIn]);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsShowMenu(false);
    }
    if (searchRef.current && !searchRef.current.contains(event.target))
      setIsShowSearch(false);

    if (profileRef.current && !profileRef.current.contains(event.target))
      setIsShowProfile(false);

    if (signUpRef.current && !signUpRef.current.contains(event.target))
      setIsShowSignIn(false);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  };
  const onScroll = () => {
    if (window.scrollY > 2) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
    return () => window.removeEventListener("scroll", onScroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    document.addEventListener("mousedown", handleClickOutside);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    const getBySearchValue = async () => {
      await UserServices.getBySearchValue(search)
        .then((response) => {
          console.log(response);
          setSearchSongs(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getBySearchValue();
  }, [search]);

  const handleSearchClick = () => {
    setIsShowSearch(!isShowSearch);
  };
  return (
    <div
      className={`navbar flex justify-between items-center w-full top-0 z-50 h-16 fixed px-3 duration-500 border-b 
      ${
        isScroll
          ? "bg-black border-half-black1"
          : isNavActive === "upgrade"
          ? "bg-black border-transparent"
          : "bg-transparent border-transparent"
      } `}
    >
      <div className="logo cursor-pointer">
        <span
          onClick={() => handleNavigate("/")}
          className="flex items-center justify-center text-2xl text-white font-bold"
        >
          <SiYoutubemusic className="text-green bg-white rounded-full mr-1 max-sm:text-3xl" />
          <p className="tracking-tighter font- max-md:text-xl">Melody Mix</p>
        </span>
      </div>
      <div className="navList flex w-8/12 max-xl:justify-end" ref={searchRef}>
        {isShowSearch && (
          <div className="absolute  bg-half-black1 mx-auto w-8/12 h-12 rounded flex duration-300 transition-all max-sm:w-screen max-sm:left-0 max-md:top-2 max-md:mx-3 mr-3">
            <span
              className="w-14 flex justify-center items-center text-half-black text-2xl cursor-pointer"
              onClick={() => setIsShowSearch(false)}
            >
              <BiArrowBack />
            </span>
            <input
              type="text"
              className="w-full outline-none bg-transparent text-white font-roboto font-semibold text-xl"
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            {search && (
              <span
                className="w-14 flex justify-center items-center text-half-black text-2xl cursor-pointer"
                onClick={() => setSearch("")}
              >
                <MdOutlineClear />
              </span>
            )}
            {search && (
              <div className="absolute text-white mt-14 rounded-sm min-h-[50px] bg-half-black1 w-full">
                <ul className="py-2 px-1 min-h-[100px]">
                  {searchSongs.map((song) => {
                    return (
                      <li
                        key={song.sid}
                        className="flex hover:bg-half-black2 p-1 rounded-md"
                      >
                        <img
                          className="w-16 h-16 rounded-md ml-2"
                          src={
                            `https://music-data-bucket.s3.ap-south-1.amazonaws.com/public/${song.thumnail}` ||
                            ""
                          }
                          alt=""
                        />
                        <div className="flex flex-col ml-10">
                          <p
                            onClick={() => {
                              setCurrentSongPlaying(song);
                              setSearch("");
                            }}
                            className="font-roboto font-semibold  hover:underline text-lg cursor-pointer"
                          >
                            {" "}
                            {song.title}
                          </p>
                          <p
                            className="text-gray-300 font-roboto hover:underline cursor-pointer"
                            onClick={() =>
                              handleNavigate(`/movie/${song?.movie?.mid}`)
                            }
                          >
                            {song?.movie?.movie}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        )}
        <div className="flex justify-center items-center lg:mx-auto">
          <ul className="flex items-center max-xl:justify-evenly w-full max-lg:fixed max-lg:bottom-0 max-sm:w-full pb-2 px-0  max-lg:bg-black max-lg:border-t-[1px] max:lg:border-opacity-10 max-lg:border-half-black2 left-0 lg:justify-evenly max-lg:items-center max-lg:mx-auto ">
            {navLinks.map((navLink) => (
              <li
                className={`text-xl font-semibold cursor-pointer mx-5 max-lg:mx-3 max-lg:text-lg md:mx-4 `}
                key={navLink.id}
                onClick={() => {
                  setIsNavActive(navLink.id);
                  handleNavigate(navLink.link);
                }}
              >
                <p
                  className={`font-roboto text-half-black tracking-wider py-2 duration-300 hover:text-white ${
                    isNavActive === navLink.id && "text-white"
                  } `}
                >
                  <span className="max-sm:visible max-lg:hidden">
                    {navLink.title}
                  </span>
                  <span className="lg:hidden text-2xl max-sm:text-3xl">
                    {navLink.icon}
                  </span>
                </p>
              </li>
            ))}
          </ul>
          <span
            className="text-xl font-semibold cursor-pointer mx-5 mb-1 flex  items-center group"
            onClick={handleSearchClick}
          >
            <IoSearchOutline className="text-half-black mr-4 text-2xl duration-150 group-hover:text-white max-md:mr-0" />
            <p className="font-roboto  text-half-black tracking-wider py-2 duration-300 group-hover:text-white max-sm:hidden">
              Search
            </p>
          </span>
        </div>
      </div>
      <div className="profile flex justify-center items-center text-white">
          {(user || admin) &&
            <span
            onClick={() => {
              setIsSongUpload(true);
              handleNavigate(`mychannel/${user?.uid}`);
            }}
            className="mx-2 p-2 text-2xl rounded-full cursor-pointer hover:bg-half-black1  max-lg:mx-1 max-lg:text-lg"
          >
            <AiOutlineCloudUpload />
          </span>
          }
        <span
          ref={menuRef}
          className="mx-2 mr-5 text-xl cursor-pointer  max-lg:mx-1 max-lg:text-lg max-md:hidden"
        >
          <BiDotsVerticalRounded
            className="hover:bg-half-black1 rounded-full text-2xl"
            onClick={() => setIsShowMenu(!isShowMenu)}
          />
          {isShowMenu && (
            <List
              lists={menuLinks}
              // eslint-disable-next-line react/style-prop-object
              style={"rounded-md w-[300px] right-16 mt-2"}
            />
          )}
        </span>
        {user === null ? (
          <>
            <div className="" ref={signUpRef}>
              <button
                onClick={() => setIsShowSignIn(!isShowSignIn)}
                className="px-3 py-1 text-sm bg-white rounded-2xl text-black font-semibold flex justify-center items-center ml-1 focus:bg-black focus:text-white focus:border-white border-2 outline-none"
              >
                Sign in
              </button>
              {isShowSignIn && <SignIn signUpRef={signUpRef} />}
            </div>
          </>
        ) : (
          <div className="w-9 h-9 rounded-full" ref={profileRef}>
            <img
              className={`w-full h-full cursor-pointer rounded-full ${
                isShowProfile && "bg-slate-500 rounded-2xl"
              }`}
              src={
                `https://music-data-bucket.s3.ap-south-1.amazonaws.com/public/${
                  user?.profile[user?.profile?.length - 1]
                }` || ""
              }
              alt=""
              onClick={() => setIsShowProfile(!isShowProfile)}
            />
            {isShowProfile && <Profile profileRef={profileRef} />}
          </div>
        )}
      </div>
    </div>
  );
};

export const HomeFilters = () => {
  const [isHomeModeActive, setIsHomeModeActive] = useState(-1);
  return (
    <div className="top-28 relative px-32 h-16 backdrop-opacity-10 max-md:mx-auto max-md:px-10 max-sm:px-2 max-md:top-20 font-roboto">
      <ul className="grid grid-cols-5 overflow-auto max-sm:grid-cols-4 max-sm:gap-2">
        {homeMode.map((mode, i) => {
          return (
            <li
              onClick={() => setIsHomeModeActive(i)}
              key={i}
              className={`flex justify-center items-center mx-[6px] rounded-md bg-gray-700 bg-opacity-60 backdrop-opacity-90 b text-sm text-white cursor-pointer hover:bg-half-black ${
                isHomeModeActive === i ? "bg-white text-black" : ""
              }`}
            >
              <span
                className={`px-[5px] py-2 w-full flex justify-center items-center rounded-lg ${
                  isHomeModeActive === i
                    ? "bg-white bg-opacity-80 text-black "
                    : ""
                }`}
              >
                {mode}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Navbar;

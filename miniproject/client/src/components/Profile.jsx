/* eslint-disable react/prop-types */
import { IoCameraOutline, IoCloseOutline } from "react-icons/io5";
import { FiEdit2, FiLogOut } from "react-icons/fi";
import { BiUser, BiCloudUpload, BiDotsVerticalRounded } from "react-icons/bi";
import { SiYoutubemusic } from "react-icons/si";
import { profileList } from "../constants";
import { useEffect, useRef, useState } from "react";
import { HiOutlineFaceSmile } from 'react-icons/hi2'
import {
  MdOutlineArrowBack,
  MdOutlinePeopleAlt,
  MdComputer,
  MdOutlineColorLens,
} from "react-icons/md";
import { GiEarthAmerica } from "react-icons/gi";
import { BsCamera, BsChevronRight, BsExclamationCircle } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useStates } from "../context/useStates";
import { useSelector } from "react-redux";
import { getUser } from "../Slice/UserSlice";
import { UploadStates } from "../context/songUploadContext";
const Profile = ({ profileRef }) => {
  const {
    handleSignOut,
    handleProfileUpload,
    loading,
    updatePath,
    setUpdatePath,
    handleNavigate,
  } = useStates();
  const { setIsSongUpload } = UploadStates();
  const user = useSelector(getUser);
  const [isUpdateProfile, setIsUpdateProfile] = useState(false);
  const [chooseOptions, setChooseOptions] = useState(1);

  const [selecedImg, setSelecedImg] = useState(null);
  const [img, setImg] = useState(null);
  const [dragging, setDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileInputChange = async (event) => {
    const selectedFile = event.target.files[0];
    setImg(selectedFile);
    const reader = new FileReader();
    reader.onload = (e) => {
      setSelecedImg(e.target.result);
    };
    reader.readAsDataURL(selectedFile);
   
  };
  const handleDragOver = (event) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragging(false);
    const file = event.dataTransfer.files[0];
    setImg(file);
    const reader = new FileReader();
    reader.onload = (e) => {
      setSelecedImg(e.target.result);
    };
    reader.readAsDataURL(file);
  };
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const openConfirmation = () => {
    setIsConfirmationOpen(true);
  };

  const closeConfirmation = () => {
    setIsConfirmationOpen(false);
  };
  useEffect(() => {
    document.body.style.overflow =
      isConfirmationOpen ? "hidden" : "auto";
  }, [isConfirmationOpen]);
  return (
    <>
      <div className="fled flex-col bg-black2 text-white w-[360px] max-sm:w-full  max-sm:right-0 absolute right-5 rounded-2xl mt-4 -z-0">
        {isConfirmationOpen && (
          <div className="fixed top-0 left-0 h-screen w-screen  bg-black bg-opacity-80 z-10 flex justify-center items-center">
            <div
              // ref={deleteRef}
              className={"h-56 w-96 rounded-lg bg-white text-black"}
            >
              <BsExclamationCircle className="text-red-700 text-2xl text-center w-full mt-4 mb-2" />
              <h2 className="font-semibold text-center text-lg">Sign Out</h2>
              <p className="text-center mt-4">
                Are you sure you want to sign out?
              </p>
              <div className="flex justify-end mt-7 mr-4">
                <button
                  onClick={handleSignOut}
                  className="text-red-700 px-2 py-1 mx-2"
                >
                  Sign out
                </button>
                <button onClick={closeConfirmation} className="mx-2 flex items-center">
                  No <HiOutlineFaceSmile className="text-yellow-700 mx-1" />
                </button>
              </div>
            </div>
          </div>
        )}
        <p className="text-[12px] tracking-wide flex justify-center items-center font-sans py-1">
          This account managed by - MelodyMix.in
        </p>
        <div className="flex flex-col w-[345px] max-sm:w-full bg-black1 m-auto  rounded-2xl p-4 ">
          <div className="flex  items-center">
            <div className="relative flex justify-start items-center cursor-pointer mr-3">
              <img
                className="w-16 h-16 relative rounded-full "
                src={
                  `${user?.profile[user?.profile?.length - 1]
                  }` || ""
                }
                alt=""
              />
              <IoCameraOutline
                onClick={() => setIsUpdateProfile(!isUpdateProfile)}
                className="absolute bottom-0 right-0 bg-black rounded-full border border-half-black p-[2px] text-xl m-[2px]"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="font-semibold uppercase text-base">
                {user?.username}
              </p>
              <p className="text-sm text-[#C4C7C5] ">{user?.email}</p>
            </div>
          </div>
          <span className="rounded-lg border-[1px] border-gray-300 w-7/12 flex justify-center ml-20 mt-3">
            <button className="p-1 hover:bg-[#373737] w-full rounded-lg">
              Manage your Account
            </button>
          </span>
        </div>
        <ul className="flex flex-col cursor-pointer mt-1 border-b-[2px] w-full border-half-black p-[2px] ">
          <li
            onClick={() => {
              handleNavigate(`/mychannel/${user?.uid}`);
            }}
            className="flex items-center w-full hover:bg-[#373737] p-[9px]"
          >
            <BiUser className="mx-7 text-2xl" />
            <p className="font-roboto ">Your Channel</p>
          </li>
          <li
            onClick={() => { handleNavigate(`/mychannel/${user?.uid}`); setIsSongUpload(true) }}
            className="flex items-center w-full hover:bg-[#373737] p-[9px]">
            <BiCloudUpload className="mx-7 text-2xl" />
            <p className="font-roboto ">Upload Music</p>
          </li>
          <li className="flex items-center w-full hover:bg-[#373737] p-[9px]">
            <SiYoutubemusic className="mx-7 text-2xl" />
            <p className="font-roboto ">Get Music Premium</p>
          </li>
          <li
            onClick={openConfirmation}
            className="flex items-center w-full hover:bg-[#373737] p-[9px]"
          >
            <FiLogOut className="mx-7 text-2xl" />
            <p className="font-roboto ">Sign out account</p>
          </li>
        </ul>
        <ul className="flex-col cursor-pointer mt-1 border-b-[2px] w-full border-half-black p-[2px] max-md:block hidden">
          {profileList.map((list, i) => {
            return (
              <li
                key={i}
                className="flex items-center w-full hover:bg-[#373737] p-[9px]"
              >
                <span className="mx-7 text-2xl">{list.icon}</span>
                <p className="font-roboto ">{list.title}</p>
              </li>
            );
          })}
        </ul>
        <div className="flex justify-center w-full items-center text-xs py-3">
          <button className="px-2 py-1 hover:bg-[#373737] rounded-lg">
            Privacy Policy
          </button>
          <span className="">•</span>
          <button className="px-2 py-1 hover:bg-[#373737] rounded-lg">
            Terms of Service
          </button>
        </div>
      </div>
      {isUpdateProfile && (
        <div className="h-screen flex justify-center items-center absolute bg-[#040405] left-0 top-0 w-full">
          <div
            className="bg-[#202124] flex-col duration-500 rounded-lg font-roboto"
            ref={profileRef}
          >
            {updatePath === 1 ? (
              <div className="flex flex-col justify-between items-center duration-500 text-2xl w-[400px] p-4 max-[450px]:w-full max-[450px]:h-full">
                <div className="w-full flex justify-between">
                  <span>
                    <IoCloseOutline
                      className="cursor-pointer text-3xl"
                      onClick={() => setIsUpdateProfile(false)}
                    />
                  </span>
                  <span>
                    <span className="select-none">Music </span>Account
                  </span>
                  <span className="cursor-pointer">
                    <BiDotsVerticalRounded />
                  </span>
                </div>
                <div className="text-lg flex flex-col w-full justify-start mx-7 mt-3">
                  <p>Profile picture</p>
                  <span className="text-[#C4C7C5] opacity-60 text-sm my-4 w-11/12 ">
                    A picture helps people recognize you and lets you know when
                    you’re signed in to your account
                  </span>
                  <button
                    onClick={() => setUpdatePath(2)}
                    className="w-full flex justify-between group p-4 border-y-[1px] border-half-black my-3 hover:bg-gray-300 hover:bg-opacity-10"
                  >
                    <span className="flex items-center text-[#C4C7C5]">
                      <GiEarthAmerica className="mx-3" />
                      <p className="text-base  group-hover:text-white">
                        Visible to Anyone
                      </p>
                    </span>
                    <span>
                      <BsChevronRight />
                    </span>
                  </button>
                </div>
                <div className="flex flex-col justify-center">
                  <img
                    onClick={() => setUpdatePath(3)}
                    className="w-8/12 mx-auto object-contain rounded-full mt-2"
                    src={
                      `${user?.profile[user?.profile?.length - 1]
                      }` || ""
                    }
                    alt=""
                  />
                  <div className="flex justify-between mt-6 text-base text-[#8ab4f8] px-8   ">
                    <button
                      onClick={() => setUpdatePath(3)}
                      className="flex justify-center items-center border-[1px] border-half-black  px-3 py-2 w-6/12 rounded-lg mr-1 hover:bg-[#373737]"
                    >
                      <FiEdit2 className="mx-1" /> Change
                    </button>
                    <button
                      onClick={() => setUpdatePath(4)}
                      className="flex justify-center items-center border-[1px] border-half-black px-3 py-2 w-6/12 rounded-lg ml-1 hover:bg-[#373737]"
                    >
                      <RiDeleteBin6Line className="mx-1" />
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ) : updatePath === 2 ? (
              <div className="flex flex-col justify-between items-center duration-500 text-2xl w-[540px] p-3 max-[450px]:w-full max-[450px]:h-full">
                <div className="w-full flex justify-between">
                  <span>
                    <MdOutlineArrowBack
                      className="cursor-pointer text-3xl"
                      onClick={() => setUpdatePath(1)}
                    />
                  </span>
                  <span className="cursor-pointer">
                    <BiDotsVerticalRounded />
                  </span>
                </div>
                <p className="text-xl w-full px-3 my-3">
                  Choose who can see your profile picture
                </p>
                <div className="w-full px-10">
                  <div className="my-3">
                    <span className="flex w-full justify-start">
                      <input
                        className="cursor-pointer "
                        type="radio"
                        name="visibility"
                        id=""
                        checked
                      />
                      <GiEarthAmerica className="mx-3" />
                      <span className="text-lg">Anyone</span>
                    </span>
                    <p className="text-sm ml-7 py-2">
                      Anyone can see this info if they have your contact info or
                      view content you create in Music services.{" "}
                      <span className="text-[#8ab4f8] cursor-pointer">
                        Learn more
                      </span>
                    </p>
                  </div>
                  <div className="">
                    <span className="flex w-full justify-start">
                      <input
                        className="cursor-pointer"
                        type="radio"
                        name="visibility"
                        id=""
                      />
                      <MdOutlinePeopleAlt className="mx-3" />
                      <span className="text-lg">People you interact with</span>
                    </span>
                    <p className="text-sm ml-7 py-2">
                      This info is visible to people you interact with in Music
                      services. For example, if you share an album in Music
                      Photos or chat in Music Chat.{" "}
                      <span className="text-[#8ab4f8] cursor-pointer">
                        Learn more
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex justify-end w-full px-5 my-2">
                  <button
                    onClick={() => setUpdatePath(1)}
                    className="cursor-pointer text-[#8ab4f8] hover:bg-half-black1 text-base font-roboto p-1 rounded-lg px-2 mx-4"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => setUpdatePath(1)}
                    className="cursor-pointer bg-[#8ab4f8] hover:bg-opacity-90 text-black text-base font-roboto p-1 rounded-lg px-5 py-1"
                  >
                    Save
                  </button>
                </div>
              </div>
            ) : updatePath === 3 ? (
              <div className="flex flex-col justify-between items-center duration-500 text-2xl w-[600px] max-sx:w-full">
                <div className="w-full flex justify-between p-2">
                  <span>
                    <MdOutlineArrowBack
                      className="cursor-pointer text-3xl"
                      onClick={() => setUpdatePath(1)}
                    />
                  </span>
                  <span className="text-xl">Change profile picture</span>
                  <span className="cursor-pointer">
                    <BiDotsVerticalRounded />
                  </span>
                </div>
                <div className="w-full flex justify-between items-center text-[#C4C7C5] border-b-[1px] border-half-black ">
                  <div
                    onClick={() => setChooseOptions(1)}
                    className={`${chooseOptions === 1 && "text-[#8ab4f8]"
                      } w-1/2 flex flex-col  items-center cursor-pointer hover:bg-gray-500 h-full hover:bg-opacity-20 group py-2`}
                  >
                    <MdOutlineColorLens className="group-hover:text-white" />
                    <p className="text-base group-hover:text-white py-1 ">
                      Past profile pictures
                    </p>
                  </div>
                  <div
                    onClick={() => setChooseOptions(2)}
                    className={`${chooseOptions === 2 && "text-[#8ab4f8]"
                      } w-1/2 flex flex-col  items-center cursor-pointer hover:bg-gray-500 h-full hover:bg-opacity-20 group py-2`}
                  >
                    <MdComputer className="group-hover:text-white" />
                    <p className="text-base group-hover:text-white py-1">
                      From Computer
                    </p>
                  </div>
                </div>
                {chooseOptions === 1 ? (
                  <div className="h-[400px] grid grid-cols-5 gap-2 pt-5 overflow-y-scroll scrollbar-thin">
                    {user?.profile.map((profile, i) => {
                      return (
                        <div
                          key={i}
                          className={`w-24 h-24 mx-3 ${i === user?.profile?.length - 1 && "hidden"
                            }`}
                        >
                          <img
                            className="w-full h-full rounded-full"
                            src={`${profile}`}
                            alt=""
                          />
                        </div>
                      );
                    })}
                  </div>
                ) : !selecedImg ? (
                  <div
                    className="min-h-[400px] flex flex-col justify-center items-center m-4 select-none"
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    style={{
                      border: `1px dashed ${dragging ? "green" : "transparent"
                        }`,
                      padding: "20px",
                      textAlign: "center",
                    }}
                  >
                    <img
                      className="w-44 h-44 mb-6 select-none cursor-not-allowed"
                      src="https://www.gstatic.com/identity/boq/profilepicturepicker/photo_silhouette_e02a5f5deb3ffc173119a01bc9575490.png"
                      alt=""
                    />
                    <p>Drag photo here</p>
                    <p className="text-base">or</p>
                    <div className="flex justify-between mt-6 text-sm text-[#8ab4f8] px-8   ">
                      <input
                        id="fileInput"
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileInputChange}
                        style={{ display: "none" }}
                      />
                      <button
                        onClick={() => fileInputRef.current.click()}
                        className="flex justify-center items-center border-[1px] border-half-black  px-3 py-1  rounded-lg mr-1 hover:bg-[#373737]"
                      >
                        <MdComputer className="mx-1 text-2xl" /> Upload From
                        Computer
                      </button>
                      <button className="flex justify-center items-center border-[1px] border-half-black px-3 py-1 rounded-lg ml-1 hover:bg-[#373737]">
                        <BsCamera className="mx-1 font-bold text-2xl" />
                        Take a picture
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="min-h-[400px]">
                    <img
                      className="h-96 w-96 m-3"
                      src={selecedImg}
                      alt="Selected Img"
                    />
                    <div className="flex justify-center items-center my-2">
                      <button
                        onClick={() => setSelecedImg(null)}
                        className="p-1 bg-pink-700 rounded-md text-base px-3 mx-2"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => {
                          handleProfileUpload(img);
                        }}
                        className="p-1 bg-green rounded-md text-base px-3 mx-2 relative min-w-[80px] min-h-[35px]"
                      >
                        {loading && (
                          <div className="flex justify-center mx-2 items-center top-0 left-0 absolute w-full h-full bg-opacity-40 ">
                            <svg
                              class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                class="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                stroke-width="4"
                              ></circle>
                              <path
                                class="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                          </div>
                        )}
                        <p className={`${loading && "hidden"}`}> Upload</p>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;

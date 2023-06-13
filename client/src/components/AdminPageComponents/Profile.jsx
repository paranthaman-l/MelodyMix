import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { getAdmin } from '../../Slice/AdminSlice';
import { FiLogOut } from 'react-icons/fi';
import { BiCloudUpload } from 'react-icons/bi';
import { profileList } from '../../constants';
import { useStates } from '../../context/useStates';
import { HiOutlineFaceSmile } from 'react-icons/hi2';
import { BsExclamationCircle } from 'react-icons/bs';

const Profile = () => {
    const admin = useSelector(getAdmin)
    const {handleSignOut}  =useStates();
  const [isConfirmationOpen,setIsConfirmationOpen] = useState(false);

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
                No <HiOutlineFaceSmile className="text-yellow-700 mx-1"/>
              </button>
            </div>
          </div>
        </div>
      )}
    <p className="text-[12px] tracking-wide flex justify-center items-center font-sans py-1">
      This account managed by - Paranthaman L
    </p>
    <div className="flex flex-col w-[345px] max-sm:w-full bg-black1 m-auto  rounded-2xl p-4 ">
      <div className="flex  items-center">
        <div className="relative flex justify-start items-center cursor-pointer mr-3">
          <img
            className="w-16 h-16 relative rounded-full "
            src={"https://res.cloudinary.com/dnzd8rvd4/image/upload/v1684648965/IMG_20230515_062105_955_kyromi.jpg"}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="font-semibold uppercase text-base">
            {admin?.username}
          </p>
          <p className="text-sm text-[#C4C7C5] ">Admin Control</p>
        </div>
      </div>
      <span className="rounded-lg border-[1px] border-gray-300 w-7/12 flex justify-center ml-20 mt-3">
        <button className="p-1 hover:bg-[#373737] w-full rounded-lg">
          Manage Account
        </button>
      </span>
    </div>
    <ul className="flex flex-col cursor-pointer mt-1 border-b-[2px] w-full border-half-black p-[2px] ">
      <li className="flex items-center w-full hover:bg-[#373737] p-[9px]">
        <BiCloudUpload className="mx-7 text-2xl" />
        <p className="font-roboto ">Upload Music</p>
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
  )
}

export default Profile
import React, { useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { MdFileUpload, MdOutlineFeedback } from "react-icons/md";
import { UploadStates } from "../../context/songUploadContext";
import universalParse from "id3-parser/lib/universal";

const Upload = () => {
  const {
    songSrc,
    setSongSrc,
    isSongUpload,
    setIsSongUpload,
    songDetails,
    setSongDetails,
    songImg,
    setSongImg,
  } = UploadStates();

  const fileRef = useRef(null);
  const [file, setFile] = useState(null);
  const handleSongFileUpload = (event) => {
    const file = event.target.files[0];
    setFile(file);
    setSongSrc(URL.createObjectURL(file));
    universalParse(file).then((tag) => {
      setSongDetails(tag);
      const uint8Array = new Uint8Array(tag?.image?.data);
      const songImg = new File([uint8Array], "image.png", {
        type: "image/png",
      });
      const reader = new FileReader();
      reader.onload = (e) => {
        setSongImg(e.target.result);
      };
      reader.readAsDataURL(songImg);
    });
  };
  const handlePrint = (event) => {
    console.log(event.target.textContent);
  };
  return (
    <>
      {isSongUpload && (
        <div className="duration-700 absolute flex justify-center h-full items-center top-0 left-0 min-w-full min-h-screen bg-black bg-opacity-40">
          <div className="flex flex-col bg-songUpload rounded-md mx-auto w-8/12 h-5/6 max-lg:w-full">
            <div className="flex justify-between w-full p-4 text-xl text-white h-fit font-semibold font-roboto border-b-[0.5px] border-[#3e3e3e] ">
              <p>
                {songDetails?.title?.split("-")[0] ||
                  file?.name.split("-")[0] ||
                  "Upload Song"}
              </p>
              <p className="flex text-2xl  text-[#aaaaaa]">
                <MdOutlineFeedback
                  onClick={() => {
                    setSongDetails(null);
                    setFile(null);
                  }}
                  className="cursor-pointer  mx-4 hover:text-white"
                />
                <IoMdClose
                  className="cursor-pointer hover:text-white"
                  onClick={() => {
                    setIsSongUpload(false);
                    setSongDetails(null);
                    setFile(null);
                  }}
                />
              </p>
            </div>
            {!songDetails ? (
              <>
                <div className="flex flex-col h-full justify-center items-center">
                  <span className="flex justify-center items-center bg-[#1f1f1f] h-[138px] w-[138px] rounded-full mb-4">
                    <MdFileUpload className="text-[#909090] text-[80px]" />
                  </span>
                  <p className="text-white text-base font-semibold">
                    Drag and drop video files to upload
                  </p>
                  <p className="text-sm text-[#aaaaaa]">
                    Your videos will be private until you publish them.
                  </p>
                  <input
                    type="file"
                    name=""
                    id=""
                    ref={fileRef}
                    accept="audio/*"
                    onChange={handleSongFileUpload}
                    style={{ display: "none" }}
                  />
                  <button
                    onClick={() => fileRef.current.click()}
                    className="bg-[#3ea6ff] uppercase font-roboto px-3 py-2 rounded-sm mt-5 text-black font-semibold tracking-wider"
                  >
                    Select File
                  </button>
                </div>
                <div className="flex justify-center">
                  <p className="text-xs w-[80%] text-center py-4">
                    By submitting your videos to Music, you acknowledge that you
                    agree to Music's{" "}
                    <span className="text-[#3ea6ff]">Terms of Service</span> and
                    <span className="text-[#3ea6ff]">
                      Community Guidelines.
                    </span>{" "}
                    Please be sure not to violate others' copyright or privacy
                    rights. <span className="text-[#3ea6ff]">Learn more</span>
                  </p>
                </div>
              </>
            ) : (
              <div className="flex flex-col">
                <div className="h-20"></div>
                <div className="flex justify-between">
                  <div className="w-8/12 flex flex-col">
                    <p className="font-roboto font-semibold tracking-wide text-2xl">
                      Details
                    </p>
                    <div className="">
                      <p>Title (required)</p>
                      <div
                        className=""
                        slot="input"
                        onInput={handlePrint}
                        contentEditable="true"
                      >
                        {songDetails?.title?.split("-")[0] ||
                          file?.name.split("-")[0]}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center ">
                    <img
                      className="w-48 h-48 rounded-sm m-2"
                      src={songImg}
                      alt=""
                    />
                    <audio src={songSrc} className="" controls></audio>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Upload;

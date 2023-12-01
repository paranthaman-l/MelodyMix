import React, { useEffect, useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { MdFileUpload, MdOutlineFeedback } from "react-icons/md";
import { UploadStates } from "../../context/songUploadContext";
import universalParse from "id3-parser/lib/universal";
import UserServices from "../../services/UserServices";
import { useSelector } from "react-redux";
import { getUser } from "../../Slice/UserSlice";
import Select from "react-dropdown-select";
import { moodAndGenre } from "../../constants";
const Upload = () => {
  const user = useSelector(getUser);
  const {
    songSrc,
    setSongSrc,
    isSongUpload,
    setIsSongUpload,
    songDetails,
    setSongDetails,
    songImg,
    setSongImg,
    song,
    setSong,
    movieOptions,
    setLoading,
    handleUploadSongImage,
    handleUploadSong,
    sid,
    setSid,
    loading
  } = UploadStates();
    const fileRef = useRef(null);
  const audioRef = useRef(null);
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
  useEffect(() => {
    setSong({
      ...song,
      title:
        songDetails?.title?.split("-")[0] ||
        file?.name.split("-")[0] ||
        "Upload Song",
      singers: songDetails?.artist?.split("-")[0].split(","),
      lyricist: songDetails?.writer?.split("-")[0],
      movie: {
        ...song.movie,
        movie: songDetails?.album?.split("-")[0],
        year: songDetails?.year?.split("-")[0],
        music: songDetails?.composer?.split("-")[0],
        movieimg: "",
      },
      length: `${Math.floor(audioRef?.current?.duration / 60)}:${Math.floor(
        audioRef?.current?.duration % 60
      )}`,
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [file?.name, songDetails]);

  const handleChange = (e) => {
    console.log(song);
    const { name, value } = e.target;
    setSong({
      ...song,
      [name]: value.split(",").length === 1 ? value : value.split(","),
    });
  };
  const handleChangeMovieDetails = (e) => {
    const { name, value } = e.target;
    setSong({
      ...song,
      movie: {
        ...song.movie,
        [name]: value.split(",").length === 1 ? value : value.split(","),
      },
    });
    console.log(song);
  };
  const songUpload = async () => {
    var moveAddResponse = null;
    var songAddResponse = null;
    if (
      song.movie?.mid === undefined ||
      song.movie?.mid === null ||
      song.movie?.mid === ""
    ) {
      moveAddResponse = await UserServices.uploadMovie(song.movie);
      songAddResponse = await UserServices.uploadSong(
        song,
        user?.uid,
        moveAddResponse?.data
      );
    } else {
      songAddResponse = await UserServices.uploadSong(
        song,
        user?.uid,
        song?.movie?.mid
      );
    }
    setSid(songAddResponse.data);
  };

  const uploadSongAndImage = async () => {
    setLoading(true);
    const uint8Array = new Uint8Array(songDetails?.image?.data);
    handleUploadSongImage(uint8Array);
    handleUploadSong(file);
  };
  return (
    <>
      {isSongUpload && (
        <div className="z-50 duration-700 fixed flex justify-center h-full items-center top-0 left-0 min-w-full min-h-screen bg-black bg-opacity-40">
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
                    </span>
                    Please be sure not to violate others' copyright or privacy
                    rights. <span className="text-[#3ea6ff]">Learn more</span>
                  </p>
                </div>
              </>
            ) : (
              <div className="flex flex-col max-w-full scrollbar scrollbar-none overflow-y-scroll overflow-x-scroll">
                <div className="h-5"></div>
                <div className="flex justify-between">
                  <div className="flex flex-col w-full">
                    <div className="w-8/12 flex justify-between mx-10">
                      <div className="ml-10">
                        <p className="font-roboto font-semibold tracking-wide text-2xl">
                          Details
                        </p>
                        <div className="mx-6 flex flex-col">
                          <label htmlFor="title" className="flex flex-col p-1">
                            <span className="font-poppins font-semibold tracking-wider">
                              Title
                            </span>
                            <input
                              type="text"
                              name="title"
                              className="bg-transparent mt-1 form-input outline-none border-[1px] border-[#d6d6d6] w-80 rounded-lg text-lg  font-roboto upload__input_field py-1 "
                              value={song?.title}
                              onChange={handleChange}
                            />
                          </label>
                          <label htmlFor="title" className="flex flex-col p-1">
                            <span className="font-poppins font-semibold tracking-wider">
                              Singers
                            </span>
                            <input
                      
                              type="text"
                              name="singers"
                              onChange={handleChange}
                              className="bg-transparent mt-1 form-input outline-none border-[1px] border-[#d6d6d6] w-80 rounded-lg text-lg  font-roboto upload__input_field py-1 "
                              value={song?.singers || ""}
                            />
                          </label>
                          <label htmlFor="title" className="flex flex-col p-1">
                            <span className="font-poppins font-semibold tracking-wider">
                              Writer
                            </span>
                            <input
                      
                              type="text"
                              name="lyricist"
                              className="bg-transparent mt-1 form-input outline-none border-[1px] border-[#d6d6d6] w-80 rounded-lg text-lg  font-roboto upload__input_field py-1 "
                              value={song?.lyricist || ""}
                              onChange={handleChange}
                            />
                          </label>
                        </div>
                      </div>
                      <div className="flex flex-col items-center mx-10 h-fit">
                        <img
                          className="w-48 h-48 rounded-sm m-2"
                          src={songImg}
                          alt=""
                        />
                        <audio
                          src={songSrc}
                          ref={audioRef}
                          className=""
                          controls
                        ></audio>
                      </div>
                    </div>
                    <div className="w-full px-10">
                      <p className="font-roboto font-semibold tracking-wide text-xl mt-4">
                        Other Informations
                      </p>
                      <p className="font-roboto mx-4 font-semibold tracking-wide text-xl mt-4">
                        Movie Details
                      </p>
                      <div className="w-full grid grid-cols-2">
                        <label
                          htmlFor="title"
                          className="flex flex-col p-1 w-80"
                        >
                          <span className="font-poppins font-semibold tracking-wider">
                            Movie Name
                          </span>
                          <input
                    
                            type="text"
                            name="movie"
                            className="bg-transparent mt-1 form-input outline-none border-[1px] border-[#d6d6d6] w-80 rounded-lg text-lg  font-roboto upload__input_field py-1 "
                            value={song?.movie?.movie || ""}
                            onChange={handleChangeMovieDetails}
                          />
                          <Select
                            options={movieOptions}
                            color="rgb(41 220 94)"
                            dropdownPosition="auto"
                            labelField="movie"
                            valueField="mid"
                            searchBy="movie"
                            className="text-black w-full  h-2 my-1 ml-1"
                            placeholder="Choose from DB"
                            onChange={(value) => {
                              setSong({
                                ...song,
                                movie: {
                                  ...song.movie,
                                  mid: value[0]?.mid,
                                  movie: value[0]?.movie,
                                  year: value[0]?.year,
                                  music: value[0]?.music,
                                },
                              });
                            }}
                          />
                        </label>
                        <label htmlFor="title" className="flex flex-col p-1">
                          <span className="font-poppins font-semibold tracking-wider">
                            Music
                          </span>
                          <input
                    
                            type="text"
                            name="music"
                            className="bg-transparent mt-1 form-input outline-none border-[1px] border-[#d6d6d6] w-80 rounded-lg text-lg  font-roboto upload__input_field py-1 "
                            value={song?.movie?.music || ""}
                            onChange={handleChangeMovieDetails}
                          />
                        </label>
                        <label htmlFor="title" className="flex flex-col p-1">
                          <span className="font-poppins font-semibold tracking-wider">
                            Year
                          </span>
                          <input
                    
                            type="text"
                            name="year"
                            className="bg-transparent mt-1 form-input outline-none border-[1px] border-[#d6d6d6] w-80 rounded-lg text-lg  font-roboto upload__input_field py-1 "
                            value={song?.movie?.year || ""}
                            onChange={handleChangeMovieDetails}
                          />
                        </label>
                        <label htmlFor="title" className="flex flex-col p-1">
                          <span className="font-poppins font-semibold tracking-wider">
                            Length
                          </span>
                          <input
                    
                            type="text"
                            name="length"
                            className="bg-transparent mt-1 form-input outline-none border-[1px] border-[#d6d6d6] w-80 rounded-lg text-lg  font-roboto upload__input_field py-1 "
                            value={song?.length || ""}
                            onChange={handleChange}
                          />
                        </label>
                      </div>
                      <div className="m-3">
                        <label htmlFor="" className="flex items-center">
                          <input
                    
                            type="checkbox"
                            className="w-5 h-5 mx-2"
                            name="ispremium"
                            id=""
                          />
                          <span className="font-poppins text-xl">Premium</span>
                        </label>
                      </div>
                      <div className="">
                        <span className="font-poppins font-semibold tracking-wider mb-2">
                          Mood and Genre
                        </span>
                        <Select
                          options={moodAndGenre}
                          color="rgb(41 220 94)"
                          dropdownPosition="auto"
                          valueField="value"
                          labelField="value"
                          searchBy="value"
                          multi
                          className="text-black  w-1/2 mb-3"
                          placeholder="Mood and Genre"
                          clearable
                          onChange={(values) => {
                            setSong({
                              ...song,
                              mood: values?.map((mood) => mood.value),
                            });
                            console.log(values);
                          }}
                        />
                      </div>
                      <div className="flex justify-end pb-3">
                        {!sid ? (
                          <button
                            className="py-1 px-3 bg-white rounded-lg text-black font-roboto font-semibold"
                            onClick={songUpload}
                          >
                            Next
                          </button>
                        ) : (
                          <button
                            className="py-1 px-3 bg-white rounded-lg text-black font-roboto font-semibold"
                            onClick={uploadSongAndImage}
                          >
                            {loading && (
                          <div className="flex justify-center mx-2 items-center top-0 left-0 absolute w-full h-full bg-opacity-40 ">
                            <svg
                              class="animate-spin -ml-1 mr-3 h-10 w-10 text-green"
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

                            Upload
                          </button>
                        )}
                      </div>
                    </div>
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

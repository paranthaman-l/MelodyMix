import React from "react";
import { UploadStates } from "../../context/songUploadContext";
import { MdOutlineFeedback } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import Select from "react-dropdown-select";
import { moodAndGenre } from "../../constants";
import { useStates } from "../../context/useStates";
import UserServices from "../../services/UserServices";
import { getUser, setUser } from "../../Slice/UserSlice";
import { useDispatch, useSelector } from "react-redux";

const EditSong = () => {
  const { songDetails, song, setIsSongUpdate, setSong, setSongDetails } =
    UploadStates();
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  const { movieOption } = useStates();
  const audioRef = null;
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
  const handleUpdate = async () => {
    const response = await UserServices.updateSong(song?.sid, song);
    console.log(response.data);
    const res = await UserServices.getUser(user?.uid);
    dispatch(setUser(res.data));
    setIsSongUpdate(false);
  };
  return (
    <>
      <div className=" z-50 duration-700 absolute flex justify-center h-full items-center top-0 left-0 min-w-full min-h-screen bg-black bg-opacity-40">
        <div className="flex flex-col absolute bg-songUpload rounded-md mx-auto w-8/12 h-5/6 max-lg:w-full">
          <div className="flex justify-between w-full p-4 text-xl text-white h-fit font-semibold font-roboto border-b-[0.5px] border-[#3e3e3e] ">
            <p>{songDetails?.title?.split("-")[0] || "EditSong"}</p>
            <p className="flex text-2xl  text-[#aaaaaa]">
              <MdOutlineFeedback
                onClick={() => {
                  setSongDetails(null);
                  setSong(null);
                  setIsSongUpdate(false);
                }}
                className="cursor-pointer  mx-4 hover:text-white"
              />
              <IoMdClose
                className="cursor-pointer hover:text-white"
                onClick={() => {
                  setIsSongUpdate(false);
                  setSongDetails(null);
                }}
              />
            </p>
          </div>
          <div className="flex flex-col max-w-full scrollbar scrollbar-none overflow-y-scroll overflow-x-scroll">
            <div className="h-5"></div>
            <div className="flex justify-between">
              <div className="flex flex-col w-full">
                <div className="w-8/12 flex justify-between mx-10">
                  <div className="px-5">
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
                          className="bg-transparent mt-1 outline-none border-[1px] border-[#d6d6d6] w-80 rounded-lg text-lg tracking-wider form-input indent-0  font-roboto upload__input_field py-1 "
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
                          className="bg-transparent mt-1 outline-none border-[1px] border-[#d6d6d6] w-80 rounded-lg text-lg tracking-wider form-input indent-0  font-roboto upload__input_field py-1 "
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
                          className="bg-transparent mt-1 outline-none border-[1px] border-[#d6d6d6] w-80 rounded-lg text-lg tracking-wider form-input indent-0  font-roboto upload__input_field py-1 "
                          value={song?.lyricist || ""}
                          onChange={handleChange}
                        />
                      </label>
                    </div>
                  </div>
                  <div className="flex flex-col items-center mx-10 h-fit">
                    <img
                      className="w-48 h-48 rounded-sm m-2"
                      src={`https://music-data-bucket.s3.ap-south-1.amazonaws.com/public/${song.thumnail}`}
                      alt=""
                    />
                    <audio
                      src={`https://music-data-bucket.s3.ap-south-1.amazonaws.com/public/${song.audio}`}
                      ref={audioRef}
                      className=""
                      controls
                    ></audio>
                  </div>
                </div>
                <div className="w-full px-5 pl-14">
                  <p className="font-roboto font-semibold tracking-wide text-xl mt-4">
                    Other Informations
                  </p>
                  <p className="font-roboto mx-4 font-semibold tracking-wide text-xl mt-4">
                    Movie Details
                  </p>
                  <div className="w-full grid grid-cols-2">
                    <label htmlFor="title" className="flex flex-col p-1 w-80">
                      <span className="font-poppins font-semibold tracking-wider">
                        Movie Name
                      </span>
                      <input
                        type="text"
                        name="movie"
                        className="bg-transparent mt-1 outline-none border-[1px] border-[#d6d6d6] w-80 rounded-lg text-lg tracking-wider form-input indent-0  font-roboto upload__input_field py-1 "
                        value={song?.movie?.movie || ""}
                        onChange={handleChangeMovieDetails}
                      />
                      <Select
                        options={movieOption}
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
                        className="bg-transparent mt-1 outline-none border-[1px] border-[#d6d6d6] w-80 rounded-lg text-lg tracking-wider form-input indent-0  font-roboto upload__input_field py-1 "
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
                        className="bg-transparent mt-1 outline-none border-[1px] border-[#d6d6d6] w-80 rounded-lg text-lg tracking-wider form-input indent-0  font-roboto upload__input_field py-1 "
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
                        className="bg-transparent mt-1 outline-none border-[1px] border-[#d6d6d6] w-80 rounded-lg text-lg tracking-wider form-input indent-0  font-roboto upload__input_field py-1 "
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
                      className="text-black  mb-3"
                      placeholder="Mood and Genre"
                      clearable
                      values={song.mood.map((mood, i) => ({
                        id: i,
                        value: mood,
                      }))}
                      onChange={(values) => {
                        setSong({
                          ...song,
                          mood: values.map((mood) => mood.value),
                        });
                        console.log(values);
                      }}
                    />
                  </div>
                  <div className="flex justify-end pb-3">
                    <button
                      className="py-1 px-3 bg-white rounded-lg text-black font-roboto font-semibold"
                      onClick={handleUpdate}
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditSong;

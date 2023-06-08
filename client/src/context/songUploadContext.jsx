import { createContext, useContext, useEffect, useState } from "react";
import UserServices from "../services/UserServices";
import { Storage } from "aws-amplify";
import { useStates } from "./useStates";

const Context = createContext();

export const UploadState = ({ children }) => {
  const [isSongUpload, setIsSongUpload] = useState(false);
  const [isSongUpdate, setIsSongUpdate] = useState(false);
  const [songSrc, setSongSrc] = useState(null);
  const [songDetails, setSongDetails] = useState(null);
  const [songImg, setSongImg] = useState(null);
  const [movieOptions, setMovieOptions] = useState([]);
  const [sid, setSid] = useState(null);
  const [song, setSong] = useState({
    title: "",
    audio: "",
    thumnail: "",
    length: "",
    mood: ["Hiii"],
    ispremium: false,
    movie: {
      mid: "",
      movie: "",
      movieimg: "",
      music: "",
      year: "",
    },
    lyricist: "",
    singers: [],
    views: 0,
    likes: 0,
  });

  const handleUploadSongImage = async (file) => {
    await Storage.put(Date.now(), file, { contentType: "image/png" })
      .then(async (response) => {
        setSong({
          ...song,
          thumnail: response.key.toString(),
          movie: { ...song.movie, movieimg: response.key.toString() },
        });
        console.log(sid);
        UserServices.addImage(sid, response.key);
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleUploadSong = async (file) => {
    await Storage.put(Date.now() + file.name, file)
      .then(async (response) => {
        setSong({ ...song, audio: response.key });
        UserServices.addSongUrl(sid, response.key);
      })
      .catch((err) => {
        console.log(err);
      });

  };
  useEffect(() => {
    const getMovieOptions = async () => {
      await UserServices.getAllMovie()
        .then((response) => {
          setMovieOptions(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getMovieOptions();
  }, []);

  return (
    <Context.Provider
      value={{
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
        setMovieOptions,
        handleUploadSongImage,
        handleUploadSong,
        sid,
        setSid,
        isSongUpdate,
        setIsSongUpdate,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export const UploadStates = () => useContext(Context);

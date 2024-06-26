import { createContext, useContext, useEffect, useState } from "react";
import UserServices from "../services/UserServices";
import { Storage } from "aws-amplify";
import { getUser, setUser } from "../Slice/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";

const Context = createContext();

export const UploadState = ({ children }) => {
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  const [isSongUpload, setIsSongUpload] = useState(false);
  const [isSongUpdate, setIsSongUpdate] = useState(false);
  const [songSrc, setSongSrc] = useState(null);
  const [songDetails, setSongDetails] = useState(null);
  const [songImg, setSongImg] = useState(null);
  const [movieOptions, setMovieOptions] = useState([]);
  const [sid, setSid] = useState(null);
  const [loading, setLoading] = useState(false);
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
    // await Storage.put(Date.now(), file, { contentType: "image/png" })
    //   .then(async (response) => {
    //     setSong({
    //       ...song,
    //       thumnail: response.key.toString(),
    //       movie: { ...song.movie, movieimg: response.key.toString() },
    //     });
    //     UserServices.addImage(sid, response.key);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    const selectedImage = file;
    if (selectedImage) {
      const imageData = new FormData();
      imageData.append("file", selectedImage);
      imageData.append("upload_preset", "melodymix");
      try {
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/dnzd8rvd4/upload`,
          {
            method: "POST",
            body: imageData,
          }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data.secure_url);
        setSong({
          ...song,
          thumnail: data.secure_url,
          movie: { ...song.movie, movieimg: data.secure_url },
        });
        UserServices.addImage(sid, data.secure_url);
      } catch (error) {
        console.error("Error uploading image to Cloudinary:", error);
      }
    }
  };
  const handleUploadSong = async (file) => {
    // await Storage.put(Date.now() + file.name, file)
    //   .then(async (response) => {
    // setSong({ ...song, audio: response.key });
    // await UserServices.addSongUrl(sid, response.key).then(async (res) => {
    //   await UserServices.getUser(user?.uid).then((response1) => {
    //     setIsSongUpload(false);
    //     setLoading(false);
    //     dispatch(setUser(response1.data));
    //     toast.success("Song Upload Success", { position: "top-right" });
    //   });
    // })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    //   });
    const selected = file;
    if (selected) {
      const song = new FormData();
      song.append("file", selected);
      song.append("upload_preset", "melodymix");
      try {
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/dnzd8rvd4/upload`,
          {
            method: "POST",
            body: song,
          }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data.secure_url);
        setSong({ ...song, audio: data.secure_url });
        await UserServices.addSongUrl(sid, data.secure_url).then(async (res) => {
          await UserServices.getUser(user?.uid).then((response1) => {
            setIsSongUpload(false);
            setLoading(false);
            dispatch(setUser(response1.data));
            toast.success("Song Upload Success", { position: "top-right" });
          });
        })
          .catch((err) => {
            console.log(err);
          });
      } catch (error) {
        console.error("Error uploading image to Cloudinary:", error);
      }
    }
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
        loading,
        setLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export const UploadStates = () => useContext(Context);

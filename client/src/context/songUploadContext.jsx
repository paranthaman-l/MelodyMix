import { createContext, useContext, useState } from "react";

const Context = createContext();

export const UploadState = ({ children }) => {
  const [isSongUpload, setIsSongUpload] = useState(false);
  const [songSrc, setSongSrc] = useState(null);
  const [songDetails, setSongDetails] = useState(null);
  const [songImg, setSongImg] = useState(null);

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
      }}
    >
      {children}
    </Context.Provider>
  );
};
export const UploadStates = () => useContext(Context);

import React from "react";
import { ChannelTop } from "../../components";
import { UploadStates } from "../../context/songUploadContext";
import Upload from "../../components/UploadSong.jsx/Upload";

const Channel = () => {
  const { isSongUpload } = UploadStates();
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <ChannelTop />
      {isSongUpload && <Upload />}
    </div>
  );
};

export default Channel;

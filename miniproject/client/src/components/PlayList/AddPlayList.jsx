import React, { useState } from "react";
import UserServices from "../../services/UserServices";
import { useSelector } from "react-redux";
import { getUser } from "../../Slice/UserSlice";
import { toast } from "react-hot-toast";

const AddPlayList = ({ showAddPlayList, setShowAddPlayList ,songs}) => {
  const [playlist, setPlayList] = useState({
    name: "",
    image: "",
    description: "",
    songs: songs,
  });
  const user = useSelector(getUser);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await UserServices.addPlayList(user?.uid, playlist).then((response) => {
      console.log(response);
      toast.success("Playlist added successfully", {
        position: "bottom-left",
        style: { backgroundColor: "black", color: "white" },
      });
      setShowAddPlayList(false);
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlayList({ ...playlist, [name]: value });
  };
  return (
    <div className="w-screen h-screen top-0 left-0 z-10 bg-black bg-opacity-70  flex justify-center items-center fixed">
      <div className="p-5 rounded-md min-w-[400px] items-center bg-white flex flex-col text-black">
        <p className="text-start w-full mb-3 font-semibold text-xl">
          Create PlayList
        </p>
        <form onSubmit={handleSubmit}>
          <div className="flex w-full flex-col">
            <input
              type="text"
              placeholder="PlayList Name"
              className="form-input rounded-sm my-2 text-xl font-roboto"
              name="name"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Description"
              className="form-input rounded-sm my-2 text-xl font-roboto"
              name="description"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Image"
              className="form-input rounded-sm my-2 text-xl font-roboto"
              name="image"
              onChange={handleChange}
            />
            <div className="flex justify-end">
              <input
                onClick={handleSubmit}
                type="submit"
                value="Create"
                className="p-1 px-2 text-white mx-3 rounded-md bg-green cursor-pointer"
              />
              <button onClick={() => setShowAddPlayList(false)}>Cancel</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPlayList;

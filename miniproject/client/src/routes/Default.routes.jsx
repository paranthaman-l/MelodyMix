import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, PlayerPage } from "../pages";
import ContextContainer from "../context/ContextContainer";
import { Navbar, Player } from "../components";
import Upgrade from "../pages/users/Upgrade";
import OthersChannel from "../components/Channel/OthersChannel";
import Movie from "../components/Movie";
import LikedSongs from "../pages/users/LikedSongs";
import { Toaster } from "react-hot-toast";
import Explore from "../pages/users/Explore";
import Channel from "../pages/users/Channel";
import Mood from "../components/Mood";
import Test from '../pages/test/Test'
const DefaultRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <ContextContainer>
          {/* <Navbar /> */}
          <Toaster />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<Test />} />
            <Route path="/home" element={<Home />} />
            <Route path="/likedsongs" element={<LikedSongs />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/upgrade" element={<Upgrade />} />
            <Route path="/player/:sid" element={<PlayerPage />} />
            <Route path="/mychannel/:uid" element={<Channel />} />
            <Route path="/channel/:otheruid" element={<OthersChannel />} />
            <Route path="/movie/:movie" element={<Movie />} />
            <Route path="/mood/:mood" element={<Mood />} />
          </Routes>
          <Player />
        </ContextContainer>
      </BrowserRouter>
    </div>
  );
};

export default DefaultRoutes;

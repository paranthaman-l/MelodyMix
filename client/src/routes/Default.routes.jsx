import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, PlayerPage } from "../pages";
import ContextContainer from "../context/ContextContainer";
import { Navbar, Player } from "../components";
import Upgrade from "../pages/users/Upgrade";
import OthersChannel from "../components/Channel/OthersChannel";
import Movie from "../components/Movie";
import LikedSongs from "../pages/users/LikedSongs";

const DefaultRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <ContextContainer>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/upgrade" element={<Upgrade />} />
            <Route path="/player" element={<PlayerPage />} />
            <Route path="/channel/:otheruid" element={<OthersChannel />} />
            <Route path="/movie/:movie" element={<Movie />} />
            <Route path="/likedsongs" element={<LikedSongs />} />
          </Routes>
          <Player />
        </ContextContainer>
      </BrowserRouter>
    </div>
  );
};

export default DefaultRoutes;

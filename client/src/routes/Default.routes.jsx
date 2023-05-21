import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages";
import ContextContainer from "../context/ContextContainer";
import { Navbar, Player } from "../components";
import Upgrade from "../pages/users/Upgrade";

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
          </Routes>
          <Player />
        </ContextContainer>
      </BrowserRouter>
    </div>
  );
};

export default DefaultRoutes;

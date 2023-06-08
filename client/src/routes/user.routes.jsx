import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ContextContainer from "../context/ContextContainer";
import { Navbar, Player } from "../components";
import { Home, Library, PlayerPage } from "../pages";
import Upgrade from "../pages/users/Upgrade";
import Channel from "../pages/users/Channel";
import LikedSongs from "../pages/users/LikedSongs";
import Movie from "../components/Movie";
import OthersChannel from "../components/Channel/OthersChannel";
import { Toaster } from "react-hot-toast";

const UserRoutes = () => {
  return (
    <div>
      <Router>
        <ContextContainer>
          <Navbar />
          <Toaster />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/library" element={<Library />} />
            <Route path="/upgrade" element={<Upgrade />} />
            <Route path="/player" element={<PlayerPage />} />
            <Route path="/mychannel/:uid" element={<Channel />} />
            <Route path="/channel/:otheruid" element={<OthersChannel />} />
            <Route path="/movie/:movie" element={<Movie />} />
            <Route path="/likedsongs" element={<LikedSongs />} />
          </Routes>
          <Player />
        </ContextContainer>
      </Router>
    </div>
  );
};

export default UserRoutes;

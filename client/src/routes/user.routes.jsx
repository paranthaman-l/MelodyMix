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
import Explore from "../pages/users/Explore";
import Mood from "../components/Mood";
import PlayList from "../components/Library/PlayList";
import PageNotFound from "../components/404PageNotFound";
import Plans from "../pages/users/Plans";

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
            <Route path="/likedsongs" element={<LikedSongs />} />
            <Route path="/library" element={<Library />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/upgrade" element={<Upgrade />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/player/:sid" element={<PlayerPage />} />
            <Route path="/playlist/:pid" element={<PlayList />} />
            <Route path="/mychannel/:uid" element={<Channel />} />
            <Route path="/channel/:otheruid" element={<OthersChannel />} />
            <Route path="/movie/:movie" element={<Movie />} />
            <Route path="/mood/:mood" element={<Mood />} />
            <Route  element={<PageNotFound />} />
          </Routes>
          <Player />
        </ContextContainer>
      </Router>
    </div>
  );
};

export default UserRoutes;

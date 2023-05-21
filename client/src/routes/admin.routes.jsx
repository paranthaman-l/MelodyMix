import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ContextContainer from "../context/ContextContainer";
import { Player } from "../components";
import { Home, Library, PlayerPage } from "../pages";
import Upgrade from "../pages/users/Upgrade";
import Channel from "../pages/users/Channel";
import LikedSongs from "../pages/users/LikedSongs";
import Navbar from "../components/AdminPageComponents/Navbar";
const AdminRoutes = () => {
  return (
    <div className="text-white">
      <Router>
        <ContextContainer>
          <Navbar  />
          <Routes>
            <Route path="admin/" element={<Home />} />
            <Route path="admin/home" element={<Home />} />
            <Route path="admin/library" element={<Library />} />
            <Route path="admin/upgrade" element={<Upgrade />} />
            <Route path="admin/player" element={<PlayerPage />} />
            <Route path="admin/channel/:uid" element={<Channel />} />
            <Route path="admin/likedsongs" element={<LikedSongs />} />
          </Routes>
          <Player />
        </ContextContainer>
      </Router>
    </div>
  );
};

export default AdminRoutes;

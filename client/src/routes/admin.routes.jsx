import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ContextContainer from "../context/ContextContainer";
import { Player } from "../components";
import { Home, PlayerPage } from "../pages";
import Navbar from "../components/AdminPageComponents/Navbar";
import Users from "../pages/admin/Users";
import Songs from "../pages/admin/Songs";
import OthersChannel from "../components/Channel/OthersChannel";
import Movie from "../components/Movie";
const AdminRoutes = () => {
  return (
    <div className="text-white">
      <Router>
        <ContextContainer>
          <Navbar  />
          <Routes>
            <Route path="admin/" element={<Home />} />
            <Route path="admin/home" element={<Home />} />
            <Route path="admin/users" element={<Users />} />
            <Route path="admin/songs" element={<Songs />} />
            <Route path="admin/player" element={<PlayerPage />} />
            <Route path="/player" element={<PlayerPage />} />
            <Route path="/channel/:otheruid" element={<OthersChannel />} />
            <Route path="/movie/:movie" element={<Movie />} />
          </Routes>
          <Player />
        </ContextContainer>
      </Router>
    </div>
  );
};

export default AdminRoutes;

/* eslint-disable no-unused-vars */
// import { useState, useRef } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import { Navbar, Player } from "./components";
import { Home, Library, PlayerPage } from "./pages";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { getUser } from "./Slice/UserSlice";
import { useEffect } from "react";
// import Loading from "./components/Loading";
import { Amplify } from "aws-amplify";
import Upgrade from "./pages/users/Upgrade";
import Channel from "./pages/users/Channel";
import ContextContainer from "./context/ContextContainer";
const S3_BUCKET = process.env.REACT_APP_BUCKET;
const REGION = process.env.REACT_APP_REGION;
const IDENTITY_POOL_ID = process.env.REACT_APP_IDENTITY_POOL_ID;
function App() {
  const user = useSelector(getUser);
  useEffect(() => {
    Amplify.configure({
      Auth: {
        identityPoolId: IDENTITY_POOL_ID, //REQUIRED - Amazon Cognito Identity Pool ID
        region: REGION, // REQUIRED - Amazon Cognito Region
      },
      Storage: {
        AWSS3: {
          bucket: S3_BUCKET, //REQUIRED -  Amazon S3 bucket name
          region: REGION,
        },
      },
    });
  }, []);
  return (
    <div className="scrollbar  scrollbar-track-[#181818] scrollbar-thumb-[#717171] overflow-hidden">
      <Router>
        <ContextContainer>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/library" element={<Library />} />
            <Route path="/upgrade" element={<Upgrade />} />
            <Route path="/player" element={<PlayerPage />} />
            <Route path="/channel/:uid" element={<Channel />} />
          </Routes>
          <Player />
        </ContextContainer>
      </Router>
    </div>
  );
}

export default App;

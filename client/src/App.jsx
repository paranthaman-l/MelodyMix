/* eslint-disable no-unused-vars */
// import { useState, useRef } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import { Navbar, Player } from "./components";
import { States } from "./context/useStates";
import { Home, Library, PlayerPage } from "./pages";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { getUser } from "./Slice/UserSlice";
import { useEffect, useRef, useState } from "react";
// import Loading from "./components/Loading";
// import universalParse from "id3-parser/lib/universal";
import { Amplify, Storage } from "aws-amplify";
import Upgrade from "./pages/users/Upgrade";
const S3_BUCKET = process.env.REACT_APP_BUCKET;
const REGION = process.env.REACT_APP_REGION;
const IDENTITY_POOL_ID = process.env.REACT_APP_IDENTITY_POOL_ID;
function App() {
  const user = useSelector(getUser);
  // const { loading } = useStates();
  // const handleFileUpload = (event) => {
  //   const file = event.target.files[0];
  //   universalParse(file).then((tag) => {
  //     console.log(tag);
  //     const uint8Array = new Uint8Array(tag.image.data);
  //     const file1 = new File([uint8Array], 'image.png', { type: 'image/png' });
  //     console.log(file1);
  //     console.log(tag.artist.replace("MassTamilan.dev",""),tag.album,tag.title);
  //   });
  // };
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
  const fileref = useRef(null);
  async function handleFileInput(event) {
    const file = fileref.current.files[0];
    const filename = fileref.current.files[0].name;
    await Storage.put(filename, file)
      .then((response1) => {
        Storage.get(filename).then((response) => {
          console.log(response);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="scrollbar  scrollbar-track-[#181818] scrollbar-thumb-[#717171] overflow-hidden">
      <Router>
        <States>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/library" element={<Library />} />
            <Route path="/upgrade" element={<Upgrade />} />
            <Route path="/player" element={<PlayerPage />} />
          </Routes>
          <Player />
        </States>
      </Router>
      {/* <input
        type="file"
        name=""
        onChange={handleFileInput}
        ref={fileref}
        id=""
      />
      <img src="https://music-data-bucket.s3.ap-south-1.amazonaws.com/public/HD-wallpaper-radhakrishnan-vishnu-lord-ramayan-krishna-radha-arjun-mahabharat-god-geeta-ram.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIA5AF7MJI7EMJO27ND%2F20230509%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230509T031253Z&X-Amz-Expires=900&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCmFwLXNvdXRoLTEiSDBGAiEA8pLlHNUfI4HzccqxjC4wCeiKwMGIyTcnEwxbvUePHKQCIQDHllXEdmECp0RL1tyNF2jcqQIU6M1CwHtW1hXp3pXBuSqJBghsEAAaDDg5Mzc1NDU1OTAzOCIMUakjifzS48qO9CDIKuYFop%2B8EPs2VOFd%2B81mDs9sv%2BpsU%2FLXOr5HFuZhJtpRrmPX2RQspFkpT1u9VydoERkeGGgksYdhGvuS8Ysx4b8i1eEPO6bCv0ux%2BaoUXGeuQou5KnMLsMfXlhD%2BV5GE5KwntP3bCeZjA2moHZH4BsDJwVXnmCvMcyPfkk923FL%2FHcYASRrg%2FoASA7TLjgEb29wW1dpMmHU2N0j1kqeak5iRCUVQdpap9%2FOue9h3HPFf1az52KT2lblE54Ljy96IiT0NuUmx987k%2Bb1kREGFCHRwJ39YBM8i7UYwLn3YXue8fp671wCKtzmloN9Sdv1warKjdI3HSjdGu1%2BRBmbcCV4DEXD%2B%2B0typpaZdrJXhtArChBEd8VcA886ldpw42Mp%2FNBZD5aVA9ZRtdwap9C8SbH%2BqmmcXfjdwOF%2FRJjq80RhI5p%2BQR90IrYTYpAfQ0YsO8heDn0Z7XQWJjXj90JoA%2F0tihRQ4scJpjZ%2FjXdun2gVVxKAyOcKtRk94vlIrQij5CvYipDRuRpf6oepC%2FPc8G8I1VGaqD1wd3McyHsLwbuJvVLOdQJkNxlCvXc4ir2jx6sxqw%2B7OFHYQj3rLNKQYDhOABKq5991gteDAXDP2RYUnUd1I2wVfYGO75SzsFxiAmkvEAwj94yJXzoFSBPxXeX%2FAAri4S0SzbFjPMpCnH6YfVFOiTm%2FAMpqLI1Y7NVhPcrO9NQcQdoJgBTeP1w4GI268ZRy2x3Jg54qy3D%2FYS7zC1L7MHhLFA9X7MG616Oyx8G7sXv3bM%2B7ktZdY0wMiwp9Ct%2FLrFuhd3geuCl3swrxl%2FTKWPCx37LqUVkt4xHMfkL2aBG6jV14D7KJdb7krx7Le7xGVV0tIvzFeXC%2BEBOVE%2F9j8NAr%2FswkH11CEuF6mv17CTMJwvLAFCkQmDVzk9ltc9SXHOfLezALDuJo1jEd90MONj7LXZ%2FMWSgnimXWwsWdWi8n0sw4sgN4hZtN%2FIFo6%2B7dfVzqoDC09OaiBjqGAm9NYcuKMMDHCOY5J0Pd2Jw002J%2FVO9IAXB9KjxJEtFZfBt2qxQimOuw9gaC0VSNWiC6gr30YQYq1wKdJMvV1regYwbaNY4%2FgqmTO3rXywR%2BL7BRBi7ya20mXDJ1jj6yKmxMsit3RQBcvw9GMEZecRGO%2Fdx3f37dhO%2BkO3418oSgy3IY0fO8oTwjs%2BXdt5S9JJTnW8lHUDPi4cleWTHV0gRjcOIMA31PekHzmvQSJw0nwWnYAHUI6KcApwOoutm292zfpGH68Ef%2BRb5zQ5H%2FRgy57plN786YAilXyPGXmx4SI0RH2JcYaU%2FY5DTHdY3w1m%2F2XIKZQzKZ17uS%2F0PI4CmsS3XtC24%3D&X-Amz-Signature=5eca9e7c94eb9fa3fc4db4261892025d674317f5faabfb1167b1c1670d512fd3&X-Amz-SignedHeaders=host&x-amz-user-agent=aws-sdk-js%2F3.6.2%20os%2FWindows%2FNT_10.0%20lang%2Fjs%20md%2Fbrowser%2FMicrosoft_Edge_113.0.1774.35%20api%2Fs3%2F3.6.2%20aws-amplify%2F5.2.0_js&x-id=GetObject" alt="" /> */}
    </div>
  );
}

export default App;

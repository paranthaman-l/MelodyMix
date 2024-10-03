import { HomeFilters, QuickPicks, TrendingSongs } from "../components";
import Albums from "../components/Home/Albums";
import InBetween from "../components/Home/InBetween";
import UsersDetails from "../components/Home/UsersDetails";
const Home = () => {
  return (
    <>
      <div className="h-full home_contents w-full">
        <div className="flex bg-gradient-to-t from-black via-transparent to-transparent  h-48">
          {/* <div className="absolute h-66 z-10 bg-black"></div> */}
          <img
            className="h-full w-full absolute mix-blend-darken bg-black -z-10 "
            src={`https://lh3.googleusercontent.com/-I_bdjEnCynaegZl-BIL5N-Vn4YjPZBBpYaIMaDeI8rlw8Y3UKidy-dxPUWxEdt_gLxT2W8xL3_zr9o=w1500-h844-l90-rj`}
            rel=""
            alt=""
          />
          <HomeFilters />
        </div>
        <div className="songs_contents bg-black h-full  px-32 max-md:px-10">
          <QuickPicks />
          <UsersDetails/>
          <InBetween />
          <Albums />
          <TrendingSongs />
        </div>
      </div>
    </>
  );
};

export default Home;

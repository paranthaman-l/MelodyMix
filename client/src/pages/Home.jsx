import { HomeFilters, QuickPicks, TrendingSongs } from "../components";

const Home = () => {
  return (
    <>
      <div className="h-full home_contents w-full">
        <div className="flex bg-gradient-to-t from-black via-transparent to-transparent  h-48">
          {/* <div className="absolute h-66 z-10 bg-black"></div> */}
          <img
            className="h-full w-full absolute mix-blend-darken bg-black -z-10 "
            src={`https://www.gstatic.com/youtube/media/ytm/images/sbg/wsbg@4000x2250.png`}
            rel=""
            alt=""
          />
          <HomeFilters />
        </div>
        <div className="songs_contents bg-black h-full  px-32 max-md:px-10">
          <QuickPicks />
          <TrendingSongs />
        </div>
      </div>
    </>
  );
};

export default Home;

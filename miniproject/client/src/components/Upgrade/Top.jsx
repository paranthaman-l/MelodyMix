import { SiYoutubemusic } from "react-icons/si";
import Background from "./Background";
const Top = () => {
  return (
    <div className="pt-16 bg-black">
      <div className="upgrade_top flex flex-col justify-center items-center z-50">
        <span className="flex items-center justify-center text-5xl text-white font-bold">
          <SiYoutubemusic className="text-green bg-white rounded-full mr-1 max-sm:text-4xl max-sm:3xl" />
          <p className="tracking-tighter max-md:text-4xl max-sm:3xl">Melody Mix</p>
        </span>
        <p className="text-white font-thin font-roboto text-4xl w-full flex justify-center items-center my-10">
          <p class="text-center w-[550px]">
            Get Music Premium to listen ad-free, offline & with your screen off
          </p>
        </p>
        <button className="bg-[#3ea6ff] px-4 py-2 text-white rounded-3xl hover:bg-opacity-90">
          Get Melody Mix Premium
        </button>
        <p className="text-white font-thin font-roboto text-2xl w-full flex justify-center items-center my-5">
          <p class="text-center w-[550px]">
            Pre-paid and subscription plans available. Starting at ₹99.00/month.
          </p>
        </p>
        <p className="text-white my-3">
          Or save money with an{" "}
          <span className="text-[#3ea6ff]">annual, family or student plan</span>{" "}
        </p>
        <p className="text-white my-3">
          Restrictions apply.{" "}
          <span className="text-[#3ea6ff]">Learn more here</span>
        </p>
      </div>
      <div
        className="flex bg-black text-white justify-evenly py-5 
      max-md:flex-col
      max-md:gap-5 max-md:w-full"
      >
        <div className="flex flex-col  items-center">
          <img
            className="w-20"
            src="https://www.gstatic.com/youtube/img/promos/growth/ytm_lp2_icon_feature_headset_168x168.png"
            alt=""
          />
          <p className="font-roboto text-3xl font-thin w-80 text-center">
            Listen in the background
          </p>
          <p className="flex flex-wrap font-roboto text-base font-thin w-80 text-center text-gray-200 text-opacity-60">
            Don’t worry about your music stopping when you lock your screen or
            use other apps.
          </p>
        </div>
        <div className="flex flex-col  items-center">
          <img
            className="w-20"
            src="https://www.gstatic.com/youtube/img/promos/growth/ytm_lp2_icon_feature_play_168x168.png"
            alt=""
          />
          <p className="font-roboto text-3xl font-thin w-80 text-center">
            Ad-free music
          </p>
          <p className="font-roboto text-base font-thin w-80 text-center text-gray-200 text-opacity-60">
            Listen to the world of music without ads.
          </p>
        </div>
        <div className="flex flex-col  items-center">
          <img
            className="w-20"
            src="https://www.gstatic.com/youtube/img/promos/growth/ytm_lp2_icon_feature_download_168x168.png"
            alt=""
          />
          <p className="font-roboto text-3xl font-thin w-80 text-center">
            Download and go
          </p>
          <p className="font-roboto text-base font-thin w-80 text-center text-gray-200 text-opacity-60">
            Listen to your favorite music on the go.
          </p>
        </div>
      </div>
      <Background />
    </div>
  );
};

export default Top;

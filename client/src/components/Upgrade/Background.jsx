const Background = () => {
  return (
    <div className="flex flex-col gap-3 bg-black">
      <div className="h-[550px] max-md:h-fit p-2 w-full px-40 max-md:px-10 text-white bg-cover max-lg:bg-contain bg-no-repeat bg-[url('https://www.gstatic.com/youtube/img/promos/growth/ytr_lp2_266999_story1_desktop_2880x1620.jpg')]">
        <div className="flex flex-col font-roboto h-full justify-center my-auto max-md:w-full max-md:justify-start max-md:mt-40">
          <p className="text-5xl text-[#e3e3e3] max-md:text-3xl font-thin">
            Background play
          </p>
          <p className="text-xl mt-10 w-6/12 tracking-wider max-lg:w-full text-[#9d9d9e]">
            Turn off the screen, use other apps, all while your music keeps
            playing
          </p>
        </div>
      </div>
      <div className="h-[550px] p-2 w-full px-40 max-md:px-10 text-white bg-cover max-lg:bg-contain bg-no-repeat bg-[url('https://www.gstatic.com/youtube/img/promos/growth/ytr_lp2_266999_story2_desktop_2880x1620.jpg')]">
        <div className="flex flex-col font-roboto h-full justify-center items-end my-auto max-md:w-full max-md:justify-start max-md:mt-40">
          <p className="text-5xl text-[#e3e3e3] max-md:text-3xl font-thin">
            No ads. No interruptions.
          </p>
          <p className="text-xl mt-10 w-6/12 tracking-wider max-md:w-full text-[#9d9d9e] text-end">
            Easily explore the world of music without any interruptions.
          </p>
        </div>
      </div>
      <div className="h-[550px] max-md:h-fit p-2 w-full px-40 max-md:px-10 text-white bg-cover max-lg:bg-contain bg-no-repeat bg-[url('https://www.gstatic.com/youtube/img/promos/growth/ytr_lp2_266999_story3_desktop_2880x1620.jpg')]">
        <div className="flex flex-col font-roboto h-full justify-center my-auto max-md:w-full max-md:justify-start max-md:mt-40">
          <p className="text-5xl text-[#e3e3e3] max-md:text-3xl font-thin">
            Download your favorite tracks
          </p>
          <p className="text-xl mt-10 w-6/12 tracking-wider max-lg:w-full text-[#9d9d9e]">
            No connection? No problem. Take your songs, albums and playlists
            offline.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center text-white text-lg my-28">
            <p>Have other questions? <span className="text-[#3ea6ff]">Visit the YouTube Help Center</span> </p>
      </div>
    </div>
  );
};

export default Background;

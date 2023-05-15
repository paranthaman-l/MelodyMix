import { IoCompassOutline, IoSettingsOutline } from "react-icons/io5";
import {
  MdOutlineLibraryMusic,
  MdOutlineFeedback,
  MdOutlineLibraryAdd,
} from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { SlHome } from "react-icons/sl";
import { AiOutlineYoutube } from "react-icons/ai";
import { BiShieldX } from "react-icons/bi";
import { FiHelpCircle } from "react-icons/fi";
import { IoIosRadio } from "react-icons/io";
import {
  RiPlayListFill,
  RiPlayList2Fill,
  RiPlayListAddLine,
} from "react-icons/ri";
import { FaRegDotCircle } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import { TbShare3 } from "react-icons/tb";
import songs from "./Songs.json";
const navLinks = [
  {
    id: "home",
    title: "Home",
    icon: <SlHome />,
    link: "/home",
  },
  {
    id: "explore",
    title: "Explore",
    icon: <IoCompassOutline />,
    link: "/explore",
  },
  {
    id: "library",
    title: "Library",
    icon: <MdOutlineLibraryMusic />,
    link: "/library",
  },
  {
    id: "upgrade",
    title: "Upgrade",
    icon: <SiYoutubemusic />,
    link: "/upgrade",
  },
];

const menuLinks = [
  {
    id: "youtube",
    title: "Get Music Premium",
    icon: <AiOutlineYoutube />,
  },
  {
    id: "settings",
    title: "Settings",
    icon: <IoSettingsOutline />,
  },
  {
    id: "terms",
    title: "Terms & privacy policy",
    icon: <BiShieldX />,
  },
  {
    id: "help",
    title: "Help",
    icon: <FiHelpCircle />,
  },
  {
    id: "sendFeedback",
    title: "Send feedback",
    icon: <MdOutlineFeedback />,
  },
];

const homeMode = ["Relax", "Workout", "Commute", "Energize", "Focus"];

const libraryList = ["Playlists", "Songs", "Albums", "Artists"];

const songOptions = [
  {
    id: "radio",
    title: "Radio",
    icon: <IoIosRadio />,
  },
  {
    id: "playnext",
    title: "Play next",
    icon: <RiPlayList2Fill />,
  },
  {
    id: "addtoqueue",
    title: "Add to queue",
    icon: <RiPlayListFill />,
  },
  {
    id: "addtolib",
    title: "Add to Library",
    icon: <MdOutlineLibraryAdd />,
  },
  {
    id: "addtoplaylist",
    title: "Add to Playlist",
    icon: <RiPlayListAddLine />,
  },
  {
    id: "gotoalbum",
    title: "Add to Album",
    icon: <FaRegDotCircle />,
  },
  {
    id: "goto artist ",
    title: "Goto Artist",
    icon: <BsPersonLinesFill />,
  },
  {
    id: "goto artist ",
    title: "Goto Artist",
    icon: <TbShare3 />,
  },
];

const profileList = [
  {
    id: "settings",
    title: "Settings",
    icon: <IoSettingsOutline />,
  },
  {
    id: "terms",
    title: "Terms & privacy policy",
    icon: <BiShieldX />,
  },
  {
    id: "help",
    title: "Help",
    icon: <FiHelpCircle />,
  },
  {
    id: "sendFeedback",
    title: "Send feedback",
    icon: <MdOutlineFeedback />,
  },
];
const signUpQuotes = [
  "Music gives a soul to the universe, wings to the mind, and life to everything",
  "Music is the universal language of mankind",
  "Where words fail, music speaks",
  "Music is the art which is most nigh to tears and memories",
  "Without music, life would be a mistake",
  "Music is a higher revelation than all wisdom and philosophy",
  "Music can change the world because it can change people",
];
export {
  navLinks,
  menuLinks,
  homeMode,
  songs,
  signUpQuotes,
  songOptions,
  libraryList,
  profileList,
};

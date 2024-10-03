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

const adminNavLinks = [
  {
    id: "home",
    title: "Home",
    icon: <SlHome />,
    link: "admin/home",
  },
  {
    id: "users",
    title: "Users",
    icon: <IoCompassOutline />,
    link: "admin/users",
  },
  {
    id: "songs",
    title: "Songs",
    icon: <MdOutlineLibraryMusic />,
    link: "admin/songs",
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

const pageSizeOptions = [
  {
    id: 1,
    value: 1,
  },
  {
    id: 5,
    value: 5,
  },
  {
    id: 10,
    value: 10,
  },
  {
    id: 15,
    value: 15,
  },
  {
    id: 20,
    value: 20,
  },
  {
    id: 25,
    value: 25,
  },
  {
    id: 30,
    value: 30,
  },
];
const SortOptions = [
  {
    id: "profile",
    value: "Profile",
  },
  {
    id: "username",
    value: "Username",
  },
  {
    id: "supporters",
    value: "Subscribers",
  },
  {
    id: "songs",
    value: "Uploaded songs",
  },
  {
    id: "email",
    value: "Email",
  },
];
const moodAndGenre = [
  {"id": 1, "value": "Tamil", "color": "#FF5733"},
  {"id": 2, "value": "Commute", "color": "#F700FF"},
  {"id": 3, "value": "Romance", "color": "#33FF57"},
  {"id": 4, "value": "Party", "color": "#3357FF"},
  {"id": 5, "value": "Workout", "color": "#FFA500"},
  {"id": 6, "value": "Hindi", "color": "#800080"},
  {"id": 7, "value": "2000s", "color": "#FFFF00"},
  {"id": 8, "value": "Energy Boosters", "color": "#00FFFF"},
  {"id": 9, "value": "2010s", "color": "#FF4500"},
  {"id": 10, "value": "Malayalam", "color": "#FF00FF"},
  {"id": 11, "value": "Carnatic Classical", "color": "#7CFC00"},
  {"id": 12, "value": "Devotional", "color": "#8A2BE2"},
  {"id": 13, "value": "1990s", "color": "#FFD700"},
  {"id": 14, "value": "Indian Indie", "color": "#00CED1"},
  {"id": 15, "value": "Focus", "color": "#BA55D3"},
  {"id": 16, "value": "1980s", "color": "#FF69B4"},
  {"id": 17, "value": "Monsoon", "color": "#32CD32"},
  {"id": 18, "value": "1960s", "color": "#0000FF"},
  {"id": 19, "value": "Folk & Acoustic", "color": "#FF8C00"},
  {"id": 20, "value": "Sleep", "color": "#8B008B"},
  {"id": 21, "value": "1970s", "color": "#FFFF00"},
  {"id": 22, "value": "Chill", "color": "#00FFFF"},
  {"id": 23, "value": "Indian Pop", "color": "#FF4500"},
  {"id": 24, "value": "Hindi", "color": "#FF00FF"},
  {"id": 25, "value": "Ghazal/Sufi", "color": "#7CFC00"},
  {"id": 26, "value": "Hindustani Classical", "color": "#8A2BE2"},
  {"id": 27, "value": "Desi Hip-Hop", "color": "#FFD700"},
  {"id": 28, "value": "Hip-Hop", "color": "#00CED1"},
  {"id": 29, "value": "Haryanvi", "color": "#BA55D3"},
  {"id": 30, "value": "African", "color": "#FF69B4"},
  {"id": 31, "value": "R&B & Soul", "color": "#32CD32"},
  {"id": 32, "value": "Country & Americana", "color": "#0000FF"},
  {"id": 33, "value": "Dance & Electronic", "color": "#FF8C00"},
  {"id": 34, "value": "Classical", "color": "#8B008B"},
  {"id": 35, "value": "Family", "color": "#FFFF00"},
  {"id": 36, "value": "Pop", "color": "#00FFFF"},
  {"id": 37, "value": "Reggae & Caribbean", "color": "#FF4500"},
  {"id": 38, "value": "Rock", "color": "#FF00FF"},
  {"id": 39, "value": "Indie & Alternative", "color": "#7CFC00"},
  {"id": 40, "value": "Jazz", "color": "#8A2BE2"},
  {"id": 41, "value": "Metal", "color": "#FFD700"},
  {"id": 42, "value": "J-Pop", "color": "#00CED1"},
  {"id": 43, "value": "Punjabi", "color": "#BA55D3"},
  {"id": 44, "value": "Egyptian", "color": "#FF69B4"},
  {"id": 45, "value": "Khaleeji", "color": "#32CD32"},
  {"id": 46, "value": "K-Pop", "color": "#0000FF"},
  {"id": 47, "value": "Arab Diaspora", "color": "#FF8C00"},
  {"id": 48, "value": "Latin", "color": "#8B008B"},
  {"id": 49, "value": "Telugu", "color": "#FFFF00"},
  {"id": 50, "value": "Kannada", "color": "#00FFFF"},
  {"id": 51, "value": "Bhojpuri", "color": "#FF4500"},
  {"id": 52, "value": "Marathi", "color": "#FF00FF"},
  {"id": 53, "value": "Gujarati", "color": "#7CFC00"},
  {"id": 54, "value": "Bengali", "color": "#8A2BE2"},
  {"id": 55, "value": "Iraqi", "color": "#FFD700"},
  {"id": 56, "value": "Assamese & Odia", "color": "#00CED1"},
  {"id": 57, "value": "All Time Arabic Hits", "color": "#BA55D3"},
  {"id": 58, "value": "Arabic Favorites", "color": "#FF69B4"},
  {"id": 59, "value": "Rock en Español", "color": "#32CD32"},
  {"id": 60, "value": "Feel Good", "color": "#0000FF"}
]

export {
  navLinks,
  menuLinks,
  homeMode,
  songs,
  signUpQuotes,
  songOptions,
  libraryList,
  profileList,
  adminNavLinks,
  pageSizeOptions,
  SortOptions,
  moodAndGenre,
};

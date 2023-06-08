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
  { id: 1, value: "Happy" },
  { id: 2, value: "Sad" },
  { id: 3, value: "Energetic" },
  { id: 4, value: "Romantic" },
  { id: 5, value: "Upbeat" },
  { id: 6, value: "Chill" },
  { id: 7, value: "Motivational" },
  { id: 8, value: "Reflective" },
  { id: 9, value: "Uplifting" },
  { id: 10, value: "Melancholic" },
  { id: 11, value: "Soothing" },
  { id: 12, value: "Angry" },
  { id: 13, value: "Sentimental" },
  { id: 14, value: "Dreamy" },
  { id: 15, value: "Inspirational" },
  { id: 16, value: "Groovy" },
  { id: 17, value: "Mellow" },
  { id: 18, value: "Intense" },
  { id: 19, value: "Hopeful" },
  { id: 20, value: "Serene" },
  { id: 21, value: "Funky" },
  { id: 22, value: "Passionate" },
  { id: 23, value: "Lively" },
  { id: 24, value: "Nostalgic" },
  { id: 25, value: "Peaceful" },
  { id: 26, value: "Whimsical" },
  { id: 27, value: "Empowering" },
  { id: 28, value: "Dark" },
  { id: 29, value: "Joyful" },
  { id: 30, value: "Triumphant" },
  { id: 1, value: "Pop" },
  { id: 2, value: "Rock" },
  { id: 3, value: "Hip-hop" },
  { id: 4, value: "Rap" },
  { id: 5, value: "Country" },
  { id: 6, value: "Electronic" },
  { id: 7, value: "R&B" },
  { id: 8, value: "Jazz" },
  { id: 9, value: "Blues" },
  { id: 10, value: "Folk" },
  { id: 11, value: "Alternative" },
  { id: 12, value: "Indie" },
  { id: 13, value: "Classical" },
  { id: 14, value: "Reggae" },
  { id: 15, value: "Metal" },
  { id: 16, value: "Punk" },
  { id: 17, value: "Soul" },
  { id: 18, value: "Funk" },
  { id: 19, value: "Dance" },
  { id: 20, value: "Disco" },
  { id: 21, value: "Gospel" },
  { id: 22, value: "EDM" },
  { id: 23, value: "Latin" },
  { id: 24, value: "Ska" },
  { id: 25, value: "World" },
  { id: 26, value: "Ambient" },
  { id: 27, value: "Experimental" },
  { id: 28, value: "Instrumental" },
  { id: 29, value: "New Age" },
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
  adminNavLinks,
  pageSizeOptions,
  SortOptions,
  moodAndGenre,
};

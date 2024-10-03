/* eslint-disable react/jsx-key */
import Navbar, { HomeFilters } from "./Navbar";
import OntopOption from "./Home/OntopOption";
import QuickPicks from "./Home/QuickPicks";
import PlayList from "./Library/PlayList";
import Songs from "./Library/Songs";
import Albums from "./Library/Albums";
import Artists from "./Library/Artists";
import TrendingSongs from "./Home/TrendingSongs";
import Top from "./Upgrade/Top";
import Player from "./Player/Player";
import ChannelTop from "./Channel/ChannelTop";
import LikedSongTop from "./LikedSong/LikedSongTop";
import ListOfLikedSongs from "./LikedSong/ListOfLikedSongs";
const libraryContent = [<PlayList />, <Songs />, <Albums />, <Artists />];
export {
  Navbar,
  HomeFilters,
  OntopOption,
  QuickPicks,
  libraryContent,
  TrendingSongs,
  Top,
  Player,
  ChannelTop,
  LikedSongTop,
  ListOfLikedSongs,
};

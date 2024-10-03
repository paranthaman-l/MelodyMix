import { axios } from "../api/axios";

class UserServices {
  getUsersCount() {
    return axios.get(`/users/getcount`);
  }
  getSongsCount() {
    return axios.get(`/songs/getcount`);
  }

  signUpUser(user) {
    return axios.post(`/users/signup`, user);
  }
  
  signInUser(email, password) {
    return axios.get(`/users/login`, {
      params: { email: email, password: password },
    });
  }
  updateProfile(uid, profile) {
    return axios.get(`/users/updateprofile`, {
      params: { uid: uid, profile: profile },
    });
  }
  getUser(uid) {
    return axios.get(`/users/getuser`, { params: { uid: uid } });
  }
  addLikedSong(uid, sid) {
    return axios.get(`/users/addlikedsong`, {
      params: { uid: uid, sid: sid },
    });
  }
  userPagination(pagination) {
    return axios.get(`/users/pagination`, {
      params: {
        pageSize: pagination.pageSize,
        offset: pagination.offset,
        field: pagination.field,
        sortDirection: pagination.sortDirection,
      },
    });
  }
  songPagination(pagination) {
    return axios.get(`/songs/pagination`, {
      params: {
        pageSize: pagination.pageSize,
        offset: pagination.offset,
        field: pagination.field,
        sortDirection: pagination.sortDirection,
      },
    });
  }

  uploadMovie(movie) {
    return axios.post(`/movie/add`, movie);
  }
  uploadSong(song, uid, mid) {
    return axios.post(`/users/addsong`, song, {
      params: { uid: uid, mid: mid },
    });
  }

  getAllMovie() {
    return axios.get("/movie/all");
  }

  addImage(sid, filename) {
    axios.put(`songs/addimg/${sid}`, {}, { params: { filename } });
  }
  addSongUrl(sid, filename) {
    return axios.put(`songs/addsongurl/${sid}`, {}, { params: { filename } });
  }

  updateSong(sid, song) {
    return axios.put(`songs/update`, song, { params: { sid: sid } });
  }
  addView(sid) {
    return axios.put(`songs/addview/${sid}`);
  }

  deleteSong(sid) {
    return axios.delete("songs/delete", { params: { sid: sid } });
  }

  getMovie(mid) {
    return axios.get(`songs/bymovieid`, { params: { mid: mid } });
  }

  getAllSongs() {
    return axios.get(`songs/all`);
  }
  getMovieById(mid) {
    return axios.get(`movie/getbymid`, { params: { mid: mid } });
  }

  addSupporters(uid, suid) {
    return axios.get("/users/addsupporters", {
      params: { uid: uid, suid: suid },
    });
  }
  getBySearchValue(title) {
    return axios.get("/songs/getbytitle", { params: { title: title } });
  }
  getTrending() {
    return axios.get("/songs/gettrending");
  }

  addPlayList(uid, playlist) {
    return axios.post(`/users/addplaylist`, playlist, { params: { uid: uid } });
  }
  getLikedSongs(uid) {
    return axios.get(`/songs/getlikedsongs`, { params: { uid: uid } });
  }
  getSongById(sid) {
    return axios.get("/songs/getById", { params: { sid: sid } });
  }
  getPlayList(pid) {
    return axios.get("/playlists/getPlayList", { params: { pid: pid } });
  }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new UserServices();

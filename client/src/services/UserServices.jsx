import { axios } from "../api/axios";

class UserServices {
  getAllUsers() {
    return axios.get(`/users/all`);
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
    return axios.put(`/users/updateprofile`, {
      params: { uid: uid, profile: profile },
    });
  }
  getUser(uid) {
    return axios.get(`/users/getuser`, { params: { uid: uid } });
  }
  addLikedSong(uid, sid) {
    console.log(uid, sid);
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
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new UserServices();

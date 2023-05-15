import { axios } from "../api/axios";

class UserServices {
  getAllUsers() {
    return axios.get(`/users/all`);
  }
  signUpUser(user) {
    return axios.post(`/users/signup`, user);
  }
  signInUser(email) {
    return axios.get(`/users/login`, { params: { email: email } });
  }
  updateProfile(uid, profile) {
    return axios.put(`/users/updateprofile/${uid}/${profile}`);
  }
  getUser(uid) {
    return axios.get(`/users/getuser`, { params: { uid: uid } });
  }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new UserServices();

import { axios } from "../api/axios";

/* eslint-disable import/no-anonymous-default-export */
class AdminUserService {
    getAllUsers() {
        return axios.get('/users/all');
    }
}

export default new AdminUserService();
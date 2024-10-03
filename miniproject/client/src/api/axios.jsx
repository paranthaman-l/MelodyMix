import axois from 'axios'

const baseURL = process.env.REACT_APP_API_BASE_URL;
export const axios = axois.create({
    baseURL:baseURL
})  
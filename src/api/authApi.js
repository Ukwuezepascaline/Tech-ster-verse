import axios from "axios";

const BASE_URL = "https://techsterverse.onrender.com/api/v1/";

export const authApi = axios.create({
    baseURL: BASE_URL,
});
import axios from "axios";

export const instanse = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY" : "bc69cce5-6188-4f66-bc76-7ddedd85e699"}
})
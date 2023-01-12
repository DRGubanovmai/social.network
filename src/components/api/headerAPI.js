import {instanse} from "./api";

export const authMe = () => {
    return instanse.get(`auth/me`)
}
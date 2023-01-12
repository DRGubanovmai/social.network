import {instanse} from "./api";

export const getUsers = (pageSize, p) => {
    return instanse.get(`users?count=${pageSize}&page=${p}`);
}

export const followUser = (userId) => {
    return instanse.post(`follow/${userId}`);
}

export const unfollowUser = (userId) => {
    return instanse.delete(`follow/${userId}`);
}

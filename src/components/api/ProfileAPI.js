import {instanse} from "./api";

export const getUserProfile = (userId) => {
    return instanse.get(`profile/${userId}`)
}

export const getUserStatus = (userId) => {
    return instanse.get(`profile/status/${userId}`)
}

export const updateUserStatus = (status) => {
    return instanse.put(`profile/status`, {status})
}

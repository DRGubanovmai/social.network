import {followUser, getUsers, unfollowUser} from "../components/api/usersAPI";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_CURRENT_PAGES_SHOWED = 'SET_CURRENT_PAGES_SHOWED';
const SET_FETCHING = 'SET_FETCHING';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 21,
    currentPage: 1,
    currentPagesShowed: [2, 3, 4],
    isFetching: false
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users:  state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users:  state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_CURRENT_PAGES_SHOWED:
            return {...state, currentPagesShowed: action.currentPagesShowed}
        case SET_FETCHING:
            return {...state, isFetching: action.isFetching}
        default:
            return state;
    }
}

export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setCurrentPagesShowed = (currentPagesShowed) => ({type: SET_CURRENT_PAGES_SHOWED, currentPagesShowed});
export const setFetching = (isFetching) => ({type: SET_FETCHING, isFetching});

export const getUsersThunk = (pageSize, currentPage) => {
    return (dispatch) => {
        dispatch(setFetching(true));

        getUsers(pageSize, currentPage).then(response => {
            dispatch(setUsers(response.data.items));
            dispatch(setTotalUsersCount(response.data.totalCount));
            dispatch(setFetching(false));
        });
    }
}

export const onFollow = (userId) => {
    return (dispatch) => {
        followUser(userId)
            .then(response => {
                    if (response.data.resultCode === 0) {
                        dispatch(follow(userId));
                    }
                }
            );
    }
}

export const onUnfollow = (userId) => {
    return (dispatch) => {
        unfollowUser(userId)
            .then(response => {
                    if (response.data.resultCode === 0) {
                        dispatch(unfollow(userId));
                    }
                }
            );
    }
}

export default usersReducer;
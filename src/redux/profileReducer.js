import {getUserProfile, getUserStatus, updateUserStatus} from "../components/api/ProfileAPI";

const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const ADD_POST = 'ADD_POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
        posts: [
            {id: '1', message: '213', likes: '12'},
            {id: '2', message: '2feqw13', likes: '2'},
            {id: '3', message: '213fqwe', likes: '122'}],
        newPostText: '',
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_POST_TEXT: {
            return  {
                ...state,
                newPostText: action.newText
            };
        }
        case ADD_POST: {
            let newPost = {
                id: '4',
                message: state.newPostText,
                likes: '0'
            };
            return  {
                ...state,
                posts: [...state.posts, newPost]
            };
        }
        case SET_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
        default:
            return state;
    }


}

export const updateNewPostText = (newText) => ({type: UPDATE_NEW_POST_TEXT, newText: newText})
export const addPost = () => ({type: ADD_POST})
export const setProfile = (profile) => {
    return ({type: SET_PROFILE, profile});
}
export const setStatus = (status) => {
    return ({type: SET_STATUS, status});
}

export const getUserProfileThunk = (userId) => {
    return (dispatch) => {
        getUserProfile(userId).then(
            response => {
                dispatch(setProfile(response.data));
            }
        );
    }
}

export const getUserStatusThunk = (userId) => {
    return (dispatch) => {
        getUserStatus(userId).then(
            response => {
                dispatch(setStatus(response.data));
            }
        );
    }
}

export const updateUserStatusThunk = (status) => {
    return (dispatch) => {
        updateUserStatus(status).then(
            response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(response.data.status));
                }
            }
        );
    }
}


export default profileReducer;
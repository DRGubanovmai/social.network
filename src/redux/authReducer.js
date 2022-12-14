import {authMe} from "../components/api/headerAPI";

const SET_AUTH_DATA = 'SET_AUTH_DATA';

let initialState = {
    isAuth: false,
    userId: null,
    login: null,
    email: null
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

export const setAuthData = (userId, login, email) => ({type: SET_AUTH_DATA, data: {userId, login, email}});

export const auth = () => {
    return (dispatch) => {
        authMe().then(
            response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data;
                    dispatch(setAuthData(id, login, email));
                }
            }
        );
    }
}

export default authReducer;
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const ADD_POST = 'ADD_POST';
const SET_PROFILE = 'SET_PROFILE';

let initialState = {
        posts: [
            {id: '1', message: '213', likes: '12'},
            {id: '2', message: '2feqw13', likes: '2'},
            {id: '3', message: '213fqwe', likes: '122'}],
        newPostText: '',
    profile: null
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
        default:
            return state;
    }


}

export const updateNewPostText = (newText) => ({type: UPDATE_NEW_POST_TEXT, newText: newText})
export const addPost = () => ({type: ADD_POST})
export const setProfile = (profile) => {
    return ({type: SET_PROFILE, profile});
}

export default profileReducer;
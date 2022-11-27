const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const ADD_MESSAGE = 'ADD_MESSAGE';

let initialState = {
    dialogsData: [
        {name: '123', id: 1},
        {name: 'f1fgewq', id: '2'},
        {name: 'f1fgeqfw', id: '3'},
        {name: 'f1fgeq', id: '4'},
        {name: 'f1geqf`', id: '5'}],
    messages: [
        {message: 'r21', id: '1'},
        {message: 'r2gew1', id: '2'},
        {message: 'r2vasd1', id: '3'}],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            };
        case ADD_MESSAGE:
            let newMessage = {
                id: '4',
                message: state.newMessageText
            };
            return {
                ...state,
                messages: [...state.messages, newMessage]
            };
        default:
            return state;
    }
}

export const updateNewMessageTextActionCreator = (newText) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: newText});

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})

export default dialogsReducer;
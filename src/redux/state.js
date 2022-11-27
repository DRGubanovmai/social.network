// import dialogsReducer from "./dialogsReducer";
// import profileReducer from "./profileReducer";
//
// const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
// const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
// const ADD_POST = 'ADD_POST';
// const ADD_MESSAGE = 'ADD_MESSAGE';
//
// let store = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: '1', message: '213', likes: '12'},
//                 {id: '2', message: '2feqw13', likes: '2'},
//                 {id: '3', message: '213fqwe', likes: '122'}],
//             newPostText: ''
//         },
//         dialogPage: {
//             dialogsData: [
//                 {name: '123', id: 1},
//                 {name: 'f1fgewq', id: '2'},
//                 {name: 'f1fgeqfw', id: '3'},
//                 {name: 'f1fgeq', id: '4'},
//                 {name: 'f1geqf`', id: '5'}],
//             messages: [
//                 {message: 'r21', id: '1'},
//                 {message: 'r2gew1', id: '2'},
//                 {message: 'r2vasd1', id: '3'}],
//             newMessageText: ''
//         }
//     },
//
//     getState() {
//         return this._state;
//     },
//
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },
//
//     _callSubscriber() {
//         console.log(123);
//     },
//
//     dispatch(action) {
//
//         debugger;
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
//
//         this._callSubscriber(this._state);
//         // switch (action.type) {
//         //     case UPDATE_NEW_POST_TEXT:
//         //         this._state.profilePage.newPostText = action.newText;
//         //         this._callSubscriber(this._state);
//         //         break;
//         //     case ADD_POST:
//         //         let newPost = {
//         //             id: '4',
//         //             message: this._state.profilePage.newPostText,
//         //             likes: '0'
//         //         };
//         //
//         //         this._state.profilePage.posts.push(newPost);
//         //
//         //         this._callSubscriber(this._state);
//         //         break;
//         //     case UPDATE_NEW_MESSAGE_TEXT:
//         //         debugger
//         //         this._state.dialogPage.newMessageText = action.newText;
//         //         this._callSubscriber(this._state);
//         //         break;
//         //     case ADD_MESSAGE:
//         //         debugger
//         //         let newMessage = {
//         //             id: '4',
//         //             message: this._state.dialogPage.newMessageText
//         //         };
//         //
//         //         this._state.dialogPage.messages.push(newMessage);
//         //
//         //         //this._state.dialogPage.newMessageText = ''
//         //         this._callSubscriber(this._state);
//         //         break;
//         //     default:
//         //         break;
//         // }
//     }
// }
//
//
//
// export default store;
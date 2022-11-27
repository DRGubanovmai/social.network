import React from "react";
import dialogs from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.dialogPage.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)

    let messagesElements = props.dialogPage.messages.map(m => <Message message={m.message}/>)

    let newMessage = React.createRef();

    let onAddMessage = () => {
        props.addMessage();
        props.updateNewPostText('');
    }

    let updateNewPostText = () => {
        let text = newMessage.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={dialogs.dialogs}>
            <div className={dialogs.menu}>
                {dialogsElements}
            </div>
            <div className={dialogs.messages}>
                {messagesElements}
                <textarea value={props.dialogPage.newMessageText} onChange={updateNewPostText} ref={newMessage}></textarea>
                <button onClick={onAddMessage}>Click</button>
            </div>
            <div>
            </div>
        </div>);
}

export default Dialogs;
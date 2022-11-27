import React from "react";
import dialogs from './../Dialogs.module.css';

const Message = (props) => {
    return (
        <div className={dialogs.message}>
            <div>
                <img src={''}/>
            </div>
            <div>
                {props.message}
            </div>
    </div>);
}

export default Message;
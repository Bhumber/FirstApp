import React from "react";
import classes from "./Message.module.css"

const Message = (props) => {
    return (
        <div className={classes.messageContainer}>
            <div className={classes.message}>
                <div className={classes.point}></div>
                <div>{props.sms}</div>
            </div>
            <div className={classes.myMess}>
                <div>{props.answer}</div>
                <div className={classes.point}></div>
            </div>
        </div>
    );
}

export default Message;
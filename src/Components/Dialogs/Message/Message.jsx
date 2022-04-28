import React from "react";
import classes from "./Message.module.css"

const Message = (props) => {
    return (
        <div className={classes.message}>{props.sms}</div>
    );
}

export default Message;
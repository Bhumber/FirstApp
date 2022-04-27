import React from "react";
import classes from "./Message.module.css"
import { NavLink } from 'react-router-dom';

const Message = (props) => {
    return (
        <div className={classes.message}>{props.sms}</div>
    );
}

export default Message;
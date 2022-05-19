import React from "react";
import classes from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, onMessageChangeActionCreator} from "./../../redux/dialogsReducer"

const Dialogs = (props) => {

    let sendMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let messageTextOnChange = (e) => {
        let text = e.target.value;
        props.dispatch(onMessageChangeActionCreator(text));
    }

    let dialogElements = props.state.dialogsData.map(d => <DialogItem name={d.name} id={d.id} /> );

    let messElements = props.state.messData.map(m => <Message sms={m.sms} /> )

    let Answer = props.state.incomingMess.map(a => <Message answer={a.answer} />)

    return (
        <div className={classes.container}>   
            <div className={classes.dialogs}>
                <div className={classes.dialogsItem}>
                    {dialogElements} 
                </div>

                <div className={classes.messages}>
                    {messElements}
                </div>

                <div>
                    {Answer}
                </div>
            </div>
            <div className={classes.sendMessage}>
                <textarea onChange={messageTextOnChange} value={props.state.messText}></textarea>
                <button onClick={sendMessage}>Send Message</button>
            </div>
        </div>        
    );
}



export default Dialogs;
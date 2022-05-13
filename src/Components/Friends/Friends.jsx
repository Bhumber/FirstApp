import React from "react";
import { NavLink } from "react-router-dom";
import  classes from './Friends.module.css';
import MyFriends from "./FriendsItem/FriendsItem";

const Friends = (props) => {
    let myFriends = props.state.friendsData.map(f => <MyFriends name={f.friendName} />)

    return (
        <div className={classes.friendsBox}>
            {myFriends}
        </div>
    )
}

export default Friends;
import React from "react";
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import InfoAbout from './InfoAbout/InfoAbout';

const Profile = () => {
    return (
        <div className={classes.content}>
          <div>
            <img src='https://www.ubackground.com/_ph/17/709425269.jpg' />
          </div>
          <InfoAbout />
          <MyPosts />
        </div>
    );
}
export default Profile;
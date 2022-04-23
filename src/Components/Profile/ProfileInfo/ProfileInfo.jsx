import React from "react";
import classes from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
      <div>
        <div className={classes.image}>
          <img src='https://www.ubackground.com/_ph/17/709425269.jpg' />
        </div>
        <div className={classes.content}>
          Ava+info
        </div>
      </div>
    );
}
export default ProfileInfo;
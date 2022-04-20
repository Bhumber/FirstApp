import React from "react";
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div className={classes.content}>
          <div>
            <img src='https://www.ubackground.com/_ph/17/709425269.jpg' />
          </div>
          <div>ava+description</div>
          <div>My posts
            <div>New post</div>
            <div className={classes.posts}>
              <div className={classes.item}>Post1</div>
              <div className={classes.item}>Post2</div>
            </div>
          </div>
        </div>
    );
}
export default Profile;
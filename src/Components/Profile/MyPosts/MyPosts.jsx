import React from "react";
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={classes.content}>
          <div>My posts 
            <div>
              <textarea></textarea>
            </div>
            <div>
              <button>Add post</button>
            </div>
            <div className={classes.posts}>
              <Post message='Hi, how are you ?' like='10'/>
              <Post message='Its my first post' like='15'/>
            </div>
          </div>
        </div>
    );
}
export default MyPosts;
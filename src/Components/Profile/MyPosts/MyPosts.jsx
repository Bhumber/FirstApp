import React from "react";
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let post = props.posts.map(p => <Post message={p.message} like={p.like} />)

  return (
      <div className={classes.content}>
        <div>My posts 
          <div className={classes.sendPost}>
            <div className={classes.textArea}>
              <textarea placeholder="Your news..." wrap="off" ></textarea>
            </div>
            <div className={classes.sendButton}>
              <button>Add</button>
            </div>
          </div>
          <div className={classes.posts}>
            { post }
          </div>
        </div>
      </div>
  );
}
export default MyPosts;
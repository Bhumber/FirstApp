import React from "react";
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  let postData = [
    {id: '1', message: 'Hi, how are you ?', like: '10'},
    {id: '2', message: 'Its my first post', like: '15'},
  ];

  let post = postData.map(p => <Post message={p.message} like={p.like}/>)

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
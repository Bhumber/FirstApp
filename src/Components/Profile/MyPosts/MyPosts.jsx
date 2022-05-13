import React from "react";
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let post = props.posts.map(p => <Post message={p.message} like={p.like} />);

  let newPostElement = React.createRef();

  let addPost = () => {
    
    let text = newPostElement.current.value;
    props.addPost(text);
    props.updateNewPostText('');
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };
  
  return (
      <div className={classes.content}>
        <div>My posts 
          <div className={classes.sendPost}>
            <div className={classes.textArea}>
              <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} placeholder="Your news..." wrap="off" />
            </div>
            <div>
              <button className={classes.sendButton} onClick={addPost}>Add</button>
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
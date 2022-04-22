import React from "react";
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
              <div className={classes.item}>{props.message}</div>
              <div>like {props.like}</div>
        </div>
    );
}
export default Post;
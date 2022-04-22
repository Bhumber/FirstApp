import React from "react";
import  classes from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={classes.nav}>
          <div className={classes.item}><a href="/profile">Profile</a></div>
          <div className={classes.item}><a href="/dialogs">Message</a></div>
          <div className={classes.item}><a href="/news">News</a></div>
          <div className={classes.item}><a href="/music">Music</a></div>
          <div className={classes.item}><a href="/settings">Settings</a></div>
        </nav>
    );
}
export default Nav;
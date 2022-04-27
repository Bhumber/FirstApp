import React from "react";
import { NavLink } from "react-router-dom";
import  classes from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={classes.nav}>
          <div className={classes.item}><NavLink to="/profile"><div>Profile</div></NavLink></div>
          <div className={classes.item}><NavLink to="/dialogs"><div>Message</div></NavLink></div>
          <div className={classes.item}><NavLink to="/news"><div>News</div></NavLink></div>
          <div className={classes.item}><NavLink to="/music"><div>Music</div></NavLink></div>
          <div className={classes.item}><NavLink to="/settings"><div>Settings</div></NavLink></div>
        </nav>
    );
}
export default Nav;
import React from 'react';
import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';
function MainNavigation() {
  return (
    <headers className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">AllMeetupsPage</Link>
          </li>
          <li>
            <Link to="/NewMeetup">NewMeetup</Link>
          </li>
          <li>
            <Link to="/Favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
    </headers>
  );
}

export default MainNavigation;

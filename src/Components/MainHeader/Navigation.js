import React from 'react';

import classes from './Navigation.module.css';

const Navigation = (props) => {
let role=localStorage.getItem('role');
let name=localStorage.getItem('name');
  console.log(role);
  return (
    <nav className={classes.nav}>
      <ul>
      {props.isLoggedIn && (
          <li>
            <a href="#">Name:{name} </a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <a href="#">Role:{role} </a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;

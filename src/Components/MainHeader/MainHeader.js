import React from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  return (
   
      <Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} />
    
  );
};

export default MainHeader;

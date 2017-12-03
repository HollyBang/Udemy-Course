import React from 'react';

import classes from './Logo.css';
import burgerLogo from './../../assets/Images/burger-logo.png';

const logo = (props) => (
  <div className={classes.Logo}>
    <img alt='logo' src={burgerLogo} />
  </div>
);

export default logo;
import React from 'react';
import Logo from '../logo/logo';
import {Link} from 'react-router-dom';

function NotFoundScreen() {

  return (
    <div className="container">
      <div className="header__wrapper">
        <Logo/>
      </div>
      <h1>
        404.
        <br/>
        <small>Page not found</small>
      </h1>
      <h4>
        <Link style={{color: 'red'}} to='/'>Back To Main</Link>
      </h4>
    </div>
  );
}

export default NotFoundScreen;

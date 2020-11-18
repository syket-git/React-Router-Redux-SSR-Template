import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = ({ auth }) => {
  console.log('My Authentication is: ', auth);
  return (
    <nav>
      <div className="nav-wrapper">
        <Link className="brand-logo" to="/">
          React SSR
        </Link>

        <ul className="right">
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/admins">Admins</Link>
          </li>
          <li>
            {auth ? (
              <a href="/api/logout">Logout</a>
            ) : (
              <a href="/api/auth/google">Login</a>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Header);

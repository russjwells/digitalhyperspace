import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function Header(props, context) {
  return (
    <div className="header">
      <div className="header-content">
        <div name="sitemark">
          <h1 className="site-title">
            <Link to="/" onClick={props.handleLogoClick}>DIGITAL HYPERSPACE</Link>
          </h1>
          <h2 className="site-subtitle">
          Visionary Design & Technology
          </h2>
        </div>
        <div className="headerbuffer">
        </div>
        <nav className="navigation">
          <div className="navLink">
            <Link to="/projects" >Projects</Link>
          </div>
          <div className="navLink">
            <Link to="/team">Team</Link>
          </div>
          <div className="navLink">
            <Link to="/about">About</Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

Header.contextTypes = {
  router: React.PropTypes.object,
};

Header.propTypes = {
  onClick: PropTypes.func.isRequired,
  handleLogoClick: PropTypes.func,
};

export default Header;

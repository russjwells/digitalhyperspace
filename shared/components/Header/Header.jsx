import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function Header(props, context) {
  return (
    <div className="header">
      <div className="header-content">
        <h1 className="site-title">
          <Link to="/" onClick={props.handleLogoClick}>Digital Hyperspace</Link>
        </h1>
        <h2 className="site-subtitle">
        Visionary Design & Technology
        </h2>
        <nav className="navigation">
          <Link to="/projects" >Projects</Link>
          <Link to="/team">Team</Link>
          <Link to="/about">About</Link>
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

import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function Header(props, context) {
  return (
    <div className="header">
      <div className="header-content">
        <h1 className="site-title">
          <Link to="/" onClick={props.handleLogoClick}>Digital Hyperspace</Link>
        </h1>
        {
          context.router.isActive('/', true)
            ? <a className="add-post-button" href="#" onClick={props.onClick}>Add Post</a>
            : null
        }
        <Link to="/projects">Projects</Link>
        <Link to="/team">Team</Link>
        <Link to="/about">Mission</Link>
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

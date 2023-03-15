import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div className="nav-wrapper #673ab7 deep-purple">
        <Link to="/" className="brand-logo">
          Quote App
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/create-quote">CreateQuote</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

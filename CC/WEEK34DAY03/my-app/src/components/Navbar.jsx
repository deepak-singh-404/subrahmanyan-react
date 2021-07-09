import React from "react";
import { Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <h4 className="navbar-brand mt-1">
          <Link to="#">Brand</Link>
        </h4>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button type="button" className="btn">
                <Link to="/profile">
                  <li>Profile</li>
                </Link>
              </button>
            </li>
            <li className="nav-item">
              <button type="button" className="btn">
                <Link to="/video">
                  <li>Videos</li>
                </Link>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default React.memo(Navbar);

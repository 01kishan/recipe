import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/images/logo.png';
import "../css/common.css";

const Header = () => {
  return (
    <header className="sticky-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-danger shadow">
        <div className="container-fluid">
          {/* Logo */}
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Logo" style={{ height: "40px" }} />
          </a>

          {/* Navbar Toggler */}
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNavAltMarkup" 
            aria-controls="navbarNavAltMarkup" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible Navbar */}
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
              <NavLink to="/search" className="nav-link" activeClassName="active">Search</NavLink>
              <NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

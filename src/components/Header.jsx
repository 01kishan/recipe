import React from "react";
import logo from '../assets/images/logo.png';

const Header = () => {
  return (
    <header className="sticky-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
            <div className="navbar-nav ms-auto"> {/* ✅ Moved to right using 'ms-auto' */}
              <a className="nav-link active" aria-current="page" href="/">Home</a>
              <a className="nav-link" href="/search">Search</a>
              <a className="nav-link" href="/about">About</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

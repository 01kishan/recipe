import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <div className="container text-center">
        {/* Navigation Links */}
        <div className="mb-3">
          <a href="/" className="text-white me-3 text-decoration-none">Home</a>
          <a href="/search" className="text-white me-3 text-decoration-none">Search</a>
          <a href="/about" className="text-white me-3 text-decoration-none">About</a>
        </div>

        {/* Social Media Icons with Online Images */}
        <div className="mb-3">
          <a href="#" className="me-3">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" width="25" />
          </a>
          <a href="#" className="me-3">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" width="25" />
          </a>
          <a href="#" className="me-3">
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" width="25" />
          </a>
          <a href="#">
            <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="LinkedIn" width="25" />
          </a>
        </div>

        {/* Copyright Info */}
        <p className="m-0">&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

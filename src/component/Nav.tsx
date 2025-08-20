import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const Nav = () => {
  return (
    <div>
      <nav className="navbar-site">
        <div className="navbar-logo">
          <a href="/">
            <img src="./logo.png" alt="Logo" width={48} height={48} />
          </a>
        </div>
        <ul className="navbar-links">
          <li>
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
        <form className="navbar-search" action={"weather"}>
          <input
            type="text"
            name="city"
            placeholder="Search city..."
            className="search-bar"
          />
          <button className="btn-search" type="submit">
            <i className="bi bi-search"></i>
          </button>
        </form>
      </nav>
    </div>
  );
};

export default Nav;

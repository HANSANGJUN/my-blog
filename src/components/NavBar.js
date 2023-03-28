import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar bg-dark" data-bs-theme="dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              aria-current="page"
              to="/blogs"
            >
              Contents
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

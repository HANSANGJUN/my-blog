import React from 'react'
import { Link } from 'react-router-dom'


export default function NavBar() {
  return (
  <nav className="navbar bg-dark" data-bs-theme="dark">
  <div className="container">
    <Link className="navbar-brand" to="/">Home</Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/blogs">Post</Link>
        </li>
      </ul>
  </div>
</nav>
  )
}

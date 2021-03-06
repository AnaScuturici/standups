import React from 'react';
import { Link } from "react-router-dom";
import "./styles/Navbar.scss";

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo'>
            Morning Standups
        </div>
        <nav className='nav-item'>
            <ul>
                <li>
                    <Link to="/"></Link>
                </li>
                <li>
                    <Link to="/goals">Goals List</Link>
                </li>
                <li>
                    <Link to="/tracker">Weekly Tracker</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar;

import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';

export default function Navbar() {
    return(
        <nav className="navbar">
        <ul className='nav-links'>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/About">About</Link>
            </li>
            <li>
                <Link to="/Projects">Projects</Link>
            </li>
            <li>
                <Link to="/Resume">Resume</Link>               
            </li>
            <li>
                <Link to="/ReachMe">Reach Me</Link>
            </li>
        </ul>
      </nav>
    );
}
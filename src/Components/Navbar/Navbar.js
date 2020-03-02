import React from 'react'
import './Navbar.scss';
import logo from '../../logo.png'
export default function Navbar() {
    return (
        <div>
            <nav className="navbar bg-dark">
                <img src={logo} alt="city tours logo" />
                <ul className="nav-links">
                    <li>
                        <a href="/" className="nav-link">
                            home
                        </a>
                    </li>
                    <li>
                        <a href="/" className="nav-link">
                            about
                        </a>
                    </li>
                    <li>
                        <a href="/" className="nav-link active">
                            tours
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}



import React, { useState } from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";


function Navbar() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  const iconTimes = <FontAwesomeIcon icon={faTimes} />;
  const iconBars = <FontAwesomeIcon icon={faBars} />;

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="in-line">
      <nav className="navbar1">
        <Link to="/" className="navbar1" onClick={closeMobileMenu}>
          <h2>Srinivasa Skin and General Hospital</h2>
        </Link>
      </nav>
      <nav className="navbar">
        <div className="menu-icon" onClick={handleClick}>
          <i>{click ? iconTimes : iconBars} </i>
          <i className={click ? "fas fa-time" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link onClick={closeMobileMenu} className="nav-links" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item" >
                <Link to="/contact"  onClick={closeMobileMenu}
                className="nav-links">Contact</Link>
              </li>
          {Auth.loggedIn() ? (
            <>
              <li className="nav-item">
                <Link
                  to="/appointments"
                  onClick={closeMobileMenu}
                  className="nav-links"
                >
                  Book Appointment
                </Link>
              </li>
              <li className="nav-item" >
                <Link to="/patient"  onClick={closeMobileMenu}
                className="nav-links">View Appointments</Link>
              </li>
            
          <li className="nav-item">
              <Link onClick={logout}  className="nav-links">
                Logout  </Link>
             </li>    
            </>
          ) : (
            <>
      
                <li className="nav-item">
                  <Link
                    onClick={closeMobileMenu}
                    className="nav-links"
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    onClick={closeMobileMenu}
                    className="nav-links"
                    to="/signup"
                  >
                    Signup
                  </Link>
                </li>
           
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
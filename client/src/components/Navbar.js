import React, { useState } from "react";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";


function Navbar() {
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
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/bookings"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Bookings
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>

        </ul>
      </nav>
    </div>
  );
}

export default Navbar;






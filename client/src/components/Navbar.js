import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="topnav" id="myTopnav">
        <h4 className=" title">Srinivasa Skin and General Hospital</h4>
        <ul>
          <li>
            <Link to={"/"} className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/bookings/"} className="link">
              Bookings
            </Link>
          </li>
          <li>
            <Link to={"/contact"} className="link">
              Contact
            </Link>
          </li>
       
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;

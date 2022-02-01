import React, { useState } from "react";
import { Menu } from "semantic-ui-react";

export function Navbar() {
  const [state, setState] = useState({ activeItem: "Home" });

  const handleItemClick = (e, { name }) => setState({ activeItem: name });

  const { activeItem } = state;

  return (
    <Menu secondary className="navbar">
      <Menu.Menu position = "left">
        <Menu.Item className="navitem"
          name="Srinivasa Hopsital">
          </Menu.Item>
      </Menu.Menu>
      <Menu.Menu position="right">
        <Menu.Item className="navitem"
          name="Home"
          active={activeItem === "Home"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="Bookings" className="navitem"
          active={activeItem === "Bookings"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="Contact" className="navitem"
          active={activeItem === "Contact"}
          onClick={handleItemClick}
        />
      </Menu.Menu>
    </Menu>
  );
}

export default Navbar;

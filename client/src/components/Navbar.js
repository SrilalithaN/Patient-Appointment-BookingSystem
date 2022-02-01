import React, { useState } from "react";
import { Menu } from "semantic-ui-react";

export function Navbar() {
  const [state, setState] = useState({ activeItem: "Home" });

  const handleItemClick = (e, { name }) => setState({ activeItem: name });

  const { activeItem } = state;

  return (
    <Menu secondary>
      <Menu.Menu position="right">
        <Menu.Item
          name="Home"
          active={activeItem === "Home"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="Bookings"
          active={activeItem === "Bookings"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="Contact"
          active={activeItem === "Contact"}
          onClick={handleItemClick}
        />
      </Menu.Menu>
    </Menu>
  );
}

export default Navbar;

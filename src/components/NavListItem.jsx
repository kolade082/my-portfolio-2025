import React from "react";
import "./navListItem.css";

function NavListItem({ item, navOnClick }) {
  const handleClick = (e) => {
    e.preventDefault();
    navOnClick(item._id, item.target);
  };

  return (
    <li>
      <a
        href="#"
        className={`nav-link ${item.active ? "active" : null}`}
        onClick={handleClick}
      >
        {item.name}
      </a>
    </li>
  );
}

export default NavListItem;

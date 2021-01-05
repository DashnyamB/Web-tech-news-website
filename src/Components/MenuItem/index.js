import React from "react";
import "./style.scss";
const MenuItem = (props) => {
  return (
    <li className="menu-item">
      <a href={props.link}>{props.menuName}</a>
    </li>
  );
};

export default MenuItem;

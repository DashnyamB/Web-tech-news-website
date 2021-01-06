import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
const MenuItem = (props) => {
  return (
    <li className="menu-item">
      <Link to={props.link}>{props.menuName}</Link>
    </li>
  );
};

export default MenuItem;

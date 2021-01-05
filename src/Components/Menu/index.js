import React from "react";
import MenuItem from "../MenuItem";
import "./style.scss";

const Menu = () => {
  return (
    <ul className="menu">
      <MenuItem link="/" menuName="Нүүр хуудас" />
      <MenuItem link="/" menuName="Мэдээ оруулах" />
    </ul>
  );
};

export default Menu;

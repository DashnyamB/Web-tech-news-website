import React from "react";
import Logo from "../Logo";
import Menu from "../Menu";
import "./style.scss";

const Header = (props) => {
  return (
    <header className="header wrapper">
      <figure className="header__hamburger">
        <svg
          onClick={props.toggleMobileMenu}
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="26"
          height="26"
          viewBox="0 0 26 26"
        >
          <path d="M 0 4 L 0 6 L 26 6 L 26 4 Z M 0 12 L 0 14 L 26 14 L 26 12 Z M 0 20 L 0 22 L 26 22 L 26 20 Z"></path>
        </svg>
      </figure>
      <Logo />
      <nav className="header__nav">
        <Menu />
      </nav>
    </header>
  );
};

export default Header;

import React from "react";
import Logo from "../Logo";
import Menu from "../Menu";
import Shadow from "../Shadow";
import "./style.scss";

const MobileMenu = (props) => {
  let classes = ["mobile-menu"];
  if (props.show) {
    classes = ["mobile-menu mobile-menu--open"];
  }
  return (
    <section>
      <Shadow onClick={props.toggleMobileMenu} show={props.show} />
      <div className={classes.join(" ")}>
        <div className="mobile-menu__logo">
          <div className="mobile-menu__logo--text">
            <Logo />
            <span>Мэдээллийн вебсайт</span>
          </div>
        </div>

        <nav className="mobile-menu__nav">
          <Menu />
        </nav>
      </div>
    </section>
  );
};

export default MobileMenu;

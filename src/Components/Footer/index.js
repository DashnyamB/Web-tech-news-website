import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer wrapper">
      <div className="footer__copyright">
        Оюуны өмчөөр хамгаалагдав &#169; <Link to="/">Eagle.mn</Link> 2021
      </div>
    </footer>
  );
};

export default Footer;

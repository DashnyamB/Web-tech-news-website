import React, { useState } from "react";
import Header from "../../Components/Header";
import MobileMenu from "../../Components/MobileMenu";
import FrontPage from "../FrontPage";
import "./App.css";

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    console.log("Hamburger Clicked");
    setMobileMenuOpen((prevState) => !prevState);
    console.log(mobileMenuOpen);
  };
  return (
    <div className="App">
      <Header toggleMobileMenu={toggleMobileMenu} />
      <MobileMenu toggleMobileMenu={toggleMobileMenu} show={mobileMenuOpen} />
      <FrontPage />
    </div>
  );
};

export default App;

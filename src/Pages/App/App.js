import React, { useState } from "react";
import Header from "../../Components/Header";
import MobileMenu from "../../Components/MobileMenu";
import FrontPage from "../FrontPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import AdminPage from "../AdminPage";

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    console.log("Hamburger Clicked");
    setMobileMenuOpen((prevState) => !prevState);
    console.log(mobileMenuOpen);
  };
  return (
    <BrowserRouter>
      <div className="App">
        <Header toggleMobileMenu={toggleMobileMenu} />
        <MobileMenu toggleMobileMenu={toggleMobileMenu} show={mobileMenuOpen} />
        <Switch>
          <Route path="/admin" component={AdminPage} />
          <Route path="/" component={FrontPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;

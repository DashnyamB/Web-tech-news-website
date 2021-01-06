import React from "react";
import FluidPost from "../../Components/FluidPost";
import Footer from "../../Components/Footer";
import LatestPost from "../../Components/LatestPost";
import PopularPost from "../../Components/PopularPost";
import "./style.scss";
const FrontPage = () => {
  return (
    <main className="front-page">
      <LatestPost />
      <PopularPost />
      <FluidPost />
      <Footer />
    </main>
  );
};

export default FrontPage;

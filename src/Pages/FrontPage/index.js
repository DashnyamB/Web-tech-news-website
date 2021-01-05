import React from "react";
import LatestPost from "../../Components/LatestPost";
import PopularPost from "../../Components/PopularPost";
import "./style.scss";
const FrontPage = () => {
  return (
    <main className="front-page">
      <LatestPost />
      <PopularPost />
    </main>
  );
};

export default FrontPage;

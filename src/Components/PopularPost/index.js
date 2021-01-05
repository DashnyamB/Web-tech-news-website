import React from "react";
import Cards from "../Cards";
import "./style.scss";

const PopularPost = () => {
  return (
    <section className="popular-post wrapper">
      <h1 className="popular-post__title">Хамгийн их үзэлттэй </h1>
      <Cards />
    </section>
  );
};

export default PopularPost;

import React from "react";
import Card from "../Card";
import "./style.scss";

const Cards = (props) => {
  return (
    <main className="cards">
      {props.posts.slice(0, 8).map((post) => (
        <Card post={post} />
      ))}
    </main>
  );
};

export default Cards;

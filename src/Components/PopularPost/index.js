import React, { useState, useEffect } from "react";

import Cards from "../Cards";
import axios from "../../axios";
import "./style.scss";

const PopularPost = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("/popularPost.json").then((res) => {
      console.log(Object.entries(res.data).reverse());
      setPosts(Object.entries(res.data).reverse());
    });
  }, []);
  console.log(posts);
  return (
    <section className="popular-post wrapper">
      <h1 className="popular-post__title">Хамгийн их үзэлттэй </h1>
      <Cards posts={posts} />
    </section>
  );
};

export default PopularPost;

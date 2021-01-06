import axios from "../../axios";
import React, { useState } from "react";
import "./style.scss";

const AddPost = () => {
  const [post, setPost] = useState({
    URL: "",
    title: "",
  });

  const getTitle = (event) => {
    console.log(event.target.value);
    setPost((prevState) => {
      return { ...prevState, title: event.target.value };
    });
    console.log("===>", post);
  };
  const getURL = (event) => {
    console.log(event.target.value);
    setPost((prevState) => {
      return { ...prevState, URL: event.target.value };
    });
    console.log("===>", post);
  };

  const sendPost = () => {
    if (post.title != "" && post.URL != "") {
      axios
        .post("/popularPost.json", post)
        .then((res) => {
          alert("Амжилттай хадгаллаа...");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Өгөгдөлөө бүрэн оруулна уу...");
    }
  };

  return (
    <section className="add-post wrapper">
      <div className="add-post__input">
        <input
          onChange={getTitle}
          type="text"
          placeholder="Нийтлэлийн гарчиг..."
          className="add-post__input__title"
        />
        <input
          onChange={getURL}
          type="text"
          placeholder="Зурагны URL"
          className="add-post__input__img"
        />
      </div>
      <button onClick={sendPost} className="add-post__btn">
        Нийтлэх
      </button>
    </section>
  );
};

export default AddPost;

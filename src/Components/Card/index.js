import React from "react";
import "./style.scss";

const Card = (props) => {
  return (
    <article className="card">
      <header className="card__header">
        <figure className="card__header__image">
          <img src={props.post[1].URL} alt="bla" />
        </figure>
        <div className="card__header__overlay">
          <button className="card__header__overlay__btn">Дэлгэрэнгүй</button>
        </div>
      </header>
      <footer className="card__footer">
        <h1 className="card__footer__title">{props.post[1].title}</h1>
      </footer>
    </article>
  );
};

export default Card;

import React from "react";
import "./style.scss";

const Card = (props) => {
  return (
    <article className="card">
      <header className="card__header">
        <figure className="card__header__image">
          <img
            src="https://content.ikon.mn/news/2021/1/5/lcbl7h_MPA_1331_x974.jpg"
            alt="bla"
          />
        </figure>
        <div className="card__header__overlay">
          <button className="card__header__overlay__btn">Дэлгэрэнгүй</button>
        </div>
      </header>
      <footer className="card__footer">
        <h1 className="card__footer__title">
          УИХ-ын гишүүн Н.Учралыг эмчлүүлэхээр БНСУ руу авч явжээ
        </h1>
      </footer>
    </article>
  );
};

export default Card;

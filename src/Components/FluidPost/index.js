import React from "react";
import "./style.scss";

const FluidPost = () => {
  return (
    <section className="fluid-post">
      <div className="fluid-post__overlay"></div>
      <article className="fluid-post__info wrapper">
        <h1 className="fluid-post__info__title">
          BLACKPINK Англи, Солонгосын аль хэлээр илүү дуулахыг хүсч байгаагаа
          хэллээ?
        </h1>
        <p className="fluid-post__info__except">
          Тэдний Lady Gaga – тай хамтран дуулсан ‘Sour Candy’ болон Selena Gomez
          – той гаргасан ‘Ice Cream’ гэх мэт Англи хэл дээр дуулсан дуунуудаасаа
          хойш Англи дээр дуу дуулахдаа чөлөөтэй гайхалтай дуулдаг болсон байх
          аа.
        </p>
        <button className="fluid-post__info__btn">Дэлгэрэнгүй</button>
      </article>
    </section>
  );
};

export default FluidPost;

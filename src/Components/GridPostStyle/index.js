import React from "react";
import "./style.scss";

const GridPostStyle = () => {
  return (
    <main className="grid-post">
      <article className="grid-post__one">
        <div className="grid-post__overlay">
          <h1 className="grid-post__title">
            Хэрвээ DC болон Marvel-ын баатрууд солигдвол ямар харагдах вэ?
          </h1>
        </div>
        <figure className="grid-post__image">
          <img src="https://i1.wp.com/wl-brightside.cf.tsp.li/resize/728x/jpg/9e4/d20/cb363b5d5da2199ee8541016ac.jpg?resize=728%2C466&ssl=1" />
        </figure>
      </article>
      <div className="grid-post__two">
        <article>
          <div className="grid-post__overlay">
            <h1 className="grid-post__title">
              BLACKPINK Англи, Солонгосын аль хэлээр илүү дуулахыг хүсч
              байгаагаа хэллээ?
            </h1>
          </div>
          <figure className="grid-post__image">
            <img src="https://i0.wp.com/biihen.com/wp-content/uploads/2020/11/5fbf721a7f3ac.jpg?resize=768%2C403&ssl=1" />
          </figure>
        </article>
        <article>
          <div className="grid-post__overlay">
            <h1 className="grid-post__title">
              Нэг л өдөр таны амыг аварч мэдэх 8 зөвлөгөө
            </h1>
          </div>
          <figure className="grid-post__image">
            <img src="https://i1.wp.com/biihen.com/wp-content/uploads/2020/11/4db940550eaaaa284988dfd32b.jpg?resize=1024%2C512&ssl=1" />
          </figure>
        </article>
      </div>
    </main>
  );
};

export default GridPostStyle;

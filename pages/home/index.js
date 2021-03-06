import React from "react";
import Header from "../layouts/header";
import style from "../../styles/Home.module.css";
import imgHat1 from "../assets/images/art-slider-01.png";
import imgHat2 from "../assets/images/art-slider-02.png";
import imgLine from "../assets/images/slider-art-lines.png";
function Home() {
  return (
    <div className={style.home}>
      <Header />
      <div className={style.introduce}>
        <div className={style.introduce__content}>
          <div className={style.introduce__content_title}>
            <img className={style.img_hat} src={imgHat1}></img>
            <div className={style.content__title_text}>Wellcome to</div>
            <img className={style.img_hat} src={imgHat2}></img>
          </div>
          <div className={style.introduce__content_name}>Resto sevent</div>
          <div className={style.introduce__content_line}>
            <img src={imgLine}></img>
          </div>
          <div className={style.introduce__content_time}>
            <div className={style.time__title}>Opening hours</div>
            <div className={style.time__schedule1}>
              Mon-fri: 08:00 am - 23 pm
            </div>
            <div className={style.time__schedule2}>
              weekend: 08:00 am - 02 pm
            </div>
          </div>
          <div className={style.home__button}>See seasonal offers</div>
        </div>
      </div>
    </div>
  );
}

export default Home;

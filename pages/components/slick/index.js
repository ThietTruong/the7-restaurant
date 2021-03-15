import React from "react";
import Slider from "react-slick";
import style from "../../../styles/components/Slick.module.css";
import eventImg from "../../assets/images/event2-700x550.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../Button";

function Arrow(props) {
  const { className, style, onClick, customClass } = props;
  return (
    <div
      className={className + " " + customClass}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function Slick() {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Arrow customClass={style.slickNext} />,
    prevArrow: <Arrow customClass={style.slickPrev} />,
  };
  return (
    <div>
      <div className={style.container}>
        <Slider {...settings}>
          <div>
            <div className={style.slick__content}>
              <div className={style.slick__img}>
                <img src={eventImg} />
              </div>
              <div className={style.slick__des}>
                <div className={style.slick__title}>Upcomming</div>
                <div className={style.slick__name}>Rock {"&"} roll night</div>
                <div className={style.slick__time}>
                  December 05, 2016 21:00 Hs
                </div>
                <div className={style.slick__text}>
                  <p>
                    Phasellus in arcu non nunc porta elementum. Ut tempus varius
                    feugiat. Curabitur tincidunt risus sit amet ullamcorper
                    ullamcorper. Pellentesque neque massa, ornare et nibh vitae,
                    cursus tincidunt nibh. Cras sagittis ex lectus, at euismod
                    leo dictum quis. Proin tempor ipsum elit, a efficitur arcu
                    finibus sed.
                  </p>
                </div>
                <div className={style.button}>
                  <Button src="/" text="Book a table" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={style.slick__content}>
              <div className={style.slick__img}>
                <img src={eventImg} />
              </div>
              <div className={style.slick__des}>
                <div className={style.slick__title}>Upcomming</div>
                <div className={style.slick__name}>Rock {"&"} roll night</div>
                <div className={style.slick__time}>
                  December 05, 2016 21:00 Hs
                </div>
                <div className={style.slick__text}>
                  <p>
                    Phasellus in arcu non nunc porta elementum. Ut tempus varius
                    feugiat. Curabitur tincidunt risus sit amet ullamcorper
                    ullamcorper. Pellentesque neque massa, ornare et nibh vitae,
                    cursus tincidunt nibh. Cras sagittis ex lectus, at euismod
                    leo dictum quis. Proin tempor ipsum elit, a efficitur arcu
                    finibus sed.
                  </p>
                </div>
                <div className={style.button}>
                  <Button src="/" text="Book a table" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={style.slick__content}>
              <div className={style.slick__img}>
                <img src={eventImg} />
              </div>
              <div className={style.slick__des}>
                <div className={style.slick__title}>Upcomming</div>
                <div className={style.slick__name}>Rock {"&"} roll night</div>
                <div className={style.slick__time}>
                  December 05, 2016 21:00 Hs
                </div>
                <div className={style.slick__text}>
                  <p>
                    Phasellus in arcu non nunc porta elementum. Ut tempus varius
                    feugiat. Curabitur tincidunt risus sit amet ullamcorper
                    ullamcorper. Pellentesque neque massa, ornare et nibh vitae,
                    cursus tincidunt nibh. Cras sagittis ex lectus, at euismod
                    leo dictum quis. Proin tempor ipsum elit, a efficitur arcu
                    finibus sed.
                  </p>
                </div>
                <div className={style.button}>
                  <Button src="/" text="Book a table" />
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Slick;

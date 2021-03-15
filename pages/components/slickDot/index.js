import React from "react";
import Slider from "react-slick";
import style from "../../../styles/components/SlickDot.module.css";
import icon from "../../assets/images/icon.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

function SlickDot() {
  const settings = {
    dots: true,
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
          <div className={style.slick__container}>
            <div className={style.slick__icon}>
              <img src={icon} />
            </div>
            <div className={style.slick__des}>
              <p>
                In volutpat vehicula iaculis. Nullam dapibus velit vel suscipit
                malesuada. Morbi tincidunt, dui tristique tincidunt faucibus,
                purus sapien consectetur libero, vitae venenatis eros lacus
                vitae erat. Mauris tristique pretium tristique.
              </p>
            </div>
            <div className={style.slick__rate}>
              <img src="https://the7.io/restaurant/wp-content/uploads/sites/27/2016/07/rating.png"></img>
            </div>
            <div className={style.slick__name}>RICK JAMES</div>
            <div className={style.slick__subtxt}>Regular customer</div>
          </div>
          <div className={style.slick__container}>
            <div className={style.slick__icon}>
              <img src={icon} />
            </div>
            <div className={style.slick__des}>
              <p>
                In volutpat vehicula iaculis. Nullam dapibus velit vel suscipit
                malesuada. Morbi tincidunt, dui tristique tincidunt faucibus,
                purus sapien consectetur libero, vitae venenatis eros lacus
                vitae erat. Mauris tristique pretium tristique.
              </p>
            </div>
            <div className={style.slick__rate}>
              <img src="https://the7.io/restaurant/wp-content/uploads/sites/27/2016/07/rating.png"></img>
            </div>
            <div className={style.slick__name}>RICK JAMES</div>
            <div className={style.slick__subtxt}>Regular customer</div>
          </div>
          <div className={style.slick__container}>
            <div className={style.slick__icon}>
              <img src={icon} />
            </div>
            <div className={style.slick__des}>
              <p>
                In volutpat vehicula iaculis. Nullam dapibus velit vel suscipit
                malesuada. Morbi tincidunt, dui tristique tincidunt faucibus,
                purus sapien consectetur libero, vitae venenatis eros lacus
                vitae erat. Mauris tristique pretium tristique.
              </p>
            </div>
            <div className={style.slick__rate}>
              <img src="https://the7.io/restaurant/wp-content/uploads/sites/27/2016/07/rating.png"></img>
            </div>
            <div className={style.slick__name}>RICK JAMES</div>
            <div className={style.slick__subtxt}>Regular customer</div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default SlickDot;

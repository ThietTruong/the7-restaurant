import React from "react";
import Header from "../layouts/header";
import Button from "../components/Button";
import ItemMenu from "../components/ItemMenu";
import DatePickers from "../components/DatePickers";
import Slick from "../components/slick";
import style from "../../styles/Home.module.css";

// img banner
import imgHat1 from "../assets/images/art-slider-01.png";
import imgHat2 from "../assets/images/art-slider-02.png";
import imgLine from "../assets/images/slider-art-lines.png";

// img Discover Our History
import about1 from "../assets/images/DiscoverOurHistory/about1-800x540.jpg";
import about2 from "../assets/images/DiscoverOurHistory/about2-800x540.jpg";
import chef1 from "../assets/images/DiscoverOurHistory/chef1.jpg";
import disk from "../assets/images/dish.jpg";
import LoadImg from "../components/loadImg";
import SlickDot from "../components/slickDot";
import ItemInfor from "../components/itemInfor";
import ControlledOpenSelect from "../components/Select";
import Footer from "../layouts/footer";
function Home() {
  return (
    <div className={style.home}>
      <div className={style.banner}>
        <Header page="home" />
        <div className={style.introduce}>
          <div className={style.introduce__content}>
            <div className={style.introduce__content_title}>
              <img className={style.img_hat} src={imgHat2}></img>
              <div className={style.content__title_text}>Wellcome to</div>
              <img className={style.img_hat} src={imgHat1}></img>
            </div>
            <div className={style.introduce__content_name}>Resto sevent</div>
            <div className={style.introduce__content_line}>
              <img src={imgLine}></img>
            </div>
            <div className={style.introduce__content_time}>
              <div className={style.time__title}>Opening hours</div>
              <div className={style.time__schedule}>
                Mon-fri: 08:00 am - 23 pm
              </div>
              <div className={style.time__schedule}>
                weekend: 08:00 am - 02 pm
              </div>
            </div>
            <div className={style.home__button}>
              <a className={style.home__button_links}> See seasonal offers</a>
            </div>
          </div>
        </div>
      </div>
      <div className={style.ourhistory}>
        <div className={style.ourhistory__img}>
          <div className={style.img__about1}>
            <img src={about1}></img>
          </div>
          <div className={style.img__about2}>
            <img src={about2}></img>
          </div>
          <div className={style.img__chef1}>
            <img src={chef1}></img>
          </div>
        </div>
        <div className={style.ourhistory__des}>
          <div className={style.ourhistory__des_title}>Discover</div>
          <div className={style.ourhistory__des_name}>OUR HISTORY</div>
          <div className={style.ourhistory__des_text}>
            <p>
              In volutpat vehicula iaculis. Nullam dapibus velit vel suscipit
              malesuada. Morbi tincidunt, dui tristique tincidunt faucibus,
              purus sapien consectetur libero, vitae venenatis eros lacus vitae
              erat. Mauris tristique pretium tristique. Integer at nulla at eros
              suscipit suscipit vitae nec diam. Nullam dictum sed metus nec
              mollis.
            </p>
            <p>
              Vivamus id consectetur mauris. Praesent dui purus, interdum eget
              urna nec, mollis condimentum magna.
            </p>
          </div>
          <div className={style.ourhistory__des_button}>
            <Button href="#" text="readmore" />
          </div>
        </div>
      </div>
      <div className={style.seasonaloffers}>
        <div className={style.seasonaloffers__title}>
          <div className={style.seasonaloffers__title_text}>Check out our</div>
          <div className={style.seasonaloffers__title_name}>
            SEASONAL OFFERS
          </div>
          <div className={style.seasonaloffers__title_dash}>
            -------------------
          </div>
        </div>
        <div className={style.seasonaloffers__specials}>
          <div className={style.seasonaloffers__specials_img}>
            <img src={disk}></img>
          </div>
          <div className={style.seasonaloffers__specials_des}>
            <div className={style.specials_des}>
              <div className={style.seasonaloffers__specials_title}>
                SUMMER SPECIALS
              </div>
              <div className={style.seasonaloffers__specials_dash}>
                ----------
              </div>
              <div className={style.itemmenu}>
                <ItemMenu />
                <ItemMenu />
                <ItemMenu />
                <ItemMenu />
              </div>
            </div>
          </div>
        </div>
        <div className={style.seasonaloffers__menu}>
          <div className={style.seasonaloffers__menu_header}>
            <div className={style.seasonaloffers__menu_text}>Tasty dishes</div>
            <div className={style.seasonaloffers__menu_name}>FOR LUNCH</div>
            <div className={style.seasonaloffers__menu_time}>
              EVERYDAY 1:00 PM - 3:00 PM
            </div>
          </div>
          <div className={style.seasonaloffers__menu_listmenu}>
            <ItemMenu />
            <ItemMenu />
            <ItemMenu />
            <ItemMenu />
          </div>
        </div>
        <div className={style.seasonaloffers__button}>
          <Button text="View full menu" href="/" />
        </div>
      </div>
      <div className={style.upcoming}>
        <div className={style.upcoming__header}>
          <div className={style.upcoming__title}>Party with us!</div>
          <div className={style.upcoming__name}>Upcomming event</div>
          <div className={style.upcoming__dash}>------------</div>
        </div>
        <div className={style.upcoming__slide}>
          <Slick />
        </div>
      </div>
      <div className={style.ourinterior}>
        <div className={style.ourinterior__header}>
          <div className={style.ourinterior__title}>Gallery</div>
          <div className={style.ourinterior__name}>OUR INTERIOR</div>
          <div className={style.ourhistory__dash}>--------------</div>
        </div>
        <div className={style.ourhistory__list}>
          <LoadImg src="https://the7.io/restaurant/wp-content/uploads/sites/27/2016/07/gallery5-1.jpg" />
          <LoadImg src="https://the7.io/restaurant/wp-content/uploads/sites/27/2016/07/gallery5-1.jpg" />
          <LoadImg src="https://the7.io/restaurant/wp-content/uploads/sites/27/2016/07/gallery5-1.jpg" />
          <LoadImg src="https://the7.io/restaurant/wp-content/uploads/sites/27/2016/07/gallery5-1.jpg" />
          <LoadImg src="https://the7.io/restaurant/wp-content/uploads/sites/27/2016/07/gallery5-1.jpg" />
          <LoadImg src="https://the7.io/restaurant/wp-content/uploads/sites/27/2016/07/gallery5-1.jpg" />
        </div>
      </div>
      <div className={style.aboutus}>
        <div className={style.aboutus__header}>
          <div className={style.aboutus__title}>What people</div>
          <div className={style.aboutus__name}>SAY ABOUT US</div>
          <div className={style.aboutus__dash}>-------------</div>
        </div>
        <div className={style.aboutus__container}>
          <SlickDot />
        </div>
      </div>
      <div className={style.abpress}>
        <div className={style.abpress__header}>
          <div className={style.abpress__title}>Press</div>
          <div className={style.abpress__name}>ABOUT US</div>
          <div className={style.abpress__dash}>---------------</div>
        </div>
        <div className={style.abpress__content}>
          <div className={style.abpress__list}>
            <ItemInfor />
            <ItemInfor />
            <ItemInfor />
            <ItemInfor />
          </div>
        </div>
      </div>
      <div className={style.ourchesf}>
        <div className={style.ourchesf__container}>
          <div className={style.ourchesf__img}>
            <img src="https://the7.io/restaurant/wp-content/uploads/sites/27/2016/07/chef1-700x1000.jpg"></img>
          </div>
          <div className={style.ourchesf__des}>
            <div className={style.ourchesf__title}>The word from</div>
            <div className={style.ourchesf__name}>OUR CHEF</div>
            <div className={style.ourchesf__text}>
              <p>
                In volutpat vehicula iaculis. Nullam dapibus velit vel suscipit
                malesuada. Morbi tincidunt, dui tristique tincidunt faucibus,
                purus sapien consectetur libero, vitae venenatis eros lacus
                vitae erat. Mauris tristique pretium tristique. Integer at nulla
                at eros suscipit suscipit vitae nec diam. Nullam dictum sed
                metus nec mollis. Vivamus id consectetur mauris. Praesent dui
                purus, interdum eget urna nec, mollis condimentum magna
              </p>
              <p>
                In aliquet quis magna in placerat. Suspendisse nec efficitur
                purus. Curabitur vitae congue urna. Donec nec finibus orci, at
                luctus nisi. Donec nulla felis, auctor ac lacus et, varius
                congue leo. Donec eu tempor purus.
              </p>
              <p>
                Vivamus id consectetur mauris. Praesent dui purus – interdum
                eget urna nec!
              </p>
            </div>
            <div className={style.ourchesf__yourname}>Frederico Bagrationi</div>
            <div className={style.ourchesf__des_footer}>
              <div className={style.des_footer_text}>
                Resto Senven Head Chef
              </div>
              <div className={style.des_footer_img}>
                <img src="https://the7.io/restaurant/wp-content/uploads/sites/27/2016/07/frederick-200x82.png"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.booking}>
        <div className={style.booking__container}>
          <div className={style.booking__header}>
            <div className={style.booking__title}>Reserve</div>
            <div className={style.booking__name}>A TABLE</div>
            <div className={style.booking__dash}>-------------</div>
          </div>
          <div className={style.booking__content}>
            <div className={style.booking__content__img}>
              <img src="/_next/static/images/dish-2dee9a822de6993aeff9c9a68973bd02.jpg"></img>
            </div>
            <div className={style.booking__content__form}>
              <div className={style.booking__form_wrap}>
                <div className={style.input__form}>
                  <DatePickers />
                  <ControlledOpenSelect />
                  <ControlledOpenSelect />
                </div>

                <Button src="/" text="Find a table" />
              </div>

              <div className={style.content__form_text}>
                <p>
                  Vivamus id consectetur mauris. Praesent dui purus, interdum
                  eget urna nec, mollis magna. Fusce libero at porta gravida
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;

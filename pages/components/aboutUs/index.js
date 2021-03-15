import React from "react";
import style from "../../../styles/AboutUs.module.css";
import Header from "../../layouts/header";
import SlickDot from "../../components/slickDot";
// img Discover Our History
import about1 from "../../assets/images/DiscoverOurHistory/about1-800x540.jpg";
import about2 from "../../assets/images/DiscoverOurHistory/about2-800x540.jpg";
import chef1 from "../../assets/images/DiscoverOurHistory/chef1.jpg";
import InforTeam from "../InforTeam";
import Footer from "../../layouts/footer";
function AboutUs() {
  return (
    <div className={style.aboutus}>
      <div className={style.banner}>
        <Header page="aboutus" />
        <div className={style.introduce}>
          <div className={style.introduce__content}>
            <div className={style.introduce__content_name}>About Us</div>

            <div className={style.introduce__content_time}>
              <div className={style.time__schedule}>Home / about us</div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.our}>
        <div className={style.our__list}>
          <div className={style.our__item}>
            <div className={style.our__title}>Our</div>
            <div className={style.our__name}>PHILOSOPHY</div>
            <div className={style.our__text}>
              <p>
                In volutpat vehicula iaculis. Nullam dapibus velit vel suscipit
                malesuada. Morbi tincidunt, dui tristique tincidunt faucibus,
                purus sapien consectetur libero, vitae venenatis eros lacus
                vitae erat. Mauris tristique pretium tristique. Integer at nulla
                at eros suscipit suscipit vitae nec diam. Nullam dictum sed
                metus nec mollis
              </p>
            </div>
          </div>
          <div className={style.our__item}>
            <div className={style.our__title}>Our</div>
            <div className={style.our__name}>PHILOSOPHY</div>
            <div className={style.our__text}>
              <p>
                In volutpat vehicula iaculis. Nullam dapibus velit vel suscipit
                malesuada. Morbi tincidunt, dui tristique tincidunt faucibus,
                purus sapien consectetur libero, vitae venenatis eros lacus
                vitae erat. Mauris tristique pretium tristique. Integer at nulla
                at eros suscipit suscipit vitae nec diam. Nullam dictum sed
                metus nec mollis
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={style.dhistory}>
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
                purus sapien consectetur libero, vitae venenatis eros lacus
                vitae erat. Mauris tristique pretium tristique. Integer at nulla
                at eros suscipit suscipit vitae nec diam. Nullam dictum sed
                metus nec mollis.
              </p>
              <p>
                Vivamus id consectetur mauris. Praesent dui purus, interdum eget
                urna nec, mollis condimentum magna.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={style.teamchef}>
        <div className={style.teamchef__header}>
          <div className={style.teamchef__title}>Meet our</div>
          <div className={style.teamchef__name}>Team</div>
          <div className={style.teamchef__dash}>---------------</div>
        </div>
        <div className={style.teamchef__content}>
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
                    In volutpat vehicula iaculis. Nullam dapibus velit vel
                    suscipit malesuada. Morbi tincidunt, dui tristique tincidunt
                    faucibus, purus sapien consectetur libero, vitae venenatis
                    eros lacus vitae erat. Mauris tristique pretium tristique.
                    Integer at nulla at eros suscipit suscipit vitae nec diam.
                    Nullam dictum sed metus nec mollis. Vivamus id consectetur
                    mauris. Praesent dui purus, interdum eget urna nec, mollis
                    condimentum magna
                  </p>
                  <p>
                    In aliquet quis magna in placerat. Suspendisse nec efficitur
                    purus. Curabitur vitae congue urna. Donec nec finibus orci,
                    at luctus nisi. Donec nulla felis, auctor ac lacus et,
                    varius congue leo. Donec eu tempor purus.
                  </p>
                  <p>
                    Vivamus id consectetur mauris. Praesent dui purus – interdum
                    eget urna nec!
                  </p>
                </div>
                <div className={style.ourchesf__yourname}>
                  Frederico Bagrationi
                </div>
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
          <div className={style.ourchesf_sub}>
            <InforTeam />
            <InforTeam />
            <InforTeam />
          </div>
        </div>
      </div>
      <div className={style.sbus}>
        <div className={style.sbus__header}>
          <div className={style.sbus__title}>What people</div>
          <div className={style.sbus__name}>SAY ABOUT US</div>
          <div className={style.sbus__dash}>--------------</div>
        </div>
        <div className={style.sbus__container}>
          <SlickDot />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;

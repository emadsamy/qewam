import React, { Component } from "react";
import { Link } from "react-router-dom";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import classes from "./BlogPage.module.css";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

class BlogPage extends Component {
  render() {
    return (
      <div className={classes.container}>
        <div className="container">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            navigation={{
              nextEl: ".next-slide-latest",
              prevEl: ".prev-slide-latest",
            }}
            speed={800}
            // pagination={{
            //   el: "#pagination",
            //   clickable: true,
            //   type: "fraction",
            // }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide className={classes.swiperSlide}>
              <div className={classes.details}>
                <div className={`mb-4 ${classes.title}`}>
                  Thriving Saudi startup scene to produce top-30 companies, WEF
                  hears
                </div>
                <div className={`text mb-3`}>
                  DEAD SEA, Jordan: Saudi Arabia’s startup scene is “moving
                  faster than anyone can imagine” and is set to create hundreds
                  of thousands of jobs over the coming years, the World Economic
                  Forum in Jordan heard on Saturday.
                </div>
                <Link to="/" className={`simple-btn`}>
                  Read More
                </Link>
              </div>
              <div className={classes.view}>
                <img
                  src={require("../assets/img/image.jpeg")}
                  alt="Swiper View"
                  className={`img-fluid ${classes.swiperView}`}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide className={classes.swiperSlide}>
              <div className={classes.details}>
                <div className={`mb-4 ${classes.title}`}>
                  Thriving Saudi startup scene to produce top-30 companies, WEF
                  hears
                </div>
                <div className={`text mb-3`}>
                  DEAD SEA, Jordan: Saudi Arabia’s startup scene is “moving
                  faster than anyone can imagine” and is set to create hundreds
                  of thousands of jobs over the coming years, the World Economic
                  Forum in Jordan heard on Saturday.
                </div>
                <Link to="/" className={`simple-btn`}>
                  Read More
                </Link>
              </div>
              <div className={classes.view}>
                <img
                  src={require("../assets/img/image.jpeg")}
                  alt="Swiper View"
                  className={`img-fluid ${classes.swiperView}`}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide className={classes.swiperSlide}>
              <div className={classes.details}>
                <div className={`mb-4 ${classes.title}`}>
                  Thriving Saudi startup scene to produce top-30 companies, WEF
                  hears
                </div>
                <div className={`text mb-3`}>
                  DEAD SEA, Jordan: Saudi Arabia’s startup scene is “moving
                  faster than anyone can imagine” and is set to create hundreds
                  of thousands of jobs over the coming years, the World Economic
                  Forum in Jordan heard on Saturday.
                </div>
                <Link to="/" className={`simple-btn`}>
                  Read More
                </Link>
              </div>
              <div className={classes.view}>
                <img
                  src={require("../assets/img/image.jpeg")}
                  alt="Swiper View"
                  className={`img-fluid ${classes.swiperView}`}
                />
              </div>
            </SwiperSlide>
          </Swiper>

          <div className={classes.arrowsContainer}>
            <button className={`prev-slide-latest`}>&lt;</button>
            <div className={classes.arrowContainerDiv}>Latest Articles</div>
            <button className={`next-slide-latest`}>&gt;</button>
          </div>

          {/* <div className="swiper-container">
            <div className="swiper-wrapper">
              <div className={`swiper-slide ${classes.swiperSlide}`}>
                <div className={classes.details}>
                  <div className={`mb-4 ${classes.title}`}>
                    Thriving Saudi startup scene to produce top-30 companies,
                    WEF hears
                  </div>
                  <div className={`text mb-3`}>
                    DEAD SEA, Jordan: Saudi Arabia’s startup scene is “moving
                    faster than anyone can imagine” and is set to create
                    hundreds of thousands of jobs over the coming years, the
                    World Economic Forum in Jordan heard on Saturday.
                  </div>
                  <Link to="/" className={`simple-btn`}>
                    Read More
                  </Link>
                </div>
                <div className={classes.view}>
                  <img
                    src={require("../assets/img/image.jpeg")}
                    alt="Swiper View"
                    className={`img-fluid ${classes.swiperView}`}
                  />
                </div>
              </div>
              <div className={`swiper-slide ${classes.swiperSlide}`}>2</div>
              <div className={`swiper-slide ${classes.swiperSlide}`}>3</div>
            </div>
            <button class="swiper-button-prev" />
            <button class="swiper-button-next" />
          </div> */}
        </div>
      </div>
    );
  }
}

export { BlogPage };

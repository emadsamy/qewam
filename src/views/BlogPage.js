import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Swiper, Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/swiper-bundle.css";
import classes from "./BlogPage.module.css";

class BlogPage extends Component {
  componentDidMount() {
    const swiper = new Swiper(".swiper-container", {
      // speed: 500,
      navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
      },
    });
  }
  render() {
    return (
      <div className={classes.container}>
        <div className="container">
          <div className="swiper-container">
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
          </div>
        </div>
      </div>
    );
  }
}

export { BlogPage };

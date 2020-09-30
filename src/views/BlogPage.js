import React, { Component } from "react";
import { Link } from "react-router-dom";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import classes from "./BlogPage.module.css";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

class BlogPage extends Component {
  state = {
    rows: [
      {
        id: 1,
        title:
          "Thriving Saudi startup scene to produce top-30 companies, WEF hears",
        body:
          "DEAD SEA, Jordan: Saudi Arabia’s startup scene is “moving faster than anyone can imagine” and is set to create hundreds of thousands of jobs over the coming years, the World Economic Forum in Jordan heard on Saturday.",
        image: require("../assets/img/image.jpeg"),
      },
      {
        id: 2,
        title:
          "Thriving Saudi startup scene to produce top-30 companies, WEF hears",
        body:
          "DEAD SEA, Jordan: Saudi Arabia’s startup scene is “moving faster than anyone can imagine” and is set to create hundreds of thousands of jobs over the coming years, the World Economic Forum in Jordan heard on Saturday.",
        image: require("../assets/img/image.jpeg"),
      },
      {
        id: 3,
        title:
          "Thriving Saudi startup scene to produce top-30 companies, WEF hears",
        body:
          "DEAD SEA, Jordan: Saudi Arabia’s startup scene is “moving faster than anyone can imagine” and is set to create hundreds of thousands of jobs over the coming years, the World Economic Forum in Jordan heard on Saturday.",
        image: require("../assets/img/image.jpeg"),
      },
    ],
    blogs: [
      {
        id: 1,
        title: "A Saudi-based startup capitalizes on gig-economy opportunities",
        image: require("../assets/img/image.jpg"),
      },
      {
        id: 2,
        title:
          "Save your money and energy by hiring a professional virtual assistant",
        image: require("../assets/img/image.jpg"),
      },
      {
        id: 3,
        title:
          "Thriving Saudi startup scene to produce top-30 companies, WEF hears",
        image: require("../assets/img/image.jpg"),
      },
    ],
  };

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
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 1,
                spaceBetween: 50,
              },
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {this.state.rows.map((item, index) => {
              return (
                <SwiperSlide className={classes.swiperSlide}>
                  <div className={classes.details}>
                    <div className={`mb-4 ${classes.title}`}>{item.title}</div>
                    <div className={`text mb-3`}>{item.body}</div>
                    <Link to="/" className={`simple-btn`}>
                      Read More
                    </Link>
                  </div>
                  <div className={classes.view}>
                    <img
                      src={item.image}
                      alt="Swiper View"
                      className={`img-fluid ${classes.swiperView}`}
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div className={classes.arrowsContainer}>
            <button className={`prev-slide-latest`}>&lt;</button>
            <div className={classes.arrowContainerDiv}>Latest Articles</div>
            <button className={`next-slide-latest`}>&gt;</button>
          </div>

          <div className={classes.blogsContainer}>
            <div className="bg-title mb-2">Blogs</div>
            <div className="text mb-4">
              Read the latest stories from our world.
            </div>
            <Swiper
              spaceBetween={20}
              // slidesPerView={3}
              navigation={{
                nextEl: ".next-slide-blog",
                prevEl: ".prev-slide-blog",
              }}
              speed={800}
              pagination={{
                el: "#fraction",
                clickable: true,
                type: "fraction",
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                570: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
              }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {this.state.blogs.map((item, index) => {
                return (
                  <SwiperSlide className={classes.swiperBlog}>
                    <div className="blog-card">
                      <img src={item.image} alt="" className="img-fluid" />
                      <Link to={`blog/${item.id}`}>
                        <div className="title">{item.title}</div>
                      </Link>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className={classes.arrowsContainer}>
              <button className={`prev-slide-blog`}>&lt;</button>
              <div id="fraction" className={classes.arrowContainerDiv}>
                Latest Articles
              </div>
              <button className={`next-slide-blog`}>&gt;</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { BlogPage };

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Blog.css";

const Blog = (props) => {
  const [blog, setBlog] = useState([
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
  ]);
  return (
    <div className="blogs-container">
      <div className="container">
        <div className="bg-title mb-2">{props.title}</div>
        <div className="text d-flex justify-content-between mb-4">
          Read the latest stories from our world.
          <a href="link.com" className="simple-btn">
            Read More
          </a>
        </div>
        <div className="row">
          {blog.map((item) => {
            return (
              <div className="col-lg-4 col-sm-6">
                <div className="blog-card">
                  <img src={item.image} alt="" className="img-fluid" />
                  <Link to={`blog/${item.id}`}>
                    <div className="title">{item.title}</div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { Blog };

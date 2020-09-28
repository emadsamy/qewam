import React, { Component } from "react";
import classes from "./ViewBlog.module.css";
import { Blog } from "../components";

class ViewBlog extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={classes.viewContainer}>
          <div className="container">
            <div className={classes.content}>
              <img
                src={require("../assets/img/image.jpg")}
                className={`img-fluid ${classes.viewImage}`}
                alt="View"
              />
              <div className={`title ${classes.title}`}>
                Thriving Saudi startup scene to produce top-30
                <br /> companies, WEF hears
              </div>
              <div className={`mb-3 mt-4 ${classes.date}`}>
                <div>08 April 2019</div>
                <div className="ml-3 mr-3">|</div> <div>Share</div>
                <div className={classes.vl}></div>
                <div className={classes.socialmedia}>
                  <a href="">
                    <img
                      src={require("../assets/img/socialmedia/linkedin.svg")}
                      alt="Linkedin"
                    />
                  </a>
                  <a href="">
                    <img
                      src={require("../assets/img/socialmedia/twitter.svg")}
                      alt="twitter"
                    />
                  </a>
                  <a href="">
                    <img
                      src={require("../assets/img/socialmedia/facebook.svg")}
                      alt="Facebook"
                    />
                  </a>
                </div>
              </div>
              <div className={`text ${classes.text}`}>
                DEAD SEA, Jordan: Saudi Arabia’s startup scene is “moving faster
                than anyone can imagine” and is set to create hundreds of
                thousands of jobs over the coming years, the World Economic
                Forum in Jordan heard on Saturday. The region’s most successful
                tech ventures — like ride-hailing service Careem, which Uber
                recently agreed to buy for $3.1 billion, and web portal Maktoob,
                which was acquired by Yahoo in 2009 — have emerged from more
                established startup hubs of Dubai and Amman. But the next wave
                is seen emerging from Saudi Arabia, panelists said at the
                regional meeting of the World Economic Forum (WEF) at the Dead
                Sea. Saudi Arabia’s Energy Minister Khalid Al-Falih told the
                forum that he expects the startups of today to be among the
                Kingdom’s biggest companies in a decade’s time. “Our enterprises
                will multiply in size,” he said. “I predict that by 2030,
                companies that we don’t know today will be among the top 20, 30
                companies in Saudi Arabia. They will be driven by innovation,
                they will be driven by young people, they will be driven by
                women.” The government has a role to play in encouraging more
                Saudi startups, along with a culture where young people
                experiment in business, the minister added.
              </div>
            </div>

            <div className={classes.content}>
              <img
                src={require("../assets/img/image.jpg")}
                className={`img-fluid ${classes.viewImage}`}
                alt="View"
              />
              <div className={`text ${classes.text}`}>
                DEAD SEA, Jordan: Saudi Arabia’s startup scene is “moving faster
                than anyone can imagine” and is set to create hundreds of
                thousands of jobs over the coming years, the World Economic
                Forum in Jordan heard on Saturday. The region’s most successful
                tech ventures — like ride-hailing service Careem, which Uber
                recently agreed to buy for $3.1 billion, and web portal Maktoob,
                which was acquired by Yahoo in 2009 — have emerged from more
                established startup hubs of Dubai and Amman. But the next wave
                is seen emerging from Saudi Arabia, panelists said at the
                regional meeting of the World Economic Forum (WEF) at the Dead
                Sea. Saudi Arabia’s Energy Minister Khalid Al-Falih told the
                forum that he expects the startups of today to be among the
                Kingdom’s biggest companies in a decade’s time. “Our enterprises
                will multiply in size,” he said. “I predict that by 2030,
                companies that we don’t know today will be among the top 20, 30
                companies in Saudi Arabia. They will be driven by innovation,
                they will be driven by young people, they will be driven by
                women.” The government has a role to play in encouraging more
                Saudi startups, along with a culture where young people
                experiment in business, the minister added.
              </div>
              <div className={`mb-3 mt-4 ${classes.date}`}>
                <div>08 April 2019</div>
                <div className="ml-3 mr-3">|</div> <div>Share</div>
                <div className={classes.vl}></div>
                <div className={classes.socialmedia}>
                  <a href="">
                    <img
                      src={require("../assets/img/socialmedia/linkedin.svg")}
                      alt="Linkedin"
                    />
                  </a>
                  <a href="">
                    <img
                      src={require("../assets/img/socialmedia/twitter.svg")}
                      alt="twitter"
                    />
                  </a>
                  <a href="">
                    <img
                      src={require("../assets/img/socialmedia/facebook.svg")}
                      alt="Facebook"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Blog title="Read more" />
      </React.Fragment>
    );
  }
}

export { ViewBlog };

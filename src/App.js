import React from "react";
import { Route, Switch } from "react-router-dom";
import { Landing, ViewPricing, About, ViewBlog, BlogPage } from "./views";
import { Navbar, NotFound, Contact, Toolbar } from "./components";
import ScrollToTop from "./components/ScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <ScrollToTop />
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/pricing">
          <ViewPricing />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/blog">
          <BlogPage />
        </Route>
        <Route path="/blog/:id">
          <ViewBlog />
        </Route>
        <Route component={NotFound}></Route>
      </Switch>
      <Contact />
      <Toolbar />
    </div>
  );
}

export default App;

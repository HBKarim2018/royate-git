import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoadingPage from "../includes/loadingPage";
import Header from "../includes/header";
import ToTop from "../includes/toTop";
import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";
import Menu from "../pages/menu";
import Shop from "../pages/shop";
import Reservation from "../pages/reservation";
import Blog from "../pages/blog";
import Post from "../pages/post";
import Error404 from "./error";

const Router = () => {
  return (
    <div className="font_family_body font_color_body body_size text-center">
      <LoadingPage />
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/menu" component={Menu} />
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/reservation" component={Reservation} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/post" component={Post} />
            <Route exact path="/error" component={Error404} />
          </Switch>
        </div>
      </BrowserRouter>
      <ToTop />
    </div>
  );
};

export default Router;

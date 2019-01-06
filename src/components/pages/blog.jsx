import React from "react";

import { Helmet } from "react-helmet";
import "../../about_page_style.css";
import "../../blog_page_style.css";
import Footer from "../includes/footer";
const Shop = () => {
  return (
    <div>
      <Helmet>
        <title>ROYATE |Blog|</title>
      </Helmet>
      <section className="height_video_fullscreen background_blog background_responsive p-0">
        <div className="position-relative w-100 z_index_1 padding_x_high height_video_fullscreen backgroud_dark_opacity">
          <h1 className="text-light font_weight_boldest head_line_height head_size_high">
            BLOG MASONRY
          </h1>
          <span className="font_family_span font_color_span head_span_size_normal mb-5 font_weight_normal">
            ~ The things you want to find ~
          </span>
        </div>
      </section>

      <section className="container">
        <div className="row">
          <div className="col-lg-4 my-5 col-md-6 col-sm-12 margin_bottom_responsive_5">
            <div className="border_post_news background_olive special_style_post_background background_noRepeat">
              <div className="overflow_hidden height_img_post">
                <img
                  className="img-responsive w-100 img_hover_style img_hover_position"
                  src="./images/blog_page/post_thumb1.jpg"
                  alt="thumb"
                />
                <div className="date_body position-absolute">
                  <div className="date">
                    <span className="date_day d-block">25</span>
                    <span className="date_month d-block">JUNE</span>
                  </div>
                </div>
              </div>
              <div className="main_post text-left padding_10">
                <h4>
                  <a className="head_size_low font_color_head" href="/post">
                    ON THE OTHER HAND
                  </a>
                </h4>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque.
                </p>
                <a className="font_color_head" href="/post">
                  READ MORE
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 my-5 col-md-6 col-sm-12 margin_bottom_responsive_5">
            <div className="border_post_news background_garlic special_style_post_background background_noRepeat">
              <div className="overflow_hidden height_img_post">
                <img
                  className="img-responsive w-100 img_hover_style img_hover_position"
                  src="./images/blog_page/post_thumb2.jpg"
                  alt="thumb"
                />
                <div className="date_body position-absolute">
                  <div className="date">
                    <span className="date_day d-block">16</span>
                    <span className="date_month d-block">JUNE</span>
                  </div>
                </div>
              </div>
              <div className="main_post text-left padding_10">
                <h4>
                  <a className="head_size_low font_color_head" href="/post">
                    CONTRARY TO POPULAR
                  </a>
                </h4>
                <p>
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil impedit quo minus id quod maxime placeat.
                </p>
                <a className="font_color_head" href="/post">
                  READ MORE
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 my-5 col-md-6 col-sm-12 margin_bottom_responsive_5">
            <div className="border_post_news background_mushroom special_style_post_background background_noRepeat">
              <div className="overflow_hidden height_img_post">
                <img
                  className="img-responsive w-100 img_hover_style img_hover_position"
                  src="./images/blog_page/post_thumb3.jpg"
                  alt="thumb"
                />
                <div className="date_body position-absolute">
                  <div className="date">
                    <span className="date_day d-block">09</span>
                    <span className="date_month d-block">MAY</span>
                  </div>
                </div>
              </div>
              <div className="main_post text-left padding_10">
                <h4>
                  <a className="head_size_low font_color_head" href="/post">
                    THIS BOOK IS A TREATISE
                  </a>
                </h4>
                <p>
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam
                  corporis suscipit laboriosam, nisi ut aliquid ex ea.
                </p>
                <a className="font_color_head" href="/post">
                  READ MORE
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-lg-4 my-5 col-md-6 col-sm-12 margin_bottom_responsive_5">
            <div className="border_post_news background_olive special_style_post_background background_noRepeat">
              <div className="overflow_hidden height_img_post">
                <img
                  className="img-responsive w-100 img_hover_style img_hover_position"
                  src="./images/blog_page/post_thumb7.jpg"
                  alt="thumb"
                />
                <div className="date_body position-absolute">
                  <div className="date">
                    <span className="date_day d-block">25</span>
                    <span className="date_month d-block">JUNE</span>
                  </div>
                </div>
              </div>
              <div className="main_post text-left padding_10">
                <h4>
                  <a className="head_size_low font_color_head" href="/post">
                    ON THE OTHER HAND
                  </a>
                </h4>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque.
                </p>
                <a className="font_color_head" href="/post">
                  READ MORE
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 my-5 col-md-6 col-sm-12 margin_bottom_responsive_5">
            <div className="border_post_news background_garlic special_style_post_background background_noRepeat">
              <div className="overflow_hidden height_img_post">
                <img
                  className="img-responsive w-100 img_hover_style img_hover_position"
                  src="./images/blog_page/post_thumb8.jpg"
                  alt="thumb"
                />
                <div className="date_body position-absolute">
                  <div className="date">
                    <span className="date_day d-block">16</span>
                    <span className="date_month d-block">JUNE</span>
                  </div>
                </div>
              </div>
              <div className="main_post text-left padding_10">
                <h4>
                  <a className="head_size_low font_color_head" href="/post">
                    CONTRARY TO POPULAR
                  </a>
                </h4>
                <p>
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil impedit quo minus id quod maxime placeat.
                </p>
                <a className="font_color_head" href="/post">
                  READ MORE
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 my-5 col-md-6 col-sm-12 margin_bottom_responsive_5">
            <div className="border_post_news background_mushroom special_style_post_background background_noRepeat">
              <div className="overflow_hidden height_img_post">
                <img
                  className="img-responsive w-100 img_hover_style img_hover_position"
                  src="./images/blog_page/post_thumb6.jpg"
                  alt="thumb"
                />
                <div className="date_body position-absolute">
                  <div className="date">
                    <span className="date_day d-block">09</span>
                    <span className="date_month d-block">MAY</span>
                  </div>
                </div>
              </div>
              <div className="main_post text-left padding_10">
                <h4>
                  <a className="head_size_low font_color_head" href="/post">
                    THIS BOOK IS A TREATISE
                  </a>
                </h4>
                <p>
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam
                  corporis suscipit laboriosam, nisi ut aliquid ex ea.
                </p>
                <a className="font_color_head" href="/post">
                  READ MORE
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-lg-4 my-5 col-md-6 col-sm-12 margin_bottom_responsive_5">
            <div className="border_post_news background_olive special_style_post_background background_noRepeat">
              <div className="overflow_hidden height_img_post">
                <img
                  className="img-responsive w-100 img_hover_style img_hover_position"
                  src="./images/blog_page/post_thumb4.jpg"
                  alt="thumb"
                />
                <div className="date_body position-absolute">
                  <div className="date">
                    <span className="date_day d-block">25</span>
                    <span className="date_month d-block">JUNE</span>
                  </div>
                </div>
              </div>
              <div className="main_post text-left padding_10">
                <h4>
                  <a className="head_size_low font_color_head" href="/post">
                    ON THE OTHER HAND
                  </a>
                </h4>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque.
                </p>
                <a className="font_color_head" href="/post">
                  READ MORE
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 my-5 col-md-6 col-sm-12 margin_bottom_responsive_5">
            <div className="border_post_news background_garlic special_style_post_background background_noRepeat">
              <div className="overflow_hidden height_img_post">
                <img
                  className="img-responsive w-100 img_hover_style img_hover_position"
                  src="./images/blog_page/post_thumb5.jpg"
                  alt="thumb"
                />
                <div className="date_body position-absolute">
                  <div className="date">
                    <span className="date_day d-block">16</span>
                    <span className="date_month d-block">JUNE</span>
                  </div>
                </div>
              </div>
              <div className="main_post text-left padding_10">
                <h4>
                  <a className="head_size_low font_color_head" href="/post">
                    CONTRARY TO POPULAR
                  </a>
                </h4>
                <p>
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil impedit quo minus id quod maxime placeat.
                </p>
                <a className="font_color_head" href="/post">
                  READ MORE
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 my-5 col-md-6 col-sm-12 margin_bottom_responsive_5">
            <div className="border_post_news background_mushroom special_style_post_background background_noRepeat">
              <div className="overflow_hidden height_img_post">
                <img
                  className="img-responsive w-100 img_hover_style img_hover_position"
                  src="./images/blog_page/post_thumb6.jpg"
                  alt="thumb"
                />
                <div className="date_body position-absolute">
                  <div className="date">
                    <span className="date_day d-block">09</span>
                    <span className="date_month d-block">MAY</span>
                  </div>
                </div>
              </div>
              <div className="main_post text-left padding_10">
                <h4>
                  <a className="head_size_low font_color_head" href="/post">
                    THIS BOOK IS A TREATISE
                  </a>
                </h4>
                <p>
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam
                  corporis suscipit laboriosam, nisi ut aliquid ex ea.
                </p>
                <a className="font_color_head" href="/post">
                  READ MORE
                </a>
              </div>
            </div>
          </div>
        </div>
        <button className="background_dark_off mx-auto border_radius background_none border_none border_hover_none p-2 px-4 background_light_hover">
          <a className="link_light_hover" href="/">
            LOAD MORE
          </a>
        </button>
      </section>
      <Footer />
    </div>
  );
};

export default Shop;

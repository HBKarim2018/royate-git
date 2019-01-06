import React from "react";

const News = () => {
  return (
    <section className="container">
      <div className="mb-5">
        <h2 className="font_weight_bold head_line_height head_size_normal font_color_head">
          LATEST NEWS
        </h2>
        <span className="font_family_span font_color_span head_span_size_normal mb-5 font_weight_normal">
          ~ Great articles ~
        </span>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12 margin_bottom_responsive_5">
          <div className="border_post_news background_olive special_style_post_background background_noRepeat">
            <div className="overflow_hidden height_img_post">
              <img
                className="img-responsive w-100 img_hover_style img_hover_position"
                src="./images/post_thumbs/post_thumb4.jpg"
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

        <div className="col-lg-4 col-md-6 col-sm-12 margin_bottom_responsive_5">
          <div className="border_post_news background_garlic special_style_post_background background_noRepeat">
            <div className="overflow_hidden height_img_post">
              <img
                className="img-responsive w-100 img_hover_style img_hover_position"
                src="./images/post_thumbs/post_thumb5.jpg"
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

        <div className="col-lg-4 col-md-6 col-sm-12 margin_bottom_responsive_5">
          <div className="border_post_news background_mushroom special_style_post_background background_noRepeat">
            <div className="overflow_hidden height_img_post">
              <img
                className="img-responsive w-100 img_hover_style img_hover_position"
                src="./images/post_thumbs/post_thumb6.jpg"
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
    </section>
  );
};

export default News;

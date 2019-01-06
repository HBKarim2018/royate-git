import React from "react";

const Welcome = () => {
  return (
    <section className="container">
      <div className="mb-5">
        <h2 className="font_weight_bold head_line_height head_size_normal font_color_head">
          WELCOME TO ROYATE
        </h2>
        <span className="font_family_span font_color_span head_span_size_normal mb-5 font_weight_normal">
          ~ Luxury & Quality ~
        </span>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="height_img_post overflow_hidden">
            <img
              className="img-responsive w-100 img_hover_style img_hover_position"
              src="./images/post_thumbs/post_thumb1.jpg"
              alt="thumb"
            />
          </div>
          <div className="padding_top_10 padding_bottom_responsive_10">
            <h5>
              <a className="font_color_head" href="/post">
                PROFESSIONAL LEVEL
              </a>
            </h5>
            <p>
              Nor again is there anyone who loves or pursues or desires to
              obtain pain of itself, because it is pain, but because
              occasionally circumstances occur.
            </p>
            <a className="font_color_head" href="/post">
              <u>READ MORE</u>
            </a>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="height_img_post overflow_hidden">
            <img
              className="img-responsive w-100 img_hover_style img_hover_position"
              src="./images/post_thumbs/post_thumb2.jpg"
              alt="thumb"
            />{" "}
          </div>
          <div className="padding_top_10 padding_bottom_responsive_10">
            <h5>
              <a className="font_color_head" href="/post">
                FRESH FOOD GUARANTEED
              </a>
            </h5>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores.
            </p>
            <a className="font_color_head" href="/post">
              <u>READ MORE</u>
            </a>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="height_img_post overflow_hidden">
            <img
              className="img-responsive w-100 img_hover_style img_hover_position"
              src="./images/post_thumbs/post_thumb3.jpg"
              alt="thumb"
            />{" "}
          </div>
          <div className="padding_top_10 padding_bottom_responsive_10">
            <h5>
              <a className="font_color_head" href="/post">
                THE MENU IS PLENTIFUL
              </a>
            </h5>
            <p>
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus.
            </p>
            <a className="font_color_head" href="/post">
              <u>READ MORE</u>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;

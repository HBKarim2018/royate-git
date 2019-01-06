import React from "react";
import OwlCarousel from "react-owl-carousel2";
const options = {
  nav: true,
  items: 4,
  autoWidth: true,
  navElement: "div",
  itemElement: "div",
  loop: true,
  autoplay: true,
  autoplayHoverPause: true
};

const SpecialFood = () => {
  return (
    <section className="container">
      <div className="row">
        <div className="col-md-6">
          <div>
            <img
              className="w-100"
              src="./images/features/feature.jpg"
              alt="feature"
            />
          </div>
        </div>
        <div className="col-md-6 text-left">
          <h2 className="font_weight_bold head_line_height head_size_normal margin_top_responsive_5">
            <a className="font_color_head" href="/">
              BEEF STEAK WITH GREEN
            </a>
          </h2>
          <h2 className="font_weight_bold head_line_height head_size_normal mb-0 pb-4 font_color_head">
            - $45
          </h2>
          <p className="line_height_high mb-0 mb-4 overflow_y_scroll overflow_notscroll_responsive height_p">
            Nor again is there anyone who loves or pursues or desires to obtain
            pain of itself, because it is pain, but because occasionally
            circumstances occur in which toil and pain can procure him some
            great pleasure. To take a trivial example, which of us ever
            undertakes laborious physical exercise, except to obtain some
            advantage from it? But who has any right to find fault with a man
            who chooses to enjoy a pleasure that has no annoying consequences,
            or one who avoids a pain that produces no resultant pleasure
          </p>
          <ul className="list-unstyled star_rating_color mb-0 pb-4">
            <li className="d-inline-block pr-1">
              <i className="fa fa-star" />
            </li>
            <li className="d-inline-block pr-1">
              <i className="fa fa-star" />
            </li>
            <li className="d-inline-block pr-1">
              <i className="fa fa-star" />
            </li>
            <li className="d-inline-block pr-1">
              <i className="fa fa-star" />
            </li>
            <li className="d-inline-block pr-1">
              <i className="fa fa-star" />
            </li>
          </ul>
          <div>
            <OwlCarousel options={options}>
              <div className="text-center owl-item mx-3">
                <div>
                  <img
                    className="img_hover_style"
                    src="./images/features/feature_small1.png"
                    alt="feature"
                  />
                </div>
                <span className="d-block pt-3 pb-2 padding_bottom_responsive_0">
                  <a className="font_color_head" href="/">
                    Salat Banana Flower
                  </a>
                </span>
                <span>$25</span>
              </div>
              <div className="text-center owl-item mx-3">
                <div>
                  <img
                    className="img_hover_style"
                    src="./images/features/feature_small2.png"
                    alt="feature"
                  />
                </div>
                <span className="d-block pt-3 pb-2 padding_bottom_responsive_0">
                  <a className="font_color_head" href="/">
                    Beef Steak With Red
                  </a>
                </span>
                <span>$65</span>
              </div>
              <div className="text-center owl-item mx-3">
                <div>
                  <img
                    className="img_hover_style"
                    src="./images/features/feature_small3.png"
                    alt="feature"
                  />
                </div>
                <span className="d-block pt-3 pb-2 padding_bottom_responsive_0">
                  <a className="font_color_head" href="/">
                    Classic Linguini Fini
                  </a>
                </span>
                <span>$37</span>
              </div>
              <div className="text-center owl-item mx-3">
                <div>
                  <img
                    className="img_hover_style"
                    src="./images/features/feature_small4.png"
                    alt="feature"
                  />
                </div>
                <span className="d-block pt-3 pb-2 padding_bottom_responsive_0">
                  <a className="font_color_head" href="/">
                    Salat Banana Flower
                  </a>
                </span>
                <span>$40</span>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialFood;

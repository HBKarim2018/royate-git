import React from "react";

const Footer = () => {
  return (
    <section>
      <footer className="background_dark">
        <div className="container">
          <div className="py-5">
            <div className="my-5 margin_bottom_responsive_10">
              <img src="./images/logo/logo.png" alt="logo" />
            </div>
            <div className="row">
              <div className="col-md-3 margin_bottom_responsive_10">
                <h6 className="head_size_small text-light font_weight_boldest mb-3 pb-3">
                  ABOUT US
                </h6>
                <p className="font_color_body_num2">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusan-tium doloremque laudantium, totam rem aperiam,
                </p>
              </div>

              <div className="col-md-6 margin_bottom_responsive_10">
                <h6 className="head_size_small text-light font_weight_boldest mb-3 pb-3">
                  GET NEWS & OFFERS
                </h6>
                <div className="input-group w-75 mx-auto head_size_small mb-3">
                  <input
                    type="email"
                    className="form-control p-3 border border-secondary border_radius font_color_body_num2 background_none"
                    aria-label="Email"
                    placeholder="Enter your Email"
                    aria-describedby="basic-addon2"
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-outline-secondary border_radius"
                      type="button"
                    >
                      <i className="fa fa-envelope px-3" />
                    </button>
                  </div>
                </div>
                <ul className="list-unstyled pt-3">
                  <li className="d-inline-block mr-3">
                    <a
                      href="/"
                      className="head_size_low font_color_body font_color_body_icons"
                    >
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                  <li className="d-inline-block mr-3">
                    <a
                      href="/"
                      className="head_size_low font_color_body font_color_body_icons"
                    >
                      <i className="fa fa-facebook-square" />
                    </a>
                  </li>
                  <li className="d-inline-block mr-3">
                    <a
                      href="/"
                      className="head_size_low font_color_body font_color_body_icons"
                    >
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                  <li className="d-inline-block">
                    <a
                      href="/"
                      className="head_size_low font_color_body font_color_body_icons"
                    >
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-md-3 margin_bottom_responsive_10">
                <h6 className="head_size_small text-light font_weight_boldest mb-3 pb-3">
                  CONTACT US
                </h6>
                <p className="font_color_body_num2">
                  No 40 Baria Sreet 133/2 <br />+ (156) 1800-366-6666
                  <br />
                  Eric-82@example.com www.royate.com
                </p>
              </div>
            </div>
          </div>
          <hr className="m-0 border_top_offlight" />
          <p className="m-0 font_color_body_num2 py-5">
            @ 2018 hbkarim | All Rights Reserved
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;

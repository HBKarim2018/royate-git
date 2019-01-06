import React from "react";

import { Helmet } from "react-helmet";
import "../../about_page_style.css";
import "../../shop_page_style.css";
import Footer from "../includes/footer";
const Shop = () => {
  return (
    <div>
      <Helmet>
        <title>ROYATE |Shop|</title>
      </Helmet>
      <section className="height_video_fullscreen background_shop background_responsive p-0">
        <div className="position-relative w-100 z_index_1 padding_x_high height_video_fullscreen backgroud_dark_opacity">
          <h1 className="text-light font_weight_boldest head_line_height head_size_high">
            SHOP SINGLE
          </h1>
          <span className="font_family_span font_color_span head_span_size_normal mb-5 font_weight_normal">
            ~ Delicious food ~
          </span>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="sp-wrap w-100 m-0 mw-100 background_none border_none">
                <a
                  className="m-1"
                  href="/images/shop_page/image_viewer_photos/shop_food_3.jpg"
                >
                  <img
                    className="w-100"
                    src="/images/shop_page/image_viewer_photos/shop_food_3.jpg"
                    alt="food"
                  />
                </a>
                <a
                  className="m-1"
                  href="/images/shop_page/image_viewer_photos/shop_food_1.jpg"
                >
                  <img
                    className="w-100"
                    src="/images/shop_page/image_viewer_photos/shop_food_1.jpg"
                    alt="food"
                  />
                </a>
                <a
                  className="m-1"
                  href="/images/shop_page/image_viewer_photos/shop_food_2.jpg"
                >
                  <img
                    className="w-100"
                    src="/images/shop_page/image_viewer_photos/shop_food_2.jpg"
                    alt="food"
                  />
                </a>

                <a
                  className="m-1"
                  href="/images/shop_page/image_viewer_photos/shop_food_4.jpg"
                >
                  <img
                    className="w-100"
                    src="/images/shop_page/image_viewer_photos/shop_food_4.jpg"
                    alt="food"
                  />
                </a>
                <a
                  className="m-1"
                  href="/images/shop_page/image_viewer_photos/shop_food_5.jpg"
                >
                  <img
                    className="w-100"
                    src="/images/shop_page/image_viewer_photos/shop_food_5.jpg"
                    alt="food"
                  />
                </a>
                <a
                  className="m-1"
                  href="/images/shop_page/image_viewer_photos/shop_food_6.jpg"
                >
                  <img
                    className="w-100"
                    src="/images/shop_page/image_viewer_photos/shop_food_6.jpg"
                    alt="food"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-6 text-left">
              <h2 className="font_weight_bold head_line_height head_size_fonts margin_top_responsive_5">
                <a className="font_color_head" href="/">
                  BEEF STEAK WITH GREEN
                </a>
              </h2>
              <h2 className="font_weight_bold head_line_height head_size_fonts mb-0 font_color_head">
                - $45
                <span className="float-right mt-2">
                  <ul className="list-unstyled star_rating_color body_size mb-0">
                    <li className="d-inline-block pl-2">
                      <i className="fa fa-star" />
                    </li>
                    <li className="d-inline-block pl-2">
                      <i className="fa fa-star" />
                    </li>
                    <li className="d-inline-block pl-2">
                      <i className="fa fa-star" />
                    </li>
                    <li className="d-inline-block pl-2">
                      <i className="fa fa-star" />
                    </li>
                    <li className="d-inline-block pl-2">
                      <i className="fa fa-star" />
                    </li>
                  </ul>
                </span>
              </h2>
              <p className="line_height_high my-5 mt-3">
                Nor again is there anyone who loves or pursues or desires to
                obtain pain of itself, because it is pain, but because
                occasionally circumstances occur in which toil and pain can
                procure him some great pleasure. To take a trivial example,
                which of us ever undertakes laborious.
              </p>
              <form className="mt-3">
                <input
                  type="number"
                  min="0"
                  step="1"
                  defaultValue="1"
                  className="w-25 p-3 mb-4 mr-2 border_post_news"
                  size="4"
                />
                <button className="background_dark_off border_radius background_none border_none border_hover_none p-2 px-4 background_light_hover">
                  <a className="link_light_hover" href="/">
                    ADD TO CART
                  </a>
                </button>
              </form>
              <div className="mt-3">
                <h4 className="d-inline-block body_size font_color_head">
                  SKU:
                </h4>{" "}
                <span className="font_color_body_num2">0036982</span>
              </div>
              <div>
                <h4 className="d-inline-block body_size font_color_head">
                  CATEGORY:
                </h4>{" "}
                <span>
                  <a className="font_color_body_num2" href="/">
                    Other
                  </a>
                </span>
              </div>
              <div className="mb-3">
                <h4 className="d-inline-block body_size font_color_head">
                  TAG:
                </h4>{" "}
                <span>
                  <a className="font_color_body_num2" href="/">
                    Bakery
                  </a>
                  ,
                  <a className="font_color_body_num2" href="/">
                    {" "}
                    Sea Food
                  </a>
                </span>
              </div>
              <ul className="list-unstyled pt-3">
                <li className="d-inline-block mr-3">
                  <a
                    href="/"
                    className="head_size_low font_color_body font_color_body_icons"
                  >
                    <i className="fa fa-twitter" />
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
                    <i className="fa fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="container text-left">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <h5 className="head_size_small">
              <a
                className="nav-link active font_color_head"
                id="home-tab"
                data-toggle="tab"
                href="#home"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                Description
              </a>
            </h5>
          </li>
          <li className="nav-item">
            <h5 className="head_size_small">
              <a
                className="nav-link font_color_head"
                id="profile-tab"
                data-toggle="tab"
                href="#profile"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Additional Information
              </a>
            </h5>
          </li>
          <li className="nav-item">
            <h5 className="head_size_small">
              <a
                className="nav-link font_color_head"
                id="contact-tab"
                data-toggle="tab"
                href="#contact"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                Review(<span>0</span>)
              </a>
            </h5>
          </li>
        </ul>
        <div className="tab-content p-3" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <p>
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system, and expound the actual teachings of the
              great explorer of the truth, the master-builder of human
              happiness. No one rejects, dislikes, or avoids pleasure itself,
              because it is pleasure, but because those who do not know how to
              pursue pleasure rationally encounter consequences that are
              extremely painful.
            </p>
          </div>
          <div
            className="tab-pane fade"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <table className="table-bordered w-100">
              <tbody>
                <tr>
                  <th scope="row" className="p-4 w-25">
                    <h5 className="head_size_small"> Weight</h5>
                  </th>
                  <td className="p-4 w-75">2kg</td>
                </tr>
                <tr>
                  <th scope="row" className="p-4 w-25">
                    <h5 className="head_size_small"> Dimensions</h5>
                  </th>
                  <td className="p-4 w-75">15 x 20 x 15 cm</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            className="tab-pane fade"
            id="contact"
            role="tabpanel"
            aria-labelledby="contact-tab"
          >
            <h5 className="mt-3">BE THE FIRST TO REVIEW</h5>
            <p>
              Your email address will not be published. Required fields are
              marked.
            </p>
            <span>Your rating</span>
            <span className="mt-2">
              <ul className="list-unstyled star_rating_color body_size mb-0 d-inline-block">
                <li className="d-inline-block pl-2">
                  <i className="fa fa-star" />
                </li>
                <li className="d-inline-block pl-2">
                  <i className="fa fa-star" />
                </li>
                <li className="d-inline-block pl-2">
                  <i className="fa fa-star" />
                </li>
                <li className="d-inline-block pl-2">
                  <i className="fa fa-star" />
                </li>
                <li className="d-inline-block pl-2">
                  <i className="fa fa-star" />
                </li>
              </ul>
            </span>
            <form className="formContact w-100 mt-4">
              <textarea
                className="w-100 p-3 mb-4"
                placeholder="ENTER MESSAGE"
                rows="7"
              />
              <input
                type="text"
                className="w-100 p-3 mb-4"
                placeholder="ENTER FULL NAME"
              />
              <input
                type="email"
                className="w-100 p-3 mb-4"
                placeholder="ENTER EMAIL"
              />
              <button className="background_dark_off border_radius background_none border_none border_hover_none p-2 px-4 background_light_hover">
                <a className="link_light_hover" href="/">
                  SUBMIT
                </a>
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="container">
        <h2 className="font_weight_boldest head_size_fonts mb-3">
          RELATED PRODUCTS
        </h2>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-xs-12 p-3">
            <div className="image_product text-center overflow_hidden my-4">
              <div className="cart_box">ADD TO CART</div>
              <img
                src="/images/shop_page/products/product_1.jpg"
                className="h-100 img-responsive image_product image_margin"
                alt="product"
              />
            </div>

            <a href="/" className="text-center font_color_head">
              <h5>Angela's Awesome</h5>
            </a>
            <ul className="list-unstyled star_rating_color body_size mb-0">
              <li className="d-inline-block pl-2">
                <i className="fa fa-star" />
              </li>
              <li className="d-inline-block pl-2">
                <i className="fa fa-star" />
              </li>
              <li className="d-inline-block pl-2">
                <i className="fa fa-star" />
              </li>
              <li className="d-inline-block pl-2">
                <i className="fa fa-star" />
              </li>
              <li className="d-inline-block pl-2">
                <i className="fa fa-star" />
              </li>
            </ul>
            <span className="head_size_small">$85</span>
          </div>

          <div className="col-lg-3 col-md-6 col-xs-12 p-3">
            <div className="image_product overflow_hidden my-4">
              <div className="cart_box">ADD TO CART</div>
              <img
                src="/images/shop_page/products/product_2.jpg"
                className="h-100 img-responsive image_product image_margin"
                alt="product"
              />
            </div>

            <a href="/" className="text-center font_color_head">
              <h5>Fluffy Pancakes</h5>
            </a>
            <ul className="list-unstyled star_rating_color body_size mb-0">
              <li className="d-inline-block pl-2">
                <i className="fa fa-star" />
              </li>
              <li className="d-inline-block pl-2">
                <i className="fa fa-star" />
              </li>
              <li className="d-inline-block pl-2">
                <i className="fa fa-star" />
              </li>
              <li className="d-inline-block pl-2">
                <i className="fa fa-star" />
              </li>
              <li className="d-inline-block pl-2">
                <i className="fa fa-star" />
              </li>
            </ul>
            <span className="head_size_small">$85</span>
          </div>

          <div className="col-lg-3 col-md-6 col-xs-12 p-3">
            <div className="image_product overflow_hidden my-4">
              <div className="cart_box">ADD TO CART</div>
              <img
                src="/images/shop_page/products/product_3.jpg"
                className="h-100 img-responsive image_product image_margin"
                alt="product"
              />
            </div>

            <a href="/" className="text-center font_color_head">
              <h5>Baked Teriyaki Chicken</h5>
            </a>
            <ul className="list-unstyled star_rating_color body_size mb-0">
              <li className="d-inline-block pl-2">
                <i className="fa fa-star" />
              </li>
              <li className="d-inline-block pl-2">
                <i className="fa fa-star" />
              </li>
              <li className="d-inline-block pl-2">
                <i className="fa fa-star" />
              </li>
              <li className="d-inline-block pl-2">
                <i className="fa fa-star" />
              </li>
              <li className="d-inline-block pl-2">
                <i className="fa fa-star" />
              </li>
            </ul>
            <span className="head_size_small">$85</span>
          </div>

          <div className="col-lg-3 col-md-6 col-xs-12 p-3">
            <div className="image_product overflow_hidden my-4">
              <div className="cart_box">ADD TO CART</div>
              <img
                src="/images/shop_page/products/product_4.jpg"
                className="h-100 img-responsive image_product image_margin"
                alt="product"
              />
            </div>

            <a href="/" className="text-center font_color_head">
              <h5>Best Brownies</h5>
            </a>
            <ul className="list-unstyled star_rating_color body_size mb-0">
              <li className="d-inline-block pl-2">
                <i className="fa fa-star" />
              </li>
              <li className="d-inline-block pl-2">
                <i className="fa fa-star" />
              </li>
              <li className="d-inline-block pl-2">
                <i className="fa fa-star" />
              </li>
              <li className="d-inline-block pl-2">
                <i className="fa fa-star" />
              </li>
              <li className="d-inline-block pl-2">
                <i className="fa fa-star" />
              </li>
            </ul>
            <span className="head_size_small">$85</span>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Shop;

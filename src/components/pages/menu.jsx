import React from "react";

import { Helmet } from "react-helmet";
import "../../about_page_style.css";
import "../../menu_page_style.css";
import Footer from "../includes/footer";
const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>ROYATE |Menu|</title>
      </Helmet>
      <section className="height_video_fullscreen background_menu background_responsive p-0">
        <div className="position-relative w-100 z_index_1 padding_x_high height_video_fullscreen backgroud_dark_opacity">
          <h1 className="text-light font_weight_boldest head_line_height head_size_high">
            OUR MENU
          </h1>
          <span className="font_family_span font_color_span head_span_size_normal mb-5 font_weight_normal">
            ~ See what we offe ~
          </span>
        </div>
      </section>

      <section className="container text-center padding_top_10">
        <div className="mb-5">
          <h2 className="font_weight_bold head_line_height head_size_normal font_color_head">
            MAIN COURSE
          </h2>
          <span className="font_family_span font_color_span head_span_size_normal mb-5 font_weight_normal">
            ~ Qualities in each dish ~
          </span>
        </div>
        <div className="row text-left my-4">
          <div className="col-xl-6 col-lg-12">
            <div className="pb-2">
              <div className="menu_content_title row">
                <div className="col-2">
                  <img
                    src="/images/menu_page/main_course/menu1.png"
                    alt="menu"
                    className="img_hover_style"
                  />
                </div>
                <div className="col-10 align-self-center">
                  <div className="row">
                    <h5 className="col-md-9 col-7 text-left">
                      <a className="font_color_head" href="/shop">
                        Super-Delicious Zuppa Toscana
                      </a>
                    </h5>
                    <h5 className="col-md-3 col-5 text-right font_color_head">
                      $40
                    </h5>
                  </div>

                  <ul className="list-unstyled text-left row mx-0 mb-0">
                    <li className="d-inline-block text-left">
                      <a className="font_color_link_offlight" href="/">
                        Chicken /{" "}
                      </a>
                    </li>
                    <li className="d-inline-block text-left">
                      <a className="font_color_link_offlight" href="/">
                        {" "}
                        Italian /{" "}
                      </a>
                    </li>
                    <li className="d-inline-block text-left">
                      <a className="font_color_link_offlight" href="/">
                        {" "}
                        Sausage /{" "}
                      </a>
                    </li>
                    <li className="d-inline-block text-left">
                      <a className="font_color_link_offlight" href="/">
                        {" "}
                        Spinach
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-12">
            <div className="pb-2">
              <div className="menu_content_title row">
                <div className="col-2">
                  <img
                    src="/images/menu_page/main_course/menu2.png"
                    alt="menu"
                    className="img_hover_style"
                  />
                </div>
                <div className="col-10 align-self-center">
                  <div className="row">
                    <h5 className="col-md-9 col-7 text-left">
                      <a className="font_color_head" href="/shop">
                        Thai style grilled chicken
                      </a>
                    </h5>
                    <h5 className="col-md-3 col-5 text-right font_color_head">
                      $69
                    </h5>
                  </div>

                  <ul className="list-unstyled text-left row mx-0 mb-0">
                    <li className="d-inline-block text-left">
                      <a className="font_color_link_offlight" href="/">
                        Chicken /{" "}
                      </a>
                    </li>
                    <li className="d-inline-block text-left">
                      <a className="font_color_link_offlight" href="/">
                        {" "}
                        Italian /{" "}
                      </a>
                    </li>
                    <li className="d-inline-block text-left">
                      <a className="font_color_link_offlight" href="/">
                        {" "}
                        Sausage /{" "}
                      </a>
                    </li>
                    <li className="d-inline-block text-left">
                      <a className="font_color_link_offlight" href="/">
                        {" "}
                        Spinach
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row text-left my-4">
          <div className="col-xl-6 col-lg-12">
            <div className="pb-2">
              <div className="menu_content_title row">
                <div className="col-2">
                  <img
                    src="/images/menu_page/main_course/menu3.png"
                    alt="menu"
                    className="img_hover_style"
                  />
                </div>
                <div className="col-10 align-self-center">
                  <div className="row">
                    <h5 className="col-md-9 col-7 text-left">
                      <a className="font_color_head" href="/shop">
                        Chicken tikka masala
                      </a>
                    </h5>
                    <h5 className="col-md-3 col-5 text-right font_color_head">
                      $56
                    </h5>
                  </div>

                  <ul className="list-unstyled text-left row mx-0 mb-0">
                    <li className="d-inline-block text-left">
                      <a className="font_color_link_offlight" href="/">
                        Chicken /{" "}
                      </a>
                    </li>
                    <li className="d-inline-block text-left">
                      <a className="font_color_link_offlight" href="/">
                        {" "}
                        Italian /{" "}
                      </a>
                    </li>
                    <li className="d-inline-block text-left">
                      <a className="font_color_link_offlight" href="/">
                        {" "}
                        Sausage /{" "}
                      </a>
                    </li>
                    <li className="d-inline-block text-left">
                      <a className="font_color_link_offlight" href="/">
                        {" "}
                        Spinach
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-12">
            <div className="pb-2">
              <div className="menu_content_title row">
                <div className="col-2">
                  <img
                    src="/images/menu_page/main_course/menu4.png"
                    alt="menu"
                    className="img_hover_style"
                  />
                </div>
                <div className="col-10 align-self-center">
                  <div className="row">
                    <h5 className="col-md-9 col-7 text-left">
                      <a className="font_color_head" href="/shop">
                        Pink sausage from the oven
                      </a>
                    </h5>
                    <h5 className="col-md-3 col-5 text-right font_color_head">
                      $44
                    </h5>
                  </div>

                  <ul className="list-unstyled text-left row mx-0 mb-0">
                    <li className="d-inline-block text-left">
                      <a className="font_color_link_offlight" href="/">
                        Chicken /{" "}
                      </a>
                    </li>
                    <li className="d-inline-block text-left">
                      <a className="font_color_link_offlight" href="/">
                        {" "}
                        Italian /{" "}
                      </a>
                    </li>
                    <li className="d-inline-block text-left">
                      <a className="font_color_link_offlight" href="/">
                        {" "}
                        Sausage /{" "}
                      </a>
                    </li>
                    <li className="d-inline-block text-left">
                      <a className="font_color_link_offlight" href="/">
                        {" "}
                        Spinach
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row text-left my-4">
          <div className="col-xl-6 col-lg-12">
            <div className="pb-2">
              <div className="menu_content_title row">
                <div className="col-2">
                  <img
                    src="/images/menu_page/main_course/menu5.png"
                    alt="menu"
                    className="img_hover_style"
                  />
                </div>
                <div className="col-10 align-self-center">
                  <div className="row">
                    <h5 className="col-md-9 col-7 text-left">
                      <a className="font_color_head" href="/shop">
                        Sabji Kohrapuri
                      </a>
                    </h5>
                    <h5 className="col-md-3 col-5 text-right font_color_head">
                      $32
                    </h5>
                  </div>

                  <ul className="list-unstyled text-left row mx-0 mb-0">
                    <li className="d-inline-block text-left">
                      <a className="font_color_link_offlight" href="/">
                        Chicken /{" "}
                      </a>
                    </li>
                    <li className="d-inline-block text-left">
                      <a className="font_color_link_offlight" href="/">
                        {" "}
                        Italian /{" "}
                      </a>
                    </li>
                    <li className="d-inline-block text-left">
                      <a className="font_color_link_offlight" href="/">
                        {" "}
                        Sausage /{" "}
                      </a>
                    </li>
                    <li className="d-inline-block text-left">
                      <a className="font_color_link_offlight" href="/">
                        {" "}
                        Spinach
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-12">
            <div className="pb-2">
              <div className="menu_content_title row">
                <div className="col-2">
                  <img
                    src="/images/menu_page/main_course/menu6.png"
                    alt="menu"
                    className="img_hover_style"
                  />
                </div>
                <div className="col-10 align-self-center">
                  <div className="row">
                    <h5 className="col-md-9 col-7 text-left">
                      <a className="font_color_head" href="/shop">
                        Grilled lamb with bean sauce
                      </a>
                    </h5>
                    <h5 className="col-md-3 col-5 text-right font_color_head">
                      $37
                    </h5>
                  </div>

                  <ul className="list-unstyled text-left row mx-0 mb-0">
                    <li className="d-inline-block text-left">
                      <a className="font_color_link_offlight" href="/">
                        Chicken /{" "}
                      </a>
                    </li>
                    <li className="d-inline-block text-left">
                      <a className="font_color_link_offlight" href="/">
                        {" "}
                        Italian /{" "}
                      </a>
                    </li>
                    <li className="d-inline-block text-left">
                      <a className="font_color_link_offlight" href="/">
                        {" "}
                        Sausage /{" "}
                      </a>
                    </li>
                    <li className="d-inline-block text-left">
                      <a className="font_color_link_offlight" href="/">
                        {" "}
                        Spinach
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row text-left my-4">
          <div className="col-xl-6 col-lg-12">
            <div className="pb-2">
              <div className="menu_content_title row">
                <div className="col-2">
                  <img
                    src="/images/menu_page/main_course/menu7.png"
                    alt="menu"
                    className="img_hover_style"
                  />
                </div>
                <div className="col-10 align-self-center">
                  <div className="row">
                    <h5 className="col-md-9 col-7 text-left">
                      <a className="font_color_head" href="/shop">
                        Bacon coil baked Australian beef
                      </a>
                    </h5>
                    <h5 className="col-md-3 col-5 text-right font_color_head">
                      $24
                    </h5>
                  </div>

                  <ul className="list-unstyled text-left row mx-0 mb-0">
                    <li className="d-inline-block text-left">
                      <a className="font_color_link_offlight" href="/">
                        Chicken /{" "}
                      </a>
                    </li>
                    <li className="d-inline-block text-left">
                      <a className="font_color_link_offlight" href="/">
                        {" "}
                        Italian /{" "}
                      </a>
                    </li>
                    <li className="d-inline-block text-left">
                      <a className="font_color_link_offlight" href="/">
                        {" "}
                        Sausage /{" "}
                      </a>
                    </li>
                    <li className="d-inline-block text-left">
                      <a className="font_color_link_offlight" href="/">
                        {" "}
                        Spinach
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-12">
            <div className="pb-2">
              <div className="menu_content_title row">
                <div className="col-2">
                  <img
                    src="/images/menu_page/main_course/menu8.png"
                    alt="menu"
                    className="img_hover_style"
                  />
                </div>
                <div className="col-10 align-self-center">
                  <div className="row">
                    <h5 className="col-md-9 col-7 text-left">
                      <a className="font_color_head" href="/shop">
                        Chicken wings with pink sauce
                      </a>
                    </h5>
                    <h5 className="col-md-3 col-5 text-right font_color_head">
                      $39
                    </h5>
                  </div>

                  <ul className="list-unstyled text-left row mx-0 mb-0">
                    <li className="d-inline-block text-left">
                      <a className="font_color_link_offlight" href="/">
                        Chicken /{" "}
                      </a>
                    </li>
                    <li className="d-inline-block text-left">
                      <a className="font_color_link_offlight" href="/">
                        {" "}
                        Italian /{" "}
                      </a>
                    </li>
                    <li className="d-inline-block text-left">
                      <a className="font_color_link_offlight" href="/">
                        {" "}
                        Sausage /{" "}
                      </a>
                    </li>
                    <li className="d-inline-block text-left">
                      <a className="font_color_link_offlight" href="/">
                        {" "}
                        Spinach
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="padding_top_10">
        <div className="background_soup">
          <div className="position-relative w-100 z_index_1 padding_x_normal backgroud_dark_opacity">
            <h1 className="text-light font_weight_boldest head_line_height head_size_normal">
              SOUPS & SALADS
            </h1>
            <span className="font_family_span font_color_span head_span_size_normal mb-5 font_weight_normal">
              ~ Clean vegetables ~
            </span>
          </div>
        </div>
        <div className="container mt-5 pt-5">
          <div className="row text-left my-4">
            <div className="col-xl-6 col-lg-12">
              <div className="pb-2">
                <div className="menu_content_title row">
                  <div className="col-2">
                    <img
                      src="/images/menu_page/soups/menu_soup1.png"
                      alt="menu"
                      className="img_hover_style"
                    />
                  </div>
                  <div className="col-10 align-self-center">
                    <div className="row">
                      <h5 className="mb-0 align-self-center col-md-9 col-7 text-left">
                        <a className="font_color_head" href="/shop">
                          Grandma's Noodle Soup
                        </a>
                      </h5>
                      <h5 className="col-md-3 col-5 text-right font_color_head">
                        $40
                      </h5>
                    </div>

                    <ul className="list-unstyled text-left row mx-0 mb-0">
                      <p className="font_color_link_offlight mb-0">
                        It is a long established fact that a reader will be
                        distracted
                      </p>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <div className="pb-2">
                <div className="menu_content_title row">
                  <div className="col-2">
                    <img
                      src="/images/menu_page/soups/menu_soup2.png"
                      alt="menu"
                      className="img_hover_style"
                    />
                  </div>
                  <div className="col-10 align-self-center">
                    <div className="row">
                      <h5 className="mb-0 align-self-center col-md-9 col-7 text-left">
                        <a className="font_color_head" href="/shop">
                          Cran-Broccoli Salad
                        </a>
                      </h5>
                      <h5 className="col-md-3 col-5 text-right font_color_head">
                        $69
                      </h5>
                    </div>

                    <ul className="list-unstyled text-left row mx-0 mb-0">
                      <p className="font_color_link_offlight mb-0">
                        There are many variations of passages of Lorem Ipsum
                      </p>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row text-left my-4">
            <div className="col-xl-6 col-lg-12">
              <div className="pb-2">
                <div className="menu_content_title row">
                  <div className="col-2">
                    <img
                      src="/images/menu_page/soups/menu_soup3.png"
                      alt="menu"
                      className="img_hover_style"
                    />
                  </div>
                  <div className="col-10 align-self-center">
                    <div className="row">
                      <h5 className="mb-0 align-self-center col-md-9 col-7 text-left">
                        <a className="font_color_head" href="/shop">
                          Vegan Red Lentil Soup
                        </a>
                      </h5>
                      <h5 className="col-md-3 col-5 text-right font_color_head">
                        $56
                      </h5>
                    </div>

                    <ul className="list-unstyled text-left row mx-0 mb-0">
                      <p className="font_color_link_offlight mb-0">
                        The point of using Lorem Ipsum is that it has a more
                      </p>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <div className="pb-2">
                <div className="menu_content_title row">
                  <div className="col-2">
                    <img
                      src="/images/menu_page/soups/menu_soup4.png"
                      alt="menu"
                      className="img_hover_style"
                    />
                  </div>
                  <div className="col-10 align-self-center">
                    <div className="row">
                      <h5 className="mb-0 align-self-center col-md-9 col-7 text-left">
                        <a className="font_color_head" href="/shop">
                          Spinach and Mushroom Salad
                        </a>
                      </h5>
                      <h5 className="col-md-3 col-5 text-right font_color_head">
                        $44
                      </h5>
                    </div>

                    <ul className="list-unstyled text-left row mx-0 mb-0">
                      <p className="font_color_link_offlight mb-0">
                        If you are going to use a passage of Lorem Ipsum
                      </p>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row text-left my-4">
            <div className="col-xl-6 col-lg-12">
              <div className="pb-2">
                <div className="menu_content_title row">
                  <div className="col-2">
                    <img
                      src="/images/menu_page/soups/menu_soup5.png"
                      alt="menu"
                      className="img_hover_style"
                    />
                  </div>
                  <div className="col-10 align-self-center">
                    <div className="row">
                      <h5 className="mb-0 align-self-center col-md-9 col-7 text-left">
                        <a className="font_color_head" href="/shop">
                          Beef Noodle Soup
                        </a>
                      </h5>
                      <h5 className="col-md-3 col-5 text-right font_color_head">
                        $32
                      </h5>
                    </div>

                    <ul className="list-unstyled text-left row mx-0 mb-0">
                      <p className="font_color_link_offlight mb-0">
                        Many desktop publishing packages and web
                      </p>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <div className="pb-2">
                <div className="menu_content_title row">
                  <div className="col-2">
                    <img
                      src="/images/menu_page/soups/menu_soup6.png"
                      alt="menu"
                      className="img_hover_style"
                    />
                  </div>
                  <div className="col-10 align-self-center">
                    <div className="row">
                      <h5 className="mb-0 align-self-center col-md-9 col-7 text-left">
                        <a className="font_color_head" href="/shop">
                          Holiday Chicken Salad
                        </a>
                      </h5>
                      <h5 className="col-md-3 col-5 text-right font_color_head">
                        $37
                      </h5>
                    </div>

                    <ul className="list-unstyled text-left row mx-0 mb-0">
                      <p className="font_color_link_offlight mb-0">
                        All the Lorem Ipsum generators on the Internet tend
                      </p>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row text-left my-4">
            <div className="col-xl-6 col-lg-12">
              <div className="pb-2">
                <div className="menu_content_title row">
                  <div className="col-2">
                    <img
                      src="/images/menu_page/soups/menu_soup7.png"
                      alt="menu"
                      className="img_hover_style"
                    />
                  </div>
                  <div className="col-10 align-self-center">
                    <div className="row">
                      <h5 className="mb-0 align-self-center col-md-9 col-7 text-left">
                        <a className="font_color_head" href="/shop">
                          Italian Sausage Soup
                        </a>
                      </h5>
                      <h5 className="col-md-3 col-5 text-right font_color_head">
                        $24
                      </h5>
                    </div>

                    <ul className="list-unstyled text-left row mx-0 mb-0">
                      <p className="font_color_link_offlight mb-0">
                        Various versions have evolved over the years
                      </p>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <div className="pb-2">
                <div className="menu_content_title row">
                  <div className="col-2">
                    <img
                      src="/images/menu_page/soups/menu_soup8.png"
                      alt="menu"
                      className="img_hover_style"
                    />
                  </div>
                  <div className="col-10 align-self-center">
                    <div className="row">
                      <h5 className="mb-0 align-self-center col-md-9 col-7 text-left">
                        <a className="font_color_head" href="/shop">
                          Kale and Feta Salad
                        </a>
                      </h5>
                      <h5 className="col-md-3 col-5 text-right font_color_head">
                        $39
                      </h5>
                    </div>

                    <ul className="list-unstyled text-left row mx-0 mb-0">
                      <p className="font_color_link_offlight mb-0">
                        It uses a dictionary of over 200 Latin words, combined
                      </p>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="padding_top_10">
        <div className="background_drink">
          <div className="position-relative w-100 z_index_1 padding_x_normal backgroud_dark_opacity">
            <h1 className="text-light font_weight_boldest head_line_height head_size_normal">
              DRINKS
            </h1>
            <span className="font_family_span font_color_span head_span_size_normal mb-5 font_weight_normal">
              ~ Attractive drinks ~
            </span>
          </div>
        </div>
        <div className="container mt-5 pt-5">
          <div className="row text-left my-4">
            <div className="col-xl-6 col-lg-12">
              <div className="pb-2">
                <div className="menu_content_title row">
                  <div className="col-2">
                    <img
                      src="/images/menu_page/drinks/menu_drink1.png"
                      alt="menu"
                      className="img_hover_style"
                    />
                  </div>
                  <div className="col-10 align-self-center">
                    <div className="row">
                      <h5 className="mb-0 align-self-center col-md-9 col-7 text-left">
                        <a className="font_color_head" href="/shop">
                          Beer Margaritas
                        </a>
                      </h5>
                      <h5 className="col-md-3 col-5 text-right font_color_head">
                        $40
                      </h5>
                    </div>

                    <ul className="list-unstyled text-left row mx-0 mb-0">
                      <p className="font_color_link_offlight mb-0">
                        Mocha Sauce, with Whipped Cream, Steamed
                      </p>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <div className="pb-2">
                <div className="menu_content_title row">
                  <div className="col-2">
                    <img
                      src="/images/menu_page/drinks/menu_drink2.png"
                      alt="menu"
                      className="img_hover_style"
                    />
                  </div>
                  <div className="col-10 align-self-center">
                    <div className="row">
                      <h5 className="mb-0 align-self-center col-md-9 col-7 text-left">
                        <a className="font_color_head" href="/shop">
                          Al's Bloody Marys
                        </a>
                      </h5>
                      <h5 className="col-md-3 col-5 text-right font_color_head">
                        $69
                      </h5>
                    </div>

                    <ul className="list-unstyled text-left row mx-0 mb-0">
                      <p className="font_color_link_offlight mb-0">
                        A shot of espresso with a rich flavour and caramel
                      </p>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row text-left my-4">
            <div className="col-xl-6 col-lg-12">
              <div className="pb-2">
                <div className="menu_content_title row">
                  <div className="col-2">
                    <img
                      src="/images/menu_page/drinks/menu_drink3.png"
                      alt="menu"
                      className="img_hover_style"
                    />
                  </div>
                  <div className="col-10 align-self-center">
                    <div className="row">
                      <h5 className="mb-0 align-self-center col-md-9 col-7 text-left">
                        <a className="font_color_head" href="/shop">
                          Best Lemonade Ever
                        </a>
                      </h5>
                      <h5 className="col-md-3 col-5 text-right font_color_head">
                        $56
                      </h5>
                    </div>

                    <ul className="list-unstyled text-left row mx-0 mb-0">
                      <p className="font_color_link_offlight mb-0">
                        Expertly steamed milk poured over two shots
                      </p>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <div className="pb-2">
                <div className="menu_content_title row">
                  <div className="col-2">
                    <img
                      src="/images/menu_page/drinks/menu_drink4.png"
                      alt="menu"
                      className="img_hover_style"
                    />
                  </div>
                  <div className="col-10 align-self-center">
                    <div className="row">
                      <h5 className="mb-0 align-self-center col-md-9 col-7 text-left">
                        <a className="font_color_head" href="/shop">
                          Homemade Caramel Latte
                        </a>
                      </h5>
                      <h5 className="col-md-3 col-5 text-right font_color_head">
                        $44
                      </h5>
                    </div>

                    <ul className="list-unstyled text-left row mx-0 mb-0">
                      <p className="font_color_link_offlight mb-0">
                        Espresso shots are topped with hot water produce
                      </p>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row text-left my-4">
            <div className="col-xl-6 col-lg-12">
              <div className="pb-2">
                <div className="menu_content_title row">
                  <div className="col-2">
                    <img
                      src="/images/menu_page/drinks/menu_drink5.png"
                      alt="menu"
                      className="img_hover_style"
                    />
                  </div>
                  <div className="col-10 align-self-center">
                    <div className="row">
                      <h5 className="mb-0 align-self-center col-md-9 col-7 text-left">
                        <a className="font_color_head" href="/shop">
                          Caramel Macchiato
                        </a>
                      </h5>
                      <h5 className="col-md-3 col-5 text-right font_color_head">
                        $32
                      </h5>
                    </div>

                    <ul className="list-unstyled text-left row mx-0 mb-0">
                      <p className="font_color_link_offlight mb-0">
                        A mix of vanilla flavour and steamed milk marked
                      </p>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <div className="pb-2">
                <div className="menu_content_title row">
                  <div className="col-2">
                    <img
                      src="/images/menu_page/drinks/menu_drink6.png"
                      alt="menu"
                      className="img_hover_style"
                    />
                  </div>
                  <div className="col-10 align-self-center">
                    <div className="row">
                      <h5 className="mb-0 align-self-center col-md-9 col-7 text-left">
                        <a className="font_color_head" href="/shop">
                          Zesty Celery Sour
                        </a>
                      </h5>
                      <h5 className="col-md-3 col-5 text-right font_color_head">
                        $37
                      </h5>
                    </div>

                    <ul className="list-unstyled text-left row mx-0 mb-0">
                      <p className="font_color_link_offlight mb-0">
                        Your favourite Latte is mixed with Turmeric.
                      </p>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row text-left my-4">
            <div className="col-xl-6 col-lg-12">
              <div className="pb-2">
                <div className="menu_content_title row">
                  <div className="col-2">
                    <img
                      src="/images/menu_page/drinks/menu_drink7.png"
                      alt="menu"
                      className="img_hover_style"
                    />
                  </div>
                  <div className="col-10 align-self-center">
                    <div className="row">
                      <h5 className="mb-0 align-self-center col-md-9 col-7 text-left">
                        <a className="font_color_head" href="/shop">
                          Apple Orchard Punch
                        </a>
                      </h5>
                      <h5 className="col-md-3 col-5 text-right font_color_head">
                        $24
                      </h5>
                    </div>

                    <ul className="list-unstyled text-left row mx-0 mb-0">
                      <p className="font_color_link_offlight mb-0">
                        Two ristretto shots topped with warm, silky milk
                      </p>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <div className="pb-2">
                <div className="menu_content_title row">
                  <div className="col-2">
                    <img
                      src="/images/menu_page/drinks/menu_drink8.png"
                      alt="menu"
                      className="img_hover_style"
                    />
                  </div>
                  <div className="col-10 align-self-center">
                    <div className="row">
                      <h5 className="mb-0 align-self-center col-md-9 col-7 text-left">
                        <a className="font_color_head" href="/shop">
                          Luscious Slush Punch
                        </a>
                      </h5>
                      <h5 className="col-md-3 col-5 text-right font_color_head">
                        $39
                      </h5>
                    </div>

                    <ul className="list-unstyled text-left row mx-0 mb-0">
                      <p className="font_color_link_offlight mb-0">
                        Cold milk foam topped with a slightly sweetened
                      </p>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="padding_top_10">
        <div className="background_dessert">
          <div className="position-relative w-100 z_index_1 padding_x_normal backgroud_dark_opacity">
            <h1 className="text-light font_weight_boldest head_line_height head_size_normal">
              DESSERTS
            </h1>
            <span className="font_family_span font_color_span head_span_size_normal mb-5 font_weight_normal">
              ~ Sweet spread ~
            </span>
          </div>
        </div>
        <div className="container mt-5 pt-5">
          <div className="row text-left my-4">
            <div className="col-xl-6 col-lg-12">
              <div className="pb-2">
                <div className="menu_content_title row">
                  <div className="col-2">
                    <img
                      src="/images/menu_page/desserts/menu_dessert1.png"
                      alt="menu"
                      className="img_hover_style"
                    />
                  </div>
                  <div className="col-10 align-self-center">
                    <div className="row">
                      <h5 className="mb-0 align-self-center col-md-9 col-7 text-left">
                        <a className="font_color_head" href="/shop">
                          Tokyo cheese cake
                        </a>
                      </h5>
                      <h5 className="col-md-3 col-5 text-right font_color_head">
                        $40
                      </h5>
                    </div>

                    <ul className="list-unstyled text-left row mx-0 mb-0">
                      <p className="font_color_link_offlight mb-0">
                        The generated Lorem Ipsum is therefore always
                      </p>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <div className="pb-2">
                <div className="menu_content_title row">
                  <div className="col-2">
                    <img
                      src="/images/menu_page/desserts/menu_dessert2.png"
                      alt="menu"
                      className="img_hover_style"
                    />
                  </div>
                  <div className="col-10 align-self-center">
                    <div className="row">
                      <h5 className="mb-0 align-self-center col-md-9 col-7 text-left">
                        <a className="font_color_head" href="/shop">
                          Butter raisins cake
                        </a>
                      </h5>
                      <h5 className="col-md-3 col-5 text-right font_color_head">
                        $69
                      </h5>
                    </div>

                    <ul className="list-unstyled text-left row mx-0 mb-0">
                      <p className="font_color_link_offlight mb-0">
                        Excepteur sint occaecat cupidatat non proiden
                      </p>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row text-left my-4">
            <div className="col-xl-6 col-lg-12">
              <div className="pb-2">
                <div className="menu_content_title row">
                  <div className="col-2">
                    <img
                      src="/images/menu_page/desserts/menu_dessert3.png"
                      alt="menu"
                      className="img_hover_style"
                    />
                  </div>
                  <div className="col-10 align-self-center">
                    <div className="row">
                      <h5 className="mb-0 align-self-center col-md-9 col-7 text-left">
                        <a className="font_color_head" href="/shop">
                          Delicacy Coconut cake
                        </a>
                      </h5>
                      <h5 className="col-md-3 col-5 text-right font_color_head">
                        $56
                      </h5>
                    </div>

                    <ul className="list-unstyled text-left row mx-0 mb-0">
                      <p className="font_color_link_offlight mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </p>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <div className="pb-2">
                <div className="menu_content_title row">
                  <div className="col-2">
                    <img
                      src="/images/menu_page/desserts/menu_dessert4.png"
                      alt="menu"
                      className="img_hover_style"
                    />
                  </div>
                  <div className="col-10 align-self-center">
                    <div className="row">
                      <h5 className="mb-0 align-self-center col-md-9 col-7 text-left">
                        <a className="font_color_head" href="/shop">
                          Donut chocolate
                        </a>
                      </h5>
                      <h5 className="col-md-3 col-5 text-right font_color_head">
                        $44
                      </h5>
                    </div>

                    <ul className="list-unstyled text-left row mx-0 mb-0">
                      <p className="font_color_link_offlight mb-0">
                        Sed ut perspiciatis unde omnis iste natus error sit
                      </p>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row text-left my-4">
            <div className="col-xl-6 col-lg-12">
              <div className="pb-2">
                <div className="menu_content_title row">
                  <div className="col-2">
                    <img
                      src="/images/menu_page/desserts/menu_dessert5.png"
                      alt="menu"
                      className="img_hover_style"
                    />
                  </div>
                  <div className="col-10 align-self-center">
                    <div className="row">
                      <h5 className="mb-0 align-self-center col-md-9 col-7 text-left">
                        <a className="font_color_head" href="/shop">
                          Gateaux de basque
                        </a>
                      </h5>
                      <h5 className="col-md-3 col-5 text-right font_color_head">
                        $32
                      </h5>
                    </div>

                    <ul className="list-unstyled text-left row mx-0 mb-0">
                      <p className="font_color_link_offlight mb-0">
                        Ut enim ad minim veniam, quis nostrud exercitation
                      </p>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <div className="pb-2">
                <div className="menu_content_title row">
                  <div className="col-2">
                    <img
                      src="/images/menu_page/desserts/menu_dessert6.png"
                      alt="menu"
                      className="img_hover_style"
                    />
                  </div>
                  <div className="col-10 align-self-center">
                    <div className="row">
                      <h5 className="mb-0 align-self-center col-md-9 col-7 text-left">
                        <a className="font_color_head" href="/shop">
                          Rainbow macaron
                        </a>
                      </h5>
                      <h5 className="col-md-3 col-5 text-right font_color_head">
                        $37
                      </h5>
                    </div>

                    <ul className="list-unstyled text-left row mx-0 mb-0">
                      <p className="font_color_link_offlight mb-0">
                        Ut enim ad minima veniam, quis nostrum exercitatione
                      </p>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row text-left my-4">
            <div className="col-xl-6 col-lg-12">
              <div className="pb-2">
                <div className="menu_content_title row">
                  <div className="col-2">
                    <img
                      src="/images/menu_page/desserts/menu_dessert7.png"
                      alt="menu"
                      className="img_hover_style"
                    />
                  </div>
                  <div className="col-10 align-self-center">
                    <div className="row">
                      <h5 className="mb-0 align-self-center col-md-9 col-7 text-left">
                        <a className="font_color_head" href="/shop">
                          Spong cake cup
                        </a>
                      </h5>
                      <h5 className="col-md-3 col-5 text-right font_color_head">
                        $24
                      </h5>
                    </div>

                    <ul className="list-unstyled text-left row mx-0 mb-0">
                      <p className="font_color_link_offlight mb-0">
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit
                      </p>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <div className="pb-2">
                <div className="menu_content_title row">
                  <div className="col-2">
                    <img
                      src="/images/menu_page/desserts/menu_dessert8.png"
                      alt="menu"
                      className="img_hover_style"
                    />
                  </div>
                  <div className="col-10 align-self-center">
                    <div className="row">
                      <h5 className="mb-0 align-self-center col-md-9 col-7 text-left">
                        <a className="font_color_head" href="/shop">
                          Alpha chocolate
                        </a>
                      </h5>
                      <h5 className="col-md-3 col-5 text-right font_color_head">
                        $39
                      </h5>
                    </div>

                    <ul className="list-unstyled text-left row mx-0 mb-0">
                      <p className="font_color_link_offlight mb-0">
                        Quis autem vel eum iure reprehenderit qui in ea
                      </p>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Menu;

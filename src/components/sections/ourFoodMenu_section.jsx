import React from "react";

const OurFoodMenu = () => {
  return (
    <section>
      <div className="background_our_food background_size_100">
        <div className="position-absolute w-25 special_style_cherry">
          <img
            className="w-100"
            src="./images/backgrounds/cherry.png"
            alt="Cherry"
          />
        </div>
        <div className="container padding_top_10">
          <div className="title">
            <h2 className="text-light font_weight_boldest head_line_height head_size_normal">
              OUR FOOD MENU
            </h2>
            <span className="font_family_span font_color_span head_span_size_normal mb-5 font_weight_normal">
              ~ See what we offer ~
            </span>
          </div>

          <div className="menu padding_bottom_10 pt-5">
            <div className="menu_1 margin_x_responsive_0 row">
              <div className="menu_left padding_x_responsive_0 col-lg-6 col-md-12">
                <div className="menu_title pb-4 row">
                  <h4 className="text-light text-left mb-0 col-md-9 col-sm-7 letter_spacing_2 font_weight_bold head_line_height font_family_span head_span_size_normal">
                    Main Course
                  </h4>
                  <i className="col-md-3 col-sm-5 text-right align-self-center">
                    <img
                      className="img-responsive"
                      src="./images/menus/main_course.png"
                      alt="main"
                    />
                  </i>
                </div>
                <div className="menu_content_1 pb-2">
                  <div className="menu_content_title row">
                    <h5 className="col-md-9 col-sm-7 text-left">
                      <a className="font_color_link_onlight" href="/shop">
                        Super-Delicious Zuppa Toscana
                      </a>
                    </h5>
                    <h5 className="col-md-3 col-sm-5 text-right font_color_link_onlight">
                      $40
                    </h5>
                  </div>
                  <ul className="list-unstyled text-left">
                    <li className="d-inline-block text-left">
                      <a className="font_color_link_offlight" href="/shop">
                        Chicken /{" "}
                      </a>
                    </li>
                    <li className="d-inline-block text-left">
                      <a className="font_color_link_offlight" href="/shop">
                        {" "}
                        Italian /{" "}
                      </a>
                    </li>
                    <li className="d-inline-block text-left">
                      <a className="font_color_link_offlight" href="/shop">
                        {" "}
                        Sausage /{" "}
                      </a>
                    </li>
                    <li className="d-inline-block text-left">
                      <a className="font_color_link_offlight" href="/shop">
                        {" "}
                        Spinach
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="menu_content_2 pb-2">
                  <div className="menu_content_title row">
                    <h5 className="col-md-9 col-sm-7 text-left">
                      <a className="font_color_link_onlight" href="/shop">
                        Bacon coil baked Australian beef
                      </a>
                    </h5>
                    <h5 className="col-md-3 col-sm-5 text-right font_color_link_onlight">
                      $26
                    </h5>
                  </div>
                  <ul className="list-unstyled text-left">
                    <li className="d-inline-block text-left">
                      <a className="font_color_link_offlight" href="/shop">
                        Mushrooms /{" "}
                      </a>
                    </li>
                    <li className="d-inline-block text-left">
                      <a className="font_color_link_offlight" href="/shop">
                        Chicken /{" "}
                      </a>
                    </li>
                    <li className="d-inline-block text-left">
                      <a className="font_color_link_offlight" href="/shop">
                        Broth Arborio /{" "}
                      </a>
                    </li>
                    <li className="d-inline-block text-left">
                      <a className="font_color_link_offlight" href="/shop">
                        Rice
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="menu_right padding_x_responsive_0 col-lg-6 col-md-12">
                <div className="menu_title pb-4 row">
                  <h4 className="text-light text-left mb-0 col-md-9 col-sm-7 letter_spacing_2 font_weight_bold head_line_height font_family_span head_span_size_normal">
                    Soups & Salads
                  </h4>
                  <i className="col-md-3 col-sm-5 text-right align-self-center">
                    <img
                      className="img-responsive"
                      src="./images/menus/soups_and_salads.png"
                      alt="soups and salads"
                    />
                  </i>
                </div>
                <div className="menu_content_1 pb-2">
                  <div className="menu_content_title row">
                    <h5 className="col-md-9 col-sm-7 text-left">
                      <a className="font_color_link_onlight" href="/shop">
                        Salat banana flower
                      </a>
                    </h5>
                    <h5 className="col-md-3 col-sm-5 text-right font_color_link_onlight">
                      $40
                    </h5>
                  </div>
                  <ul className="list-unstyled text-left">
                    <li className="d-inline-block text-left">
                      <a className="font_color_link_offlight" href="/shop">
                        Italian /{" "}
                      </a>
                    </li>
                    <li className="d-inline-block text-left">
                      <a className="font_color_link_offlight" href="/shop">
                        Sausage /{" "}
                      </a>
                    </li>
                    <li className="d-inline-block text-left">
                      <a className="font_color_link_offlight" href="/shop">
                        Spinach
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="menu_content_2 pb-2">
                  <div className="menu_content_title row">
                    <h5 className="col-md-9 col-sm-7 text-left">
                      <a className="font_color_link_onlight" href="/shop">
                        Gourmet Mushroom Risotto
                      </a>
                    </h5>
                    <h5 className="col-md-3 col-sm-5 text-right font_color_link_onlight">
                      $26
                    </h5>
                  </div>
                  <ul className="list-unstyled text-left">
                    <li className="d-inline-block text-left">
                      <a className="font_color_link_offlight" href="/shop">
                        Mushrooms /{" "}
                      </a>
                    </li>
                    <li className="d-inline-block text-left">
                      <a className="font_color_link_offlight" href="/shop">
                        Chicken /{" "}
                      </a>
                    </li>
                    <li className="d-inline-block text-left">
                      <a className="font_color_link_offlight" href="/shop">
                        Broth Arborio /{" "}
                      </a>
                    </li>
                    <li className="d-inline-block text-left">
                      <a className="font_color_link_offlight" href="/shop">
                        Rice
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="menu_2 margin_x_responsive_0 pt-5 row">
              <div className="menu_left padding_x_responsive_0 col-lg-6 col-md-12">
                <div className="menu_title pb-4 row">
                  <h4 className="text-light text-left mb-0 col-md-9 col-sm-7 letter_spacing_2 font_weight_bold head_line_height font_family_span head_span_size_normal">
                    Drinks
                  </h4>
                  <i className="col-md-3 col-sm-5 text-right align-self-center">
                    <img
                      className="img-responsive"
                      src="./images/menus/drinks.png"
                      alt="drinks"
                    />
                  </i>
                </div>
                <div className="menu_content_1 pb-2">
                  <div className="menu_content_title row">
                    <h5 className="col-md-9 col-sm-7 text-left">
                      <a className="font_color_link_onlight" href="/shop">
                        Ice cream tarte apple
                      </a>
                    </h5>
                    <h5 className="col-md-3 col-sm-5 text-right font_color_link_onlight">
                      $40
                    </h5>
                  </div>
                  <ul className="list-unstyled text-left">
                    <li className="d-inline-block text-left">
                      <a className="font_color_link_offlight" href="/shop">
                        Chicken /{" "}
                      </a>
                    </li>
                    <li className="d-inline-block text-left">
                      <a className="font_color_link_offlight" href="/shop">
                        mushrooms /{" "}
                      </a>
                    </li>
                    <li className="d-inline-block text-left">
                      <a className="font_color_link_offlight" href="/shop">
                        Sausage /{" "}
                      </a>
                    </li>
                    <li className="d-inline-block text-left">
                      <a className="font_color_link_offlight" href="/shop">
                        Spinach
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="menu_content_2 pb-2">
                  <div className="menu_content_title row">
                    <h5 className="col-md-9 col-sm-7 text-left">
                      <a className="font_color_link_onlight" href="/shop">
                        Fruit 'Mille feuille'
                      </a>
                    </h5>
                    <h5 className="col-md-3 col-sm-5 text-right font_color_link_onlight">
                      $26
                    </h5>
                  </div>
                  <ul className="list-unstyled text-left">
                    <li className="d-inline-block text-left">
                      <a className="font_color_link_offlight" href="/shop">
                        Mushrooms /{" "}
                      </a>
                    </li>
                    <li className="d-inline-block text-left">
                      <a className="font_color_link_offlight" href="/shop">
                        Broth Arborio /{" "}
                      </a>
                    </li>
                    <li className="d-inline-block text-left">
                      <a className="font_color_link_offlight" href="/shop">
                        Rice
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="menu_right padding_x_responsive_0 col-lg-6 col-md-12">
                <div className="menu_title pb-4 row">
                  <h4 className="text-light text-left mb-0 col-md-9 col-sm-7 letter_spacing_2 font_weight_bold head_line_height font_family_span head_span_size_normal">
                    Desserts
                  </h4>
                  <i className="col-md-3 col-sm-5 text-right align-self-center">
                    <img
                      className="img-responsive"
                      src="./images/menus/desserts.png"
                      alt="desserts"
                    />
                  </i>
                </div>
                <div className="menu_content_1 pb-2">
                  <div className="menu_content_title row">
                    <h5 className="col-md-9 col-sm-7 text-left">
                      <a className="font_color_link_onlight" href="/shop">
                        Double Chocolate Mud Pie
                      </a>
                    </h5>
                    <h5 className="col-md-3 col-sm-5 text-right font_color_link_onlight">
                      $40
                    </h5>
                  </div>
                  <ul className="list-unstyled text-left">
                    <li className="d-inline-block text-left">
                      <a className="font_color_link_offlight" href="/shop">
                        Italian /{" "}
                      </a>
                    </li>
                    <li className="d-inline-block text-left">
                      <a className="font_color_link_offlight" href="/shop">
                        Sausage /{" "}
                      </a>
                    </li>
                    <li className="d-inline-block text-left">
                      <a className="font_color_link_offlight" href="/shop">
                        Spinach
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="menu_content_2 pb-2">
                  <div className="menu_content_title row">
                    <h5 className="col-md-9 col-sm-7 text-left">
                      <a className="font_color_link_onlight" href="/shop">
                        Pannacotta cream cake
                      </a>
                    </h5>
                    <h5 className="col-md-3 col-sm-5 text-right font_color_link_onlight">
                      $26
                    </h5>
                  </div>
                  <ul className="list-unstyled text-left">
                    <li className="d-inline-block text-left">
                      <a className="font_color_link_offlight" href="/shop">
                        Mushrooms /{" "}
                      </a>
                    </li>
                    <li className="d-inline-block text-left">
                      <a className="font_color_link_offlight" href="/shop">
                        Chicken /{" "}
                      </a>
                    </li>
                    <li className="d-inline-block text-left">
                      <a className="font_color_link_offlight" href="/shop">
                        Broth Arborio /{" "}
                      </a>
                    </li>
                    <li className="d-inline-block text-left">
                      <a className="font_color_link_offlight" href="/shop">
                        Rice
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurFoodMenu;

import React from "react";
import { Helmet } from "react-helmet";
import "../../about_page_style.css";
import Footer from "../includes/footer";
const About = () => {
  return (
    <div>
      <Helmet>
        <title>ROYATE |About|</title>
      </Helmet>
      <section className="height_video_fullscreen background_about background_responsive p-0">
        <div className="position-relative w-100 z_index_1 padding_x_high height_video_fullscreen backgroud_dark_opacity">
          <h1 className="text-light font_weight_boldest head_line_height head_size_high">
            ABOUT US
          </h1>
          <span className="font_family_span font_color_span head_span_size_normal mb-5 font_weight_normal">
            ~ Our story ~
          </span>
        </div>
      </section>
      <section className="ourStory background_ourStory height_83 text-light text-center position-relative">
        <div className="ourStory_content container">
          <div className="row justify-content-between ourStory_about_content height_66 position-relative">
            <div className="col-lg-4 d-none d-xl-block align-self-end">
              <img
                src="/images/about_page/ourStory/ourStory_tray2.jpg"
                className="w-100"
                alt="ourStory_tray2"
              />
            </div>
            <div className="ourStory_text ourStory_about col-lg-6 background_dark z_index_2 align-self-center padding_25 position-absolute">
              <div className="ourStory_text_content">
                <h3 className="font_family_span font_weight_bold">Our Story</h3>
                <img
                  className="ourStory_text_line"
                  src="/images/about_page/ourStory/border5.png"
                  alt="line"
                />
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text. All the Lorem Ipsum
                  generators on the Internet tend to repeat predefined chunks as
                  necessary, making this the first true generator on the
                  Internet.
                </p>
                <div className="ourStory_sign row justify-content-center padding_y_25">
                  <div className="sign_image w-25">
                    <img
                      src="/images/about_page/ourStory/sign.png"
                      className="w-75"
                      alt="sign"
                    />
                  </div>
                  <div className="sign_text w-30">
                    <h6>Harry Price</h6>
                    <span>Restaurant Owners</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-none d-xl-block align-self-start z_index_1">
              <img
                src="/images/about_page/ourStory/ourStory_tray1.jpg"
                className="w-100"
                alt="ourStory_tray1"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="height-section background_ourServices p-0">
        <div className="position-relative w-100 z_index_1 height-section backgroud_dark_opacity">
          <h1 className="text-light font_weight_boldest head_line_height head_size_normal padding_top_10">
            OUR BEST SERVICE
          </h1>
          <span className="font_family_span font_color_span head_span_size_normal mb-5 font_weight_normal">
            ~ Experiences on food ~
          </span>
          <div className="container mt-5">
            <div className="row text-light pb-5">
              <div className="col-lg-3 col-md-6 margin_bottom_responsive_5">
                <div className="background_services h-100">
                  <h3 className="mb-0 mt-3">
                    <span className="font_family_span head_span_size_normal mb-0 font_weight_normal">
                      - Serve -
                    </span>
                  </h3>
                  <div className="w-50 width_responsive_30 width_responsive_20 mx-auto">
                    <img
                      src="/images/about_page/ourServices/serve_icon.png"
                      className="w-75 my-3"
                      alt="serve"
                    />
                  </div>
                  <p>
                    Temporibus autem quibusdam et aut officiis debitis aut rerum
                    necessitatibus saepe eveniet ut et voluptates repudiandae.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 margin_bottom_responsive_5">
                <div className="background_services h-100">
                  <h3 className="mb-0 mt-3">
                    <span className="font_family_span head_span_size_normal mb-0 font_weight_normal">
                      - Fresh food -
                    </span>
                  </h3>
                  <div className="w-50 width_responsive_30 width_responsive_20 mx-auto">
                    <img
                      src="/images/about_page/ourServices/fresh_icon.png"
                      className="w-75 my-3"
                      alt="fresh"
                    />
                  </div>
                  <p>
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 margin_bottom_responsive_5">
                <div className="background_services h-100">
                  <h3 className="mb-0 mt-3">
                    <span className="font_family_span head_span_size_normal mb-0 font_weight_normal">
                      - Hot food -
                    </span>
                  </h3>
                  <div className="w-50 width_responsive_30 width_responsive_20 mx-auto">
                    <img
                      src="/images/about_page/ourServices/hot_icon.png"
                      className="w-75 my-3"
                      alt="hot"
                    />
                  </div>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 margin_bottom_responsive_5">
                <div className="background_services h-100">
                  <h3 className="mb-0 mt-3">
                    <span className="font_family_span head_span_size_normal mb-0 font_weight_normal">
                      - Coffee -
                    </span>
                  </h3>
                  <div className="w-50 width_responsive_30 width_responsive_20 mx-auto">
                    <img
                      src="/images/about_page/ourServices/coffee_icon.png"
                      className="w-75 my-3"
                      alt="coffee"
                    />
                  </div>
                  <p>
                    Quis autem vel eum iure reprehenderit qui in ea voluptate
                    velit esse quam nihil molestiae consequatur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="row background_color">
          <div className="col-lg-6 px-0 overflow_hidden">
            <img
              src="/images/about_page/aboutUs/aboutUs.jpg"
              className="w-100 w-120"
              alt="aboutUs"
            />
          </div>
          <div className="col-lg-6 px-5 pb-5 text-left">
            <h1 className="font_color_head font_weight_boldest head_line_height head_size_normal mt-2 padding_top_10">
              ABOUT US
            </h1>
            <span className="font_family_span font_color_span head_span_size_normal mb-5 font_weight_normal">
              ~ For more add ~
            </span>
            <p className="font_color_head my-5">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum.
            </p>
            <a className="font_color_head" href="/about">
              READ MORE
            </a>
          </div>
        </div>
      </section>
      <div className="padding_top_10 container">
        <hr />
        <div className="row padding_top_10">
          <div className="col-lg-3 col-6">
            <div className="w-75 my-5 mx-auto">
              <img
                src="/images/about_page/aboutUs/partner-2.png"
                className="w-100 img_hover_style img-responsive"
                alt="partner"
              />
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="w-75 my-5 mx-auto">
              <img
                src="/images/about_page/aboutUs/partner-3.png"
                className="w-100 img_hover_style img-responsive"
                alt="partner"
              />
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="w-75 my-5 mx-auto">
              <img
                src="/images/about_page/aboutUs/partner-4.png"
                className="w-100 img_hover_style img-responsive"
                alt="partner"
              />
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="w-75 my-5 mx-auto">
              <img
                src="/images/about_page/aboutUs/partner-5.png"
                className="w-100 img_hover_style img-responsive"
                alt="partner"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;

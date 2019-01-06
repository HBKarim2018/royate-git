import React from "react";

import { Helmet } from "react-helmet";
import "../../about_page_style.css";
import "../../post_page_style.css";
import Footer from "../includes/footer";
const Post = () => {
  return (
    <div>
      <Helmet>
        <title>ROYATE |Post|</title>
      </Helmet>
      <section className="height_video_fullscreen background_blog background_responsive p-0">
        <div className="position-relative w-100 z_index_1 padding_x_high height_video_fullscreen backgroud_dark_opacity">
          <h1 className="text-light font_weight_boldest head_line_height head_size_high">
            BLOG SINGLE
          </h1>
          <span className="font_family_span font_color_span head_span_size_normal mb-5 font_weight_normal">
            ~ The things you want to find ~
          </span>
        </div>
      </section>
      <section className="container text-left">
        <div className="row">
          <div className="col-lg-9 col-md-9">
            <div className="post">
              <div className="image_post">
                <div className="w-100">
                  <img
                    className="img-responsive w-100"
                    src="./images/blog_page/post_thumb1.jpg"
                    alt="thumb"
                  />
                  <div className="date_body position-absolute text-center">
                    <div className="date">
                      <span className="date_day d-block">09</span>
                      <span className="date_month d-block">MAY</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text_post">
                <h2 className="font_weight_boldest font_color_head head_size_fonts mt-5">
                  VARIOUS VERSIONS HAVE
                </h2>
                <div className="row mx-0 mb-5">
                  <img
                    src="/images/post_page/avatars/avatar.png"
                    alt="avatar"
                  />
                  <span className="align-self-center pl-2 pr-5">
                    By{" "}
                    <a className="font_color_body" href="/">
                      Andrea Silva
                    </a>
                  </span>
                  <span className="align-self-center">
                    <i className="fa fa-tag pl-1" />
                    <a className="font_color_body" href="/">
                      {" "}
                      Dresserts /{" "}
                    </a>
                    <a className="font_color_body" href="/">
                      Cooking /{" "}
                    </a>
                    <a className="font_color_body" href="/">
                      {" "}
                      Food
                    </a>
                  </span>
                </div>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident, similique sunt in culpa qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga. Et harum
                  quidem rerum facilis est et expedita distinctio. Nam libero
                  tempore, cum soluta nobis est eligendi optio cumque nihil
                  impedit quo minus id quod maxime placeat facere possimus,
                  omnis volup-tas assumenda est, omnis dolor repellendus.
                  Temporibus autem quibusdam et aut officiis debitis aut rerum
                  necessitatibus saepe eveniet ut et voluptates repudiandae sint
                  et molestiae non recusandae. Itaque earum rerum hic tenetur a
                  sapiente delectus, ut aut reiciendis voluptatibus maiores
                  alias consequatur aut perferendis doloribus asperiores
                  repellat.
                </p>
                <div className="ml-5 my-4 position-relative">
                  <i className="quote_text fa fa-quote-left" />
                  <p>
                    These cases are perfectly simple and easy to distinguish. In
                    a free hour, when our power of choice is untrammelled and
                    when nothing prevents our being able to do what we like
                    best, every pleasure is to be welcomed and every pain
                    avoided. But in certain circumstances and owing to the
                    claims of duty or the obligations of business it will
                    frequently occur that pleasures have to be repudiated and
                    annoyances accepted.
                  </p>
                </div>
              </div>
              <div className="duty_part">
                <h5 className="head_size_low font_color_head font_weight_boldest my-4">
                  Duis aute irure dolor in reprehenderit in voluptate velit.
                </h5>
                <div className="row">
                  <div className="col-lg-8 col-md-8 duty_left row">
                    <div className="col-lg-6 col-md-6 pb-3">
                      <img
                        src="/images/post_page/duty_part/single1.jpg"
                        alt="single"
                        className="img-responsive w-100"
                      />
                    </div>
                    <div className="col-lg-6 col-md-6 pb-3">
                      <img
                        src="/images/post_page/duty_part/single2.jpg"
                        alt="single"
                        className="img-responsive w-100"
                      />
                    </div>
                    <div className="col-lg-12 col-md-12 duty_last">
                      <img
                        src="/images/post_page/duty_part/single3.jpg"
                        alt="single"
                        className="img-responsive w-100"
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 pb-3">
                    <img
                      src="/images/post_page/duty_part/single4.jpg"
                      alt="single"
                      className="img-responsive w-100"
                    />
                  </div>
                </div>
                <p className="mt-5">
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demoralized by the charms
                  of pleasure of the moment, so blinded by desire, that they
                  cannot foresee the pain and trouble that are bound to ensue;
                  and equal blame belongs to those who fail in their duty
                  through weakness of will
                </p>
                <div className="row my-5">
                  <div className="col-lg-6 col-6">
                    <span>Share:</span>
                    <ul className="list-unstyled d-inline-block ml-3">
                      <li className="d-inline-block mr-2">
                        <a
                          href="/"
                          className="body_size font_color_body font_color_body_icons"
                        >
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                      <li className="d-inline-block mr-2">
                        <a
                          href="/"
                          className="body_size font_color_body font_color_body_icons"
                        >
                          <i className="fa fa-facebook-square" />
                        </a>
                      </li>
                      <li className="d-inline-block mr-2">
                        <a
                          href="/"
                          className="body_size font_color_body font_color_body_icons"
                        >
                          <i className="fa fa-linkedin" />
                        </a>
                      </li>
                      <li className="d-inline-block">
                        <a
                          href="/"
                          className="body_size font_color_body font_color_body_icons"
                        >
                          <i className="fa fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6 col-6 text-right mb-3">
                    <span>3 Comments</span>
                  </div>
                </div>
              </div>
              <div className="special_comment text-center text-light">
                <div className="background_dark w-100 align-self-center padding_25">
                  <div className="ourStory_text_content px-5 pt-0">
                    <img
                      src="/images/post_page/avatars/avatar2.png"
                      alt="single"
                      className="img-responsive py-4"
                    />
                    <p className="font_color_link_onlight">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua enim ad minim veniam
                    </p>
                    <div className="ourStory_sign justify-content-center">
                      <div className="sign_text">
                        <h6 className="body_size font_weight_boldest">
                          KATHY LARSON
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="comments">
                <h2 className="font_weight_boldest font_color_head head_size_fonts my-5">
                  COMMENTS
                </h2>
                <div className="row mx-0 mb-5">
                  <div className="col-lg-2 col-md-2 col-2">
                    <img
                      src="/images/post_page/avatars/user-1.png"
                      alt="user"
                      className="w-100 img-responsive"
                    />
                  </div>
                  <div className="col-lg-10 col-md-10 col-10">
                    <div className="row mb-3 mx-0">
                      <h5 className="col-lg-3 col-md-4 px-0 body_size font_weight_boldest">
                        Amber Reyes
                      </h5>{" "}
                      <span className="col-lg-9 col-md-8">
                        March 28, 2018 at 9:12 am
                      </span>
                    </div>
                    <p>
                      But I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give you a complete account of the system, and expound the
                      actual
                    </p>
                    <div>
                      <a href="/" className="font_color_body">
                        <i className="fa fa-reply pr-2" />
                        <span>REPLY</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="row mx-0 ml-5 mb-5">
                  <div className="col-lg-2 col-md-2 col-2">
                    <img
                      src="/images/post_page/avatars/user-2.png"
                      alt="user"
                      className="w-100 img-responsive"
                    />
                  </div>
                  <div className="col-lg-10 col-md-10 col-10">
                    <div className="row mb-3 mx-0">
                      <h5 className="col-lg-3 col-md-4 px-0 body_size font_weight_boldest">
                        Amber Reyes
                      </h5>{" "}
                      <span className="col-lg-9 col-md-8">
                        March 28, 2018 at 9:12 am
                      </span>
                    </div>
                    <p>
                      The generated Lorem Ipsum is therefore always free from
                      repetition, injected humour, or non-characteristic words.
                    </p>
                    <div>
                      <a href="/" className="font_color_body">
                        <i className="fa fa-reply pr-2" />
                        <span>REPLY</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="row mx-0">
                  <div className="col-lg-2 col-md-2 col-2">
                    <img
                      src="/images/post_page/avatars/user-3.png"
                      alt="user"
                      className="w-100 img-responsive"
                    />
                  </div>
                  <div className="col-lg-10 col-md-10 col-10">
                    <div className="row mb-3 mx-0">
                      <h5 className="col-lg-3 col-md-4 px-0 body_size font_weight_boldest">
                        Jeffrey Stephens
                      </h5>{" "}
                      <span className="col-lg-9 col-md-8">
                        March 28, 2018 at 9:12 am
                      </span>
                    </div>
                    <p>
                      Nor again is there anyone who loves or pursues or desires
                      to obtain pain of itself, because it is pain, but because
                      occasionally circumstances occur in which toil and pain
                      can procure.
                    </p>
                    <div>
                      <a href="/" className="font_color_body">
                        <i className="fa fa-reply pr-2" />
                        <span>REPLY</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="post_comment mb-5">
                <h2 className="font_weight_boldest font_color_head head_size_fonts my-5">
                  POST A COMMENTS
                </h2>
                <form className="formContact">
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
          </div>
          <div className="col-lg-3 col-md-3">
            <div className="special_comment text-center text-light">
              <div className="background_dark w-100 align-self-center padding_10">
                <div className="ourStory_text_content padding_10">
                  <img
                    src="/images/post_page/avatars/avatar3.png"
                    alt="single"
                    className="img-responsive py-4 w-100"
                  />
                  <div className="ourStory_sign justify-content-center">
                    <div className="sign_text">
                      <h5 className="head_size_small font_weight_boldest">
                        BRYAN BENNETT
                      </h5>
                      <span className="font_color_span">Master Chef</span>
                      <img
                        src="/images/about_page/ourStory/sign.png"
                        className="img-responsive d-block w-100 px-5 mt-3 mx-auto"
                        alt="ourStory_sing"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="categories text-left">
              <h5 className="head_size_low font_color_head font_weight_boldest mt-5 mb-3">
                CATEGORIES
              </h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a className="font_color_body" href="/">
                    Seafood (<span>2</span>)
                  </a>
                </li>
                <li className="mb-2">
                  <a className="font_color_body" href="/">
                    Coffee (<span>5</span>)
                  </a>
                </li>
                <li className="mb-2">
                  <a className="font_color_body" href="/">
                    Restaurant (<span>18</span>)
                  </a>
                </li>
                <li className="mb-2">
                  <a className="font_color_body" href="/">
                    Cupcake (<span>22</span>)
                  </a>
                </li>
                <li className="mb-2">
                  <a className="font_color_body" href="/">
                    Lunch (<span>19</span>)
                  </a>
                </li>
              </ul>
            </div>
            <div className="latest_post text-left">
              <h5 className="head_size_low font_color_head font_weight_boldest mt-5 mb-3">
                LATEST POSTS
              </h5>
              <ul className="list-unstyled">
                <li className="row mx-0 my-3">
                  <div className="col-lg-4 col-3 px-0">
                    <img
                      className="img_hover_style"
                      src="/images/post_page/latest_post/latest_post_thumb1.png"
                      alt="post"
                    />
                  </div>
                  <div className="col-lg-8 col-8 align-self-center px-0 post_details">
                    <h6 className="body_size font_weight_boldest">
                      There many variations
                    </h6>
                    <span>July 23, 2018</span>
                  </div>
                </li>

                <li className="row mx-0 my-3">
                  <div className="col-lg-4 col-3 px-0">
                    <img
                      className="img_hover_style"
                      src="/images/post_page/latest_post/latest_post_thumb2.png"
                      alt="post"
                    />
                  </div>
                  <div className="col-lg-8 col-8 align-self-center px-0 post_details">
                    <h6 className="body_size font_weight_boldest">
                      All the Lorem Ipsum
                    </h6>
                    <span>July 23, 2018</span>
                  </div>
                </li>

                <li className="row mx-0 my-3">
                  <div className="col-lg-4 col-3 px-0">
                    <img
                      className="img_hover_style"
                      src="/images/post_page/latest_post/latest_post_thumb3.png"
                      alt="post"
                    />
                  </div>
                  <div className="col-lg-8 col-8 align-self-center px-0 post_details">
                    <h6 className="body_size font_weight_boldest">
                      The first line of Lorem
                    </h6>
                    <span>July 23, 2018</span>
                  </div>
                </li>

                <li className="row mx-0 my-3">
                  <div className="col-lg-4 col-3 px-0">
                    <img
                      className="img_hover_style"
                      src="/images/post_page/latest_post/latest_post_thumb4.png"
                      alt="post"
                    />
                  </div>
                  <div className="col-lg-8 col-8 align-self-center px-0 post_details">
                    <h6 className="body_size font_weight_boldest">
                      The standard chunk
                    </h6>
                    <span>July 23, 2018</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="instagram">
              <h5 className="head_size_low font_color_head font_weight_boldest mt-5 mb-3">
                FOLLOW INSTAGRAM
              </h5>
              <div className="row mx-0">
                <div className="col-lg-4 col-md-6 p-1 pl-0">
                  <img
                    className="w-100 img_hover_style"
                    src="/images/post_page/instagram_part/instagram1.jpg"
                    alt="instagram"
                  />
                </div>
                <div className="col-lg-4 col-md-6 p-1">
                  <img
                    className="w-100 img_hover_style"
                    src="/images/post_page/instagram_part/instagram2.jpg"
                    alt="instagram"
                  />
                </div>
                <div className="col-lg-4 col-md-6 p-1 pr-0">
                  <img
                    className="w-100 img_hover_style"
                    src="/images/post_page/instagram_part/instagram3.jpg"
                    alt="instagram"
                  />
                </div>
              </div>
              <div className="row mx-0">
                <div className="col-lg-4 col-md-6 p-1 pl-0">
                  <img
                    className="w-100 img_hover_style"
                    src="/images/post_page/instagram_part/instagram4.jpg"
                    alt="instagram"
                  />
                </div>
                <div className="col-lg-4 col-md-6 p-1">
                  <img
                    className="w-100 img_hover_style"
                    src="/images/post_page/instagram_part/instagram5.jpg"
                    alt="instagram"
                  />
                </div>
                <div className="col-lg-4 col-md-6 p-1 pr-0">
                  <img
                    className="w-100 img_hover_style"
                    src="/images/post_page/instagram_part/instagram6.jpg"
                    alt="instagram"
                  />
                </div>
              </div>
            </div>
            <div className="tags mb-5">
              <h5 className="head_size_low font_color_head font_weight_boldest mt-5 mb-3">
                TAG CLOUD
              </h5>
              <button type="button" className="btn btn-outline-dark m-2">
                Natural
              </button>
              <button type="button" className="btn btn-outline-dark m-2">
                Fruits
              </button>
              <button type="button" className="btn btn-outline-dark m-2">
                Dried
              </button>
              <button type="button" className="btn btn-outline-dark m-2">
                Food fresh
              </button>
              <button type="button" className="btn btn-outline-dark m-2">
                Natural
              </button>
              <button type="button" className="btn btn-outline-dark m-2">
                Heathy
              </button>
            </div>
            <div className="sale_banner mb-5">
              <img
                src="/images/post_page/widget-banner.jpg"
                alt="banner"
                className="w-100"
              />
            </div>
            <div>
              <form className="formContact position-relative">
                <input
                  type="text"
                  className="w-100 p-3 mb-4"
                  placeholder="ENTER FULL NAME"
                />
                <i className="fa fa-search position-absolute" />
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Post;

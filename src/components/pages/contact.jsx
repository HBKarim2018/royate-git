import React from "react";

import { Helmet } from "react-helmet";
import "../../about_page_style.css";
import "../../contact_page_style.css";
import Footer from "../includes/footer";
const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>ROYATE |Contact|</title>
      </Helmet>
      <section className="height_video_fullscreen background_contact background_responsive p-0">
        <div className="position-relative w-100 z_index_1 padding_x_high height_video_fullscreen backgroud_dark_opacity">
          <h1 className="text-light font_weight_boldest head_line_height head_size_high">
            CONTACT US
          </h1>
          <span className="font_family_span font_color_span head_span_size_normal mb-5 font_weight_normal">
            ~ More than you know ~
          </span>
        </div>
      </section>

      <section className="container text-left padding_top_10">
        <div className="row">
          <div className="col-lg-6">
            <div className="row mx-0 mb-4 pb-4">
              <h1 className="head_span_size_normal font_color_head">
                OUR OFFICE
              </h1>
              <p className="mb-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti.
              </p>
            </div>
            <div className="row mx-0 mb-4">
              <div className="col-lg-6 pl-0">
                <h6 className="head_size_low font_color_head">NewYork</h6>
                <p className="mb-0">No 40 Baria Sreet 133/2 NewYork 13589</p>
              </div>
              <div className="col-lg-6 pl-0">
                <h6 className="head_size_low font_color_head">Barcelona</h6>
                <p className="mb-0">
                  184 Main Collins Street West 8007 Barselona 23765
                </p>
              </div>
            </div>
            <div className="row mx-0">
              <div className="col-lg-6 pl-0">
                <p className="mb-0">Email: kathryn-92@example.com</p>
                <p className="mb-0">Phone: (849) 490 4283</p>
              </div>
              <div className="col-lg-6 pl-0">
                <p className="mb-0">Email: kathryn-92@example.com</p>
                <p className="mb-0">Phone: (849) 490 4283</p>
              </div>
              <div className="col-lg-12">
                <ul className="list-unstyled pt-5">
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
          <div className="col-lg-6">
            <form className="formContact">
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
              <textarea
                className="w-100 p-3 mb-4"
                placeholder="ENTER MESSAGE"
                rows="7"
              />
              <button className="background_dark_off border_radius background_none border_none border_hover_none p-2 px-4 background_light_hover">
                <a className="link_light_hover" href="/">
                  SEND MESSAGE
                </a>
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="googleMap">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d193542.78971339157!2d-74.003427!3d40.715681!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1545613283340"
          height="350"
          frameBorder="0"
          allowFullScreen
          title="google map"
          className="w-100"
        />
      </section>
      <Footer />
    </div>
  );
};

export default Contact;

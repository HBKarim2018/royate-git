import React from "react";
import "../../error_page_style.css";

import { Helmet } from "react-helmet";
const Error404 = () => {
  return (
    <div>
      <Helmet>
        <title>404 PAGE NOT FOUND</title>
      </Helmet>
      <section className="height_screen text-center background_error position-fixed w-100 p-0">
        <div className="position-relative w-100 z_index_1 padding_x_high height_screen backgroud_dark_opacity">
          <span className="font_family_span font_color_span mb-5 font_weight_boldest head_size_high">
            <i className="fa fa-exclamation-triangle" />
            <p>404</p>
          </span>

          <button className="head_size_low mt-3 border_radius background_none border border_hover_none p-1 px-4 background_light_hover border-white">
            <a className="link_light_hover" href="/">
              {" "}
              GO BACK HOME{" "}
            </a>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Error404;

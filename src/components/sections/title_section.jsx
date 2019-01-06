import React from "react";

const Title = () => {
  return (
    <section className="height_video_fullscreen p-0">
      <div className="w_100 position-absolute height_video_fullscreen overflow_hidden z_index_0">
        <video
          playsInline="playsinline"
          autoPlay="autoplay"
          muted="muted"
          loop="loop"
          className="w-100 w_responsive_150 w_responsive_180"
        >
          <source
            src="./images/backgrounds/background-video.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="position-relative w-100 z_index_1 padding_x_high">
        <h1 className="font-weight-bold head_size_high font_color_span mb-0">
          EXPERIENCE THE FOOD
        </h1>
        <p className="head_size_low letter_spacing_2 font_color_num2 my-5 p_margin_lg">
          WISH YOU HAVE GOOD FOOD AT OUR RESTAURANT
        </p>
        <button className="head_size_low mt-3 border_radius background_none border border_hover_none p-1 px-4 background_light_hover border-white">
          <a className="link_light_hover" href="/reservation">
            {" "}
            BOOKING NOW{" "}
          </a>
        </button>
      </div>
    </section>
  );
};

export default Title;

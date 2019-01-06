import React from "react";

const BookTable = () => {
  return (
    <section className="row height-section mx-0">
      <div className="col-md-6 col-sm-12 p-0 overflow_hidden hidden-md">
        <img
          className="img-responsive w-150 margin_left_21 width_lg_img_184 ml_img_lg_43 width_md_img_230 ml_img_md_70"
          src="./images/book_table/book_a_table.jpg"
          alt="book table"
        />
      </div>
      <div className="col-md-6 col-sm-12 background_dark padding_7">
        <div className="mb-5 ">
          <h2 className="text-light font_weight_boldest head_line_height head_size_normal">
            BOOK A TABLE
          </h2>
          <span className="font_family_span font_color_span head_span_size_normal font_weight_normal">
            ~ Check out our place ~
          </span>
        </div>
        <form>
          <div className="row mb-4 pb-3 margin_bottom_responsive_0 padding_bottom_responsive_0">
            <div className="col-lg-6 col-md-12 align-self-end">
              <select className="w-90 border_radius_none p-0 border_none custom-select special_style_book_input margin_bottom_responsive_5 font_color_link_onlight background_none border_bottom_onlight">
                <option>1 people</option>
                <option>2 people</option>
                <option>3 people</option>
                <option>4 people</option>
                <option>5 people</option>
                <option>6 people</option>
                <option>7 people</option>
                <option>8 people</option>
                <option>9 people</option>
                <option>10 people</option>
              </select>
            </div>
            <div className="col-lg-6 col-md-12 align-self-end">
              <i className="fa fa-calendar position-absolute right_26 right_responsive_50 font_color_link_onlight" />
              <input
                type="date"
                placeholder="Date"
                className="w-90 background_none border_bottom_onlight border_none border_none special_style_book_input margin_bottom_responsive_5 font_color_link_onlight"
              />
            </div>
          </div>

          <div className="row mb-4 pb-3 margin_bottom_responsive_0 padding_bottom_responsive_0">
            <div className="col-lg-6 col-md-12 align-self-end">
              <select className="w-90 border_radius_none p-0 border_none custom-select special_style_book_input margin_bottom_responsive_5 font_color_link_onlight background_none border_bottom_onlight">
                <option>10 : 00 am</option>
                <option>11 : 00 am</option>
                <option>12 : 00 am</option>
                <option> 1 : 00 pm</option>
                <option> 2 : 00 pm</option>
                <option> 3 : 00 pm</option>
                <option> 4 : 00 pm</option>
                <option> 5 : 00 pm</option>
                <option> 6 : 00 pm</option>
                <option> 7 : 00 pm</option>
                <option> 8 : 00 pm</option>
                <option> 9 : 00 pm</option>
                <option>10 : 00 pm</option>
              </select>
            </div>
            <div className="col-lg-6 col-md-12 align-self-end">
              <input
                type="text"
                placeholder="Name"
                className="w-90 border_none special_style_book_input margin_bottom_responsive_5 font_color_link_onlight background_none border_bottom_onlight border_none"
              />
            </div>
          </div>
          <div className="row mb-4 pb-3 margin_bottom_responsive_0 padding_bottom_responsive_0">
            <div className="col-lg-6 col-md-12 align-self-end">
              <i className="fa fa-phone-square position-absolute right_26 right_responsive_50 font_color_link_onlight" />
              <input
                type="phone"
                placeholder="Phone"
                className="w-90 border_none special_style_book_input margin_bottom_responsive_5 font_color_link_onlight background_none border_bottom_onlight border_none"
              />
            </div>
            <div className="col-lg-6 col-md-12 align-self-end">
              <input
                type="email"
                placeholder="Email"
                className="w-90 border_none special_style_book_input margin_bottom_responsive_5 font_color_link_onlight background_none border_bottom_onlight border_none"
              />
            </div>
          </div>
          <button className="mt-3 background_dark_off border_radius background_none border_none border_hover_none p-2 px-4 background_light_hover">
            <a className="link_light_hover" href="/">
              BOOK NOW
            </a>
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookTable;

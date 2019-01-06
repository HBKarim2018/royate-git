import React, { Component } from "react";

class Header extends Component {
  state = {
    headerClass: "p-0 py-1 w-100 position-fixed z_index_3 text-light",
    widthLogo: "w-75 logo",
    navIconClass: "d-inline-block navbar-nav head_size_fonts"
  };
  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll, { passive: true });
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  handleScroll = event => {
    if (window.scrollY) {
      this.setState({
        headerClass:
          "background_dark p-0 py-1 w-100 position-fixed z_index_3 text-light",
        navIconClass: "d-inline-block navbar-nav",
        widthLogo: "w-50 logo"
      });
    } else {
      this.setState({
        headerClass: "p-0 py-1 w-100 position-fixed z_index_3 text-light",
        navIconClass: "d-inline-block navbar-nav head_size_fonts",
        widthLogo: "w-75 logo"
      });
    }
  };

  render() {
    return (
      <header className={this.state.headerClass}>
        <nav className="container navbar w-100 navbar-expand-xl p-0">
          <button
            className="navbar-toggler show_menu"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa fa-align-justify text-light" />
          </button>

          <a className="navbar-brand" href="/">
            <img
              src="./images/logo/logo.png"
              className={this.state.widthLogo}
              alt="Logo"
            />
          </a>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav marginx-auto text-uppercase">
              <li className="nav-item mr-3 d-xl-none">
                <button
                  className="background_dark border_none float-right back_memu"
                  data-toggle="collapse"
                  data-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-label="Toggle navigation"
                >
                  <i className="fa fa-backward back text-light" />
                </button>
              </li>

              <li className="nav-item mr-3 active">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item mr-3">
                <a className="nav-link" href="/Menu">
                  Menu
                </a>
              </li>
              <li className="nav-item mr-3">
                <a className="nav-link" href="/Reservation">
                  Reservation
                </a>
              </li>
              <li className="nav-item mr-3">
                <a className="nav-link" href="/Blog">
                  Blog
                </a>
              </li>
              <li className="nav-item mr-3">
                <a className="nav-link" href="/About">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <ul className={this.state.navIconClass}>
            <li className="nav-item d-inline-block mr-3">
              <a className="nav-link boxInfoShow" href="/">
                <i className="fa fa-free-code-camp" />
              </a>
              <div className="boxInfo position-fixed">
                <div className="background_dark_on text-light m-3 py-3">
                  <div className="container">
                    <div className="row mb-3">
                      <div className="col-4">
                        <img
                          src="/images/shop_page/products/product_1.jpg"
                          alt="product"
                          className="w-100 img-responsive"
                        />
                      </div>
                      <div className="col-6 text-left p-0">
                        <h6 className="m-0">Best Brownies</h6>
                        <p className="m-0 font_color_body_num2">$18</p>
                        <span className="m-0 font_color_span">x1</span>
                      </div>
                      <div className="col-1 align-self-center">
                        <i className="fa fa-times-circle" />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-4">
                        <img
                          src="/images/shop_page/products/product_2.jpg"
                          alt="product"
                          className="w-100 img-responsive"
                        />
                      </div>
                      <div className="col-6 text-left p-0">
                        <h6 className="m-0">Best Brownies</h6>
                        <p className="m-0 font_color_body_num2">$18</p>
                        <span className="m-0 font_color_span">x1</span>
                      </div>
                      <div className="col-1 align-self-center">
                        <i className="fa fa-times-circle" />
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-6 text-left">
                        <h6>SUBTOTAL:</h6>
                      </div>
                      <div className="col-6 text-right">
                        <h5>$220</h5>
                      </div>
                    </div>
                    <div className="row font_color_span">
                      <div className="col-6 text-left">
                        <h6>TOTAL:</h6>
                      </div>
                      <div className="col-6 text-right">
                        <h5>$220</h5>
                      </div>
                    </div>
                    <hr />
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item d-inline-block">
              <i className="fa fa-search search_icon" />
              <div className="position-fixed w-100 right_0 search_element">
                <div className="background_dark_on text-light p-3">
                  <form>
                    <div className="input-group w-75 mx-auto head_size_small">
                      <input
                        type="text"
                        className="form-control p-3 border border-secondary border_radius font_color_body_num2 background_none"
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                      />
                      <div className="input-group-append">
                        <button
                          className="btn btn-outline-secondary border_radius"
                          type="button"
                        >
                          <i className="fa fa-search px-3" />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;

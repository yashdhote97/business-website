import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {removeProduct} from "../reducers";
import CheckoutItems from "./Checkoutitems";
import "./layout.css";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "none",
      style: {
        opacity: 0,
        transition: "opacity 300ms ease 0s",
        display: "none",
      },
      transform: { transform: "none" },
      cartItems: [],
      totalPrice: 0,
      responsive:{responsiveDisplay:"none",responsiveClass:"nav-button w-nav-button"}
    };
  }
  handleClick = () => {
    if (this.state.display === "none") {
      this.setState({
        style: { opacity: 1, transition: "opacity 300ms ease 0s" },
        display: "show",
        transform: {
          transform: "translateX(0px)",
          transition: "transform 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s",
        },
        cartItems: this.filterCartList(),
        totalPrice: this.state.cartItems.reduce(
          (a, item) => a + item.count * item.price,
          0
        ),
      });
    } else {
      this.setState({
        style: {
          opacity: 0,
          transition: "opacity 300ms ease 0s",
          display: "none",
        },
        display: "none",
        transform: { transform: "none" },
      });
    }
  };
  handleResponsive=()=>{
    if(this.state.responsive.responsiveDisplay==="none"){
      this.setState({responsive:{responsiveDisplay:"block",responsiveClass:"nav-button w-nav-button w--open"}})
      console.log(this.state.responsiveDisplay)
    }
    else{
      this.setState({responsive:{responsiveDisplay:"none",responsiveClass:"nav-button w-nav-button"}})
      console.log(this.state.responsiveDisplay)
    }
  };
  filterCartList = () => {
    let cartListArr = JSON.parse(JSON.stringify(this.props.cartList));
    let filterArr = cartListArr.reduce(function (a, e, i) {
      let val = a.findIndex((el) => el.id === e.id);
      if (val === -1) {
        a.push(e);
      } else {
        a[val].count += e.count;
      }
      return a;
    }, []);
    this.setState({
      totalPrice: filterArr.reduce((a, item) => a + item.count * item.price, 0),
    });
    return filterArr;
  };
  componentDidUpdate(prevProps) {
    if (this.props.cartList.length !== prevProps.cartList.length) {
      this.setState({
        cartItems: this.filterCartList(),
      });
    }
  }
  render() {
    return (
      <div className="menu-wrapper">
        <div className="w-dyn-list">
          <div role="list" className="w-dyn-items">
            <div role="listitem" className="w-dyn-item">
              <a
                href="/alert/how-were-responding-to-covid-19"
                className="banner w-inline-block"
              >
                <div className="container">
                  <div className="banner-content-wrapper">
                    <div className="pill primary alert-bar">Announcement</div>
                    <div>How we're responding to COVID-19</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div
          data-collapse="medium"
          data-animation="over-right"
          data-duration="400"
          role="banner"
          className="navbar w-nav"
        > 
          <div className="container">
            <div className="nav-wrapper">
              <Link
                to="/"
                aria-current="page"
                className="brand w-nav-brand w--current"
              >
                <img
                  src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57adad44d1f072965b6_logo.svg"
                  alt="Acme Outdoors Logo"
                />
              </Link>
              <div className="cart-nav-wrapper">
                <nav role="navigation" className="nav-menu w-nav-menu">
                  <Link
                    to="/"
                    aria-current="page"
                    className="nav-link w-nav-link w--current"
                  >
                    Home
                  </Link>
                  <Link to="/about" className="nav-link w-nav-link">
                    About
                  </Link>
                  <Link to="/shop" className="nav-link w-nav-link">
                    Shop
                  </Link>
                  <Link to="/donations" className="nav-link w-nav-link">
                    Donate
                  </Link>
                  <Link to="/contact" className="nav-link w-nav-link">
                    Contact
                  </Link>
                </nav>
                <div>
                  <div
                    className="w-commerce-commercecartopenlink cart w-inline-block"
                    onClick={this.handleClick}
                  >
                    <img
                      src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e86146bb854797d12a30a13_cart.svg"
                      alt=""
                      className="cart-icon"
                    />
                    <div className="w-commerce-commercecartopenlinkcount cart-quantity-cart">
                      {this.props.cartCount}
                    </div>
                  </div>
                  {/* This is tested */}

                  <div
                    style={this.state.style}
                    className="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-rightSidebar"
                  >
                    <div
                      className="w-commerce-commercecartcontainer"
                      style={this.state.transform}
                    >
                      <div className="w-commerce-commercecartheader">
                        <h4 className="w-commerce-commercecartheading">
                          Your Cart
                        </h4>
                        <div
                          onClick={this.handleClick}
                          className="w-commerce-commercecartcloselink w-inline-block"
                          style={{ cursor: "pointer" }}
                        >
                          <svg width="16px" height="16px" viewBox="0 0 16 16">
                            <g
                              stroke="none"
                              strokeWidth={1}
                              fill="none"
                              fillRule="evenodd"
                            >
                              <g fillRule="nonzero" fill="#333333">
                                <polygon points="6.23223305 8 0.616116524 13.6161165 2.38388348 15.3838835 8 9.76776695 13.6161165 15.3838835 15.3838835 13.6161165 9.76776695 8 15.3838835 2.38388348 13.6161165 0.616116524 8 6.23223305 2.38388348 0.616116524 0.616116524 2.38388348 6.23223305 8" />
                              </g>
                            </g>
                          </svg>
                        </div>
                      </div>
                      <div className="w-commerce-commercecartformwrapper">
                        {this.props.cartCount > 0 ? (
                          <form
                            style={{}}
                            className="w-commerce-commercecartform"
                          >
                            <div className="w-commerce-commercecartlist">
                              {/* here */}
                              {this.state.cartItems.length &&
                                this.state.cartItems?.map((item, index) => (
                                  <CheckoutItems product={item} key={index} />
                                ))}
                            </div>
                            <div className="w-commerce-commercecartfooter">
                              <div className="w-commerce-commercecartlineitem">
                                <div>Subtotal</div>
                                <div className="w-commerce-commercecartordervalue">
                                  $&nbsp;{this.state.totalPrice}&nbsp;USD
                                </div>
                              </div>
                              <div>
                                <div
                                  value="Continue to Checkout"
                                  className="w-commerce-commercecartcheckoutbutton btn"
                                  onClick={()=>this.props.checkoutCart("emptyCart")}
                                >
                                  Continue to Checkout
                                </div>
                              </div>
                            </div>
                          </form>
                        ) : (
                          <div className="w-commerce-commercecartemptystate">
                            <div>No items found.</div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* This is tested */}
                </div>
                <div className={this.state.responsive.responsiveClass}>
                  <div className="w-icon-nav-menu" onClick={this.handleResponsive}></div>
                </div>
              </div>
            </div>
          </div>
          {/* test */}
          <div
            className="w-nav-overlay"
            data-wf-ignore
            style={{ height: window.innerHeight, display: this.state.responsive.responsiveDisplay, width: window.innerWidth }}
          >
            <nav
              role="navigation"
              className="nav-menu w-nav-menu"
              style={{
                transform: "translateX(0px) translateY(0px)",
                height: window.innerHeight,
                transition: "transform 400ms ease 0s",
              }}
              data-nav-menu-open
            >
              <Link to="/" className="nav-link w-nav-link w--nav-link-open">
                Home
              </Link>
              <Link to="/about" className="nav-link w-nav-link w--nav-link-open">
                About
              </Link>
              <Link to="/shop" className="nav-link w-nav-link w--nav-link-open">
                Shop
              </Link>
              <Link
                to="/donations"
                aria-current="page"
                className="nav-link w-nav-link w--current w--nav-link-open"
              >
                Donate
              </Link>
              <Link
                to="/contact"
                className="nav-link w-nav-link w--nav-link-open"
              >
                Contact
              </Link>
            </nav>
          </div>
          {/* /test */}
        </div>
      </div>
    );
  }
}
const mapStateToProps=(store) => ({
  cartCount: store?.cartProducts.reduce((a, item) => a + item.count, 0),
  cartList: store?.cartProducts,
});
const mapDispatchToProps = (dispatch) => ({
  checkoutCart: (productCheckout) => dispatch(removeProduct(productCheckout)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);

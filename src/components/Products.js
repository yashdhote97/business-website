import React, { Component } from "react";
import { productData } from "../CommonData";
import { Redirect } from "react-router-dom";
import { addProduct } from "../reducers";
import { connect } from "react-redux";
import "./layout.css";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = { productInfo: {}, redirect: "/error", productCount: 1 };
  }
  componentDidMount() {
    const { productid } = this.props.match.params;
    let productDetails = productData.filter(
      (product) => product.name === productid
    )[0];
    this.setState({ productInfo: productDetails });
    this.setState((preState) => ({
      productInfo: {
        ...preState.productInfo,
        count: this.state.productCount,
      },
    }));
    window.scrollTo(0, 0);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.productCount !== this.state.productCount && !isNaN(parseInt(this.state.productCount))) {
      this.setState((preState) => ({
        productInfo: {
          ...preState.productInfo,
          count: this.state.productCount,
        },
      }));
    }
  }
  handleChange = (event) => {
    // if(isNaN(parseInt(event.target.value))){
    //   alert("please enter values between 1-9")
    // }
    // else{
    this.setState({ productCount: parseInt(event.target.value) });
    // }
  };
  render() {
    if (this.state.productInfo === undefined) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <div className="content-section">
        <div className="container">
          <div className="shopping-page-wrapper">
            <div className="shopping-page-left">
              <div
                style={{
                  backgroundImage: `url(${this.state.productInfo.imageUrl})`,
                }}
                className="shopping-page-image"
              >
                <div className="pill-2 badge primary sale w-condition-invisible">
                  Sale
                </div>
              </div>
            </div>
            <div className="shipping-page-right">
              <h2 className="page-product-headin">
                {this.state.productInfo.title}
              </h2>
              <div className="page-price-wrapping">
                <div className="shop-item-price-page">
                  $&nbsp;{this.state.productInfo.price}&nbsp;USD
                </div>
                <div className="shop-item-price-page compare-at w-condition-invisible w-dyn-bind-empty"></div>
              </div>
              <div>
                <form className="w-commerce-commerceaddtocartform">
                  <label htmlFor="productCounter">Quantity</label>
                  <div className="add-to-cart-page-wrapper">
                    <input
                      type="number"
                      pattern="^[0-9]+$"
                      inputMode="numeric"
                      name="add-to-cart-quantity-input"
                      id="productCounter"
                      min="1"
                      className="w-commerce-commerceaddtocartquantityinput input cart-quantity"
                      value={this.state.productCount}
                      onChange={this.handleChange}
                    />
                    <input
                      type="submit"
                      onClick={(e) =>{
                        e.preventDefault();
                        this.props.addProductToCart(this.state.productInfo)
                      }
                      }
                      value="Add To Cart"
                      data-node-type="commerce-add-to-cart-button"
                      data-loading-text="Adding to cart..."
                      className="w-commerce-commerceaddtocartbutton btn outline"
                    />
                  </div>
                </form>
              </div>
              <div className="w-richtext">
                <h2>What’s a Rich Text element?</h2>
                <p>
                  The rich text element allows you to create and format
                  headings, paragraphs, blockquotes, images, and video all in
                  one place instead of having to add and format them
                  individually. Just double-click and easily create content.
                </p>
                <h4>Static and dynamic content editing</h4>
                <p>
                  A rich text element can be used with static or dynamic
                  content. htmlFor static content, just drop it into any page
                  and begin editing. htmlFor dynamic content, add a rich text
                  field to any collection and then connect a rich text element
                  to that field in the settings panel. Voila!
                </p>
                <h4>How to customize formatting htmlFor each rich text</h4>
                <p>
                  Headings, paragraphs, blockquotes, figures, images, and figure
                  captions can all be styled after a className is added to the
                  rich text element using the "When inside of" nested selector
                  system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addProductToCart: (product) => dispatch(addProduct(product)),
});
export default connect(null, mapDispatchToProps)(Products);

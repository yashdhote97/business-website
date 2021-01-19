import React, { Component } from "react";
import Card from "./Card";
import {productData} from "../CommonData";
import {getProduct} from "../reducers"
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./layout.css";

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount(){
    this.props.dispatchProducts(productData);
  }
  render() {
    let {products}=this.props;
    return (
      <>
        <div className="page-title-section">
          <div className="container">
            <h1 className="page-title">Shop Our Products</h1>
          </div>
        </div>
        <div className="content-section featured-section">
          <div className="container">
            <div className="w-dyn-list">
              <div role="list" className="w-dyn-items">
                <div role="listitem" className="w-dyn-item">
                  <Link to="/product/white-tent"
                    style={{
                      backgroundImage:
                        'url("https://assets.website-files.com/5e853c3383474026e43f2c78/5e856e41c718420c18dd6751_patrick-hendry-eDgUyGu93Yw-unsplash.jpg")',
                    }}
                    className="featured-wrapper w-inline-block"
                  >
                    <div className="pill-2 badge primary featured">
                      Featured Item
                    </div>
                    <div className="feature-text-wrapper">
                      <h3 className="featured-item-name">White Tent</h3>
                      <div
                        data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
                        className="featured-price"
                      >
                        $&nbsp;200.00&nbsp;USD
                      </div>
                    </div>
                    <div className="featured-gradient-overlay"></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-section">
          <div className="container">
            <div className="shop-page-wrapper">
              <div className="shop-category-menu">
                <h2 className="category-menu-heading">Shop by Category</h2>
              </div>
              <div className="shop-list">
                <div className="products-list-wrapper w-dyn-list">
                  <div role="list" className="products-list w-dyn-items">
                    {products.length &&
                      products?.map((item, index) => (
                        <Card product={item} key={index} />
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchProducts: (data) => dispatch(getProduct(data))
})

const mapStateToProps = (store) => ({
  products: store?.products,
});

export default connect(mapStateToProps,mapDispatchToProps)(Shop);

import React from 'react';
import { Link } from "react-router-dom";
import "./layout.css";

const Card = (props) => {
    let {product}=props;
    let productPath=`/product/${product.name}`
    return ( 
        <div role="listitem" className="w-dyn-item">
        <div className="shop-item-wrapper">
          <Link to={productPath}
            className="shop-item-link-wrapper w-inline-block"
          >
            <div
              style={{backgroundImage:`url(${product.imageUrl})`}}
              className="shop-image tumbler-1"
            >
              <div
                className="pill-2 badge primary sale w-condition-invisible"
              >
                Sale
              </div>
            </div>
            <div className="shop-details-wrapper">
              <div className="shop-details-left">
                <div className="shop-item-name">{product.title}</div>
                <div className="price-wrapper">
                  <div
                    className="shop-item-price"
                  >
                    $&nbsp;{product.price}&nbsp;USD
                  </div>
                  <div
                    className="shop-item-price compare w-condition-invisible w-dyn-bind-empty"
                  ></div>
                </div>
              </div>
            </div>
          </Link>
          <div className="shop-button-wrapper">
            <Link to={productPath} className="btn w-button">
              Details
            </Link>
          </div>
        </div>
      </div>
     );
}
 
export default Card;
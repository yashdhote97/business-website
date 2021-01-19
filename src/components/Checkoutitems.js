import React from 'react';
import { useDispatch } from 'react-redux';
import {removeProduct} from '../reducers';
import "./layout.css";

const CheckoutItems = ({product}) => {
    const dispatch = useDispatch();
    return ( 
        <div className="w-commerce-commercecartitem cart-item">
        <div className="cart-image-wrapper">
          <img
            src={product.imageUrl}
            alt=""
            className="w-commerce-commercecartitemimage product-image-cart"
          />
        </div>
        <div className="w-commerce-commercecartiteminfo">
          <div className="w-commerce-commercecartproductname">
            {product.title}
          </div>
          <div>$&nbsp;{product.price}&nbsp;USD</div>
          <ul className="w-commerce-commercecartoptionlist" />
          <div className="w-inline-block" style={{cursor:"pointer",color:"#EB5757"}} onClick={()=>dispatch(removeProduct(product))}>
            <div>Remove</div>
          </div>
        </div>
        <input
          className="w-commerce-commercecartquantity input cart-quantity"
          name="quantity"
          readOnly
          value={product.count}
        />
      </div>
     );
}
 
export default CheckoutItems;
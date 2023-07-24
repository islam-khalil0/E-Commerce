import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TempletCart from "./TempletCart";
import "./Cart.css";
import Footer from "../Footer/Footer";
import { removeAll } from "../../Redux/contants/ProductActions";
import Head from "../Head/Head";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartReducer.cart);
  console.log(cartItems);

  const TotalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );

  const dispatch = useDispatch();

  return (
    <>
      <Head />
      <div className="baseDiv">
        <div className="contentContainer">
          <div className="top">
            <h1>Cart</h1>
            <p onClick={() => dispatch(removeAll())}>Remove All</p>
          </div>
          <div className="content">
            <div className="top2">
              <p>Product</p>
              <p>Quantity</p>
              <p>Price</p>
            </div>
            {cartItems ? (
              cartItems.map((item) => <TempletCart {...item} key={item.id} />)
            ) : (
              <p>loading...</p>
            )}
          </div>
        </div>
        <div className="TotalPriceCart">
          <div className="sub">
            <p>Subtotal</p>
            <p>$ {TotalPrice}</p>
          </div>
          <div className="Dis">
            <p>Discount</p>
            <p>$ 0</p>
          </div>
          <div className="Gra">
            <p>Grand total</p>
            <p className="total">$ {TotalPrice}</p>
          </div>
          <button>Checkout now</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;

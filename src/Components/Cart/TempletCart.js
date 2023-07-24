import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { DeleteFromCart } from "../../Redux/contants/ProductActions";
import "./Cart.css";
const TempletCart = (item) => {
  const dispatch = useDispatch();

  const delItem = (item) => {
    dispatch(DeleteFromCart(item));
  };

  return (
    <>
      <div className="cartContainer">
        <div className="right">
          <img src={item.image} />
          <span>
            <p className="title">{item.title}</p>
            <p className="size">{item.size}</p>
          </span>
        </div>
        <div className="center">
          <p>{item.qty}</p>
          <span onClick={() => delItem(item)}>remove</span>
        </div>
        <div className="left">
          <p>{`$ ${item.price * item.qty}`}</p>
        </div>
      </div>
    </>
  );
};

export default TempletCart;

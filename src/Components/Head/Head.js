import React, { useState } from "react";
import Nav from "../Nav/Nav";
import "./head.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut, removeAll } from "../../Redux/contants/ProductActions";
import { LoadState } from "../../Redux/reducers/productsReducers";

const Head = () => {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const cartItems = useSelector((state) => state.cartReducer.cart);
  const itemQty = cartItems.reduce((total, item) => total + item.qty, 0);
  console.log(cartItems);
  const handelOpen = () => {
    setOpen(!open);
  };

  const dispatch = useDispatch();

  const LogOut = () => {
    dispatch(logOut());
    dispatch(removeAll());
  };

  const CurrentUser = useSelector((state) => state.UsersReducer.user);
  const users = useSelector((state) => state.UsersReducer.users);

  console.log(CurrentUser);
  console.log(users);

  const user = users?.find((user) =>
    CurrentUser ? user.email === CurrentUser.email : ""
  );

  return (
    <>
      <div className="fixedPosition">
        <div className="headerContainer">
          <div className="top3">
            <h2>
              Shopping<span style={{ color: "#E57C23" }}>Cart</span>
            </h2>
            <p style={{ color: "white" }} className="name">
              {CurrentUser ? `Welcome' ` : ""}
              {CurrentUser && (
                <span style={{ fontWeight: "bold" }}>{user.firstName}</span>
              )}
            </p>
          </div>

          <div className="searchDiv">
            <div className="form-group has-search">
              <span className="fa fa-search form-control-feedback">
                <BiSearchAlt style={{ fontSize: "20px" }} />
              </span>
              <input
                type="search"
                className="form-control"
                placeholder="Search"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
          </div>

          <div className="icons">
            {CurrentUser ? (
              <p style={{ fontSize: "13px" }} onClick={LogOut}>
                LogOut
              </p>
            ) : (
              <Link style={{ color: "white" }} to="/signUp">
                <p style={{ fontSize: "13px" }}>SignUp</p>
              </Link>
            )}

            <span className="cartIcon">
              <NavLink to="/cart" style={{ color: "white" }}>
                <AiOutlineShoppingCart style={{ fontSize: "20px" }} />
              </NavLink>
              {cartItems.length > 0 ? (
                <p style={{ color: "#F86F03" }}>{itemQty}</p>
              ) : (
                ""
              )}
            </span>
            <AiOutlineMenu className="menuIcon" onClick={() => handelOpen()} />
          </div>
        </div>

        <Nav open={open} setOpen={setOpen} />
      </div>
    </>
  );
};

export default Head;

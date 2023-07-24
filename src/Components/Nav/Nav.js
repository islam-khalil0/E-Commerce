import React, { useState } from "react";
import "./nav.css";
import { NavLink } from "react-router-dom";

const NavBar = ({ open, setOpen }) => {
  const handelOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className={open ? "nav " : "nav close"}>
        <ul>
          <li>
            <NavLink className={"navLink"} to="/">
              <a onClick={() => handelOpen()}>Home</a>
            </NavLink>
          </li>
          <li>
            <NavLink className={"navLink"} to="/offers">
              <a onClick={() => handelOpen()}>offers</a>
            </NavLink>
          </li>
          <li>
            <NavLink className={"navLink"} to="/blog">
              <a onClick={() => handelOpen()}>Blog</a>
            </NavLink>
          </li>
          <li>
            <NavLink className={"navLink"} to="/contact">
              <a onClick={() => handelOpen()}>Contact</a>
            </NavLink>
          </li>
          <li>
            <NavLink className={"navLink"} to="/about">
              <a onClick={() => handelOpen()}>about</a>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;

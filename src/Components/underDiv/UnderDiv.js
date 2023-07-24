import React from "react";
import Aside from "./Aside";
import Content from "./Content";
import "./underDiv.css";

const UnderDiv = () => {
  return (
    <div className="baseDivUnderDiv">
      <div className="containerUnderDiv">
        <Aside />
        <Content />
      </div>
    </div>
  );
};

export default UnderDiv;

import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaCcVisa } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footerBaseDive">
      <div className="top">
        <div className="oneDiv">
          <h2 style={{ color: "white" }}>
            Shopping<span style={{ color: "#E57C23" }}>Cart</span>
          </h2>
          <p>
            lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            lorem
          </p>
          <div className="icons">
            <FaFacebook />
            <BsTwitter className="centerIcon" />
            <BsInstagram />
          </div>
        </div>
        <div className="twoDiv">
          <h4>Collection</h4>
          <p>Summer</p>
          <p>women's Dresses</p>
          <p>women's jackets</p>
          <p>men's shirts</p>
        </div>
        <div className="threeDiv">
          <h4>Contact</h4>
          <p>4708 street Downtown Tahrir Square </p>
          <p>+201123526875</p>
          <p>info@example.com</p>
        </div>
        <div className="fourDiv">
          <h4>PAYMENT METHODS</h4>
          <p>lorem lorem lorem lorem lorem lorem lorem lorem</p>
          <div className="pecPaymentMethod">
            <FaCcVisa />
            <FaCcPaypal />
            <FaCcMastercard />
          </div>
        </div>
      </div>
      <span className="line">'</span>
      <div className="lower">
        <p>© 2023. All rights reserved by Islam Khalil .</p>
      </div>
    </div>
  );
};

export default Footer;

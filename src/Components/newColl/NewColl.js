import React, { useState } from "react";
import "./NewColl.css";
import { GiClothes } from "react-icons/gi";
import { GiBallerinaShoes } from "react-icons/gi";
import { BiMenuAltLeft } from "react-icons/bi";
import { MdOutlineComputer } from "react-icons/md";
import { AiFillClockCircle } from "react-icons/ai";
import { MdFoodBank } from "react-icons/md";
import { CgGames } from "react-icons/cg";


const NewColl = () => {

  const [closeMenu , setClose ] = useState(true);

  const handelUseState = () => {
    setClose(!closeMenu);
    console.log(closeMenu);
  }


  return (
    <div className="baseDivL">
     
      <div className="containerLanding">
        <h4 style={{ color: "#e28330" }}>TOP BRANDS</h4>
        <h1 style={{ fontWeight: "bold" }}>NEW COLLECTION</h1>
        <p>lorem lorem lorem lorem lore</p>
        <button>SHOP NOW</button>
      </div>
      
      <div className={ closeMenu ? 'Category' : 'closeCategory' }>
        <div className="topCate">
          <h2>Category</h2>
          <BiMenuAltLeft
            style={{ fontSize: "20px", color: "#025464af", cursor: "pointer" }}
            onClick={()=> handelUseState()}
          />
        </div>
        <ul>
          <li>
            <GiClothes style={{ margin: "0 10px 0 3px" }} />
            <p>Clothing</p>
          </li>
          <li>
            <MdOutlineComputer style={{ margin: "0 10px 0 3px" }} />
            <p>Electronic</p>
          </li>
          <li>
            <AiFillClockCircle style={{ margin: "0 10px 0 3px" }} />
            <p>Watches</p>
          </li>
          <li>
            <GiBallerinaShoes style={{ margin: "0 10px 0 3px" }} />
            <p>Shoes</p>
          </li>
          <li>
            <MdFoodBank style={{ margin: "0 10px 0 3px" }} />
            <p>supermarket</p>
          </li>
          <li>
            <GiClothes style={{ margin: "0 10px 0 3px" }} />
            <p>fashion</p>
          </li>
          <li>
            <CgGames style={{ margin: "0 10px 0 3px" }} />
            <p>video games</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NewColl;

//Clothing
// Electronic
// Watches
// Shoes
// Blog
// Contact
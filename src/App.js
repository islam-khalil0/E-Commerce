import "./App.css";
import Home from "./Components/Home";
import About from "./Components/about";
import Offers from "./Components/offers";
import Blog from "./Components/blog";
import Contact from "./Components/contact";
import Head from "./Components/Head/Head";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./Components/ProductDetails/productDetails";
import Cart from "./Components/Cart/Cart";
import SignUp from "./Components/SignUp/SignUp";
import Login from "./Components/Login/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:productId" exact element={<ProductDetails />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/logIn" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import AllFoods from "../pages/AllFoods";
import Rice from "../pages/Rice";
import Oil from "../pages/Oil";
import Fish from "../pages/Fish";
import Goat from "../pages/Goat";
import Chicken from "../pages/Chicken";
import Millets from "../pages/Millets";
import FoodDetails from "../pages/FoodDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Forgotpassword from "../pages/Forgotpassword";
import Resetpassword from "../pages/Resetpassword";
// import LoginForm from "../pages/LoginForm";
// import Register from "../pages/Register";
import Signup from "../pages/Signup";
import Details from "../pages/Details";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/foods" element={<AllFoods />} />
      <Route path="/rice" element={<Rice />} />
      <Route path="/fish" element={<Fish />} />
      <Route path="/goat" element={<Goat />} />
      <Route path="/chicken" element={<Chicken />} />
      <Route path="/millets" element={<Millets />} />
      <Route path="/oil" element={<Oil />} />
      <Route path="/foods/:id" element={<FoodDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="forgot-password" element={<Forgotpassword />} />
      <Route path="reset-password" element={<Resetpassword />} />
      {/* <Route path="/loginform" element={<LoginForm />} /> */}
      {/* <Route path="/register" element={<Register />} /> */}
      <Route path="/details" element={<Details />} />
      <Route path="/contact" element={<Contact />} />
      
    </Routes>
  );
};

export default Routers;

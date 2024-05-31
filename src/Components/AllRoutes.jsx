import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Login from "../Pages/Login"
import Products from "../Pages/Products"
import SingleUser from "../Pages/SingleUser"

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> {/* Route for home page */}
      <Route path="/about" element={<About />} />  {/* Route for about page */}
      <Route path="/login" element={<Login />} /> {/* Route for Login page */}
      <Route path="/products" element={<Products />} /> {/* Route for Products page */}
      <Route path="/SingleUser/:userId" element={<SingleUser />} /> {/* Route for SingleUser page with dynamic userId parameter */}
    </Routes>
  );
}

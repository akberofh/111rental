import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Services from "../pages/services/Services";
import Rules from "../pages/rules/Rules";
import About from "../pages/aboutus/About";
import Faq from "../pages/faq/Faq";
import Wishlist from "../pages/wishlist/Wishlist";
import Contact from "../pages/contact/Contact";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Adminpanel from "../pages/adminpanel/Adminpanel";
import Cars from "../pages/cars/Cars";
import ProtectedRoute from "../components/ProtectedRouter/ProtectedRoute";
import Notfound from "../pages/NotFound/NotFound";
import Car from "../pages/car/Car";
import Payment from "../pages/payment/Payment";
const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/services" element={<Services />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path='*' element={<Notfound/>}/>
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectedRoute adminOnly />}>
            <Route path="/admin-dashboard" element={<Adminpanel />} />
          </Route>
          <Route path="/cars" element={<Cars />} />
          <Route path="/cars/:id" element={<Car />} />
          <Route path="/payment" element={<Payment/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Article from "./pages/Article";
import ArticleDetail from "./pages/ArticleDetail";
import Shopping from "./pages/Shopping";
import ItemDetail from "./pages/ItemDetail";
import Promotion from "./pages/Promotion";
import OrderTracking from "./pages/OrderTracking";
import ContactUs from "./pages/ContactUs";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { ArticleContext} from "./components/ArticleContext";


const App = () => {
  


  return (
    <ArticleContext.Provider >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article" element={<Article />} />
          <Route path="/article/:article_id" element={<ArticleDetail />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/item-detail" element={<ItemDetail />} />
          <Route path="/promotion" element={<Promotion />} />
          <Route path="/order-tracking" element={<OrderTracking />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </ArticleContext.Provider>
  );
};

export default App;

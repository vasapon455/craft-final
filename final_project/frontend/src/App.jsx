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
import ArticleProvider from "./contexts/ArticleProvider";
import ProductProvider from "./contexts/ProductProvider";
import ForgotPassword from "./pages/ForgotPassword";
import ProtectedRoute from "./components/ProtectedRoute";
import UserProvider from "./contexts/UserProvider";
import NewArticle from "./pages/NewArticle";
import CartProvider from "./contexts/CartProvider";
import EditArticle from "./pages/EditArticle";

const App = () => {
  return (
    <BrowserRouter>
      <ArticleProvider>
        <ProductProvider>
          <CartProvider>
   
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/article" element={<Article />} />
              <Route path ="/article/new" element={<ProtectedRoute><NewArticle/></ProtectedRoute>} />
              <Route path="/article/:article_id/" element={<ArticleDetail />} />
              <Route path="/article/edit/:article_id/" element={<EditArticle />} />
              <Route path="/shopping" element={<Shopping />} />
              <Route path="/shopping/:item_id/" element={<ItemDetail />} />
              <Route
                path="/shopping/item-detail/:item_id/"
                element={<ItemDetail />}
              />
              <Route path="/promotion" element={<Promotion />} />
              <Route
                path="/order-tracking"
                element={
                  <ProtectedRoute>
                    <OrderTracking />
                  </ProtectedRoute>
                }
              />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route
                path="/cart"
                element={
                  <ProtectedRoute>
                    <Cart />
                  </ProtectedRoute>
                }
              />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/register" element={<Register />} />
            </Routes>
            </CartProvider>
        </ProductProvider>
      </ArticleProvider>
    </BrowserRouter>
  );
};

export default App;

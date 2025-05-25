import React from "react";
import { Routes as ReactDomRoutes, Route, Navigate } from "react-router-dom";
import { HomePage } from "../pages/home";
import { ProductPage } from "../pages/product";
import { CartPage } from "../pages/cart";

export const Routes: React.FC = () => {
  return (
    <ReactDomRoutes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </ReactDomRoutes>
  );
};


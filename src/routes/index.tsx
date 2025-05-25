import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { HomePage } from "../pages/home";
import { ProductPage } from "../pages/product";
import { CartPage } from "../pages/cart";

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/product/:id" component={ProductPage} />
      <Route path="/cart" component={CartPage} />
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};

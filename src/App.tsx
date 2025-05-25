import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/header";
import { Routes } from "./routes";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          
          <div className="flex flex-1">
            <main className="flex-1 p-4 sm:p-6 max-w-7xl mx-auto w-full">
              <Routes />
            </main>
          </div>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
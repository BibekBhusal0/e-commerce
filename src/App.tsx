import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/header";
import { Routes } from "./routes";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="flex min-h-screen flex-col">
          <Header />
          <div className="flex flex-1">
            <main className="mx-auto w-full max-w-7xl flex-1 p-4 sm:p-6">
              <Routes />
            </main>
          </div>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;

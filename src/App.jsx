// src/App.js
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import CategoryFilter from "./components/CategoryFilter";
import { QueryClient, QueryClientProvider } from "react-query";
import CartIcon from "./components/CartIcon";
import CartPage from "./components/CartPage";
import Header from "./components/Header"; // Import Header
import Footer from "./components/Footer"; // Import Footer
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import Product from "./pages/Product";

const queryClient = new QueryClient();

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState("");
  console.log(name)
  console.log(isLogin);
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header isLogin={isLogin} /> {/* Add Header to all pages */}
       
          {/* Add cart icon to the top */}
          <Routes>
            <Route
              path="/login"
              element={
                isLogin ? (
                  <Navigate to="/" />
                ) : (
                  <LoginPage setName={setName} setIsLogin={setIsLogin} />
                )
              }
            />
            <Route path="/" element={<HomePage name={name}/>} />
            {/* Products Page with Category Filter */}
            <Route path="/products" element={<Product />} />
            {/* Product Details Page */}
            <Route path="/products/:id" element={<ProductDetails />} />
            {/* Cart Page */}
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        <Footer /> {/* Add Footer to all pages */}
      </Router>
    </QueryClientProvider>
  );
}

export default App;

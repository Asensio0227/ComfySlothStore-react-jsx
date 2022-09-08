import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';
import {
  Home,
  About,
  Error,
  SingleProduct,
  Product,
  AuthWrapper,
  PrivateRoute,
  Cart,
  Checkout
} from './pages';

function App() {
  return (
    <AuthWrapper>
    <Router>
      <Navbar />
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/checkout" element={
        <PrivateRoute>
        <Checkout />
        </PrivateRoute>
        } />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
    </AuthWrapper>
  )
}

export default App

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Menu from './pages/Menu';
import Order from './pages/Order';
import ManageOrders from './pages/ManageOrders';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/order" element={<Order />} />
          <Route path="/manage-orders" element={<ManageOrders />} />
          <Route path="/login" element={<Login/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

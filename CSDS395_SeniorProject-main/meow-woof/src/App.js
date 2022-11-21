import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from "./Home"
import Checkout from "./Checkout"
import Login from "./Login"
import ProductDetail from './ProductDetail'
import Payment from './Payment'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { db } from './firebase-config'
import { collection, getDocs } from 'firebase/firestore'
import Signup from "./Signup";

function App() {
    

  return (
    // BEM
    <Router>
      <div className="app">
          <Routes>
            <Route path="/checkout" element={[<Header/>, <Checkout />]}/>
            <Route path="/" element={[<Header/>, <Home />]}/>
            <Route path="/login" element={[<Login/>]}/>
            <Route path="/signup" element={[<Signup/>]}/>
            <Route path='/productdetail/*' element={[<Header/>, <ProductDetail/>]}/>
            <Route path='/payment' element={[<Header/>, <Payment/>]}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

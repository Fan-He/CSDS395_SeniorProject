import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from "./Home"
import Checkout from "./Checkout"
import Login from "./Login"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { db } from './firebase-config'
import { collection, getDocs } from 'firebase/firestore'
import Signup from "./Signup";

function App() {
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users");

    useEffect(() => {
        const getUsers = async () =>{
            const data = await  getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }

        getUsers()
    }, [])

  return (
    // BEM
    <Router>
      <div className="app">
        <Routes>
          <Route path="/checkout" element={[<Header/>, <Checkout />]}/>
          <Route path="/" element={[<Header/>, <Home />]}/>
          <Route path="/login" element={[<Login/>]}/>
            <Route path="/signup" element={[<Signup/>]}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

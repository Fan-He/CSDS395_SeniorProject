import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from "./Home"
import Checkout from "./Checkout"
import Login from "./Login"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { db } from './firebase-config'
import { collection, getDocs } from 'firebase/firestore'

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
          {users.map((user) => {
            return (
                <div>
                    <h1>First Name: {user.firstName}</h1>
                    <h1>Last Name: {user.lastName}</h1>
                </div>
            );
          })}
        <Routes>
          <Route path="/checkout" element={[<Header/>, <Checkout />]}/>
          <Route path="/" element={[<Header/>, <Home />]}/>
          <Route path="/login" element={[<Login/>]}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

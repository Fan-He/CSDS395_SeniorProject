import React, { useState, useEffect } from 'react'
import './Login.css'
import logo from '../images/logo.png'
import { Link } from "react-router-dom"
import { signInWithGoogle } from "../firebase-config";
import {
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import "../App.css";
import { auth } from "../firebase-config";
import { toast } from "react-toastify";

function Login() {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [user, setUser] = useState({});

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

    }, [])

    const login = async (e) => {
        e.preventDefault();
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            console.log("success");
            console.log(user);

        } catch (error) {
            toast.error(error.message);
        }
    };

    const logout = async () => {
        await signOut(auth);
    };


  return (

    <div className='login'>
        <h4> User Logged In: </h4>
        {user ? user.email : "Not Logged In"}
        <Link to='/'>
            <img className='login_logo' src={logo} alt=''/>
        </Link>

        <div className='login_container'>
          <h1>Login</h1>
          <form>
            <h5>Email</h5>
              <input
                  placeholder="Email"
                  onChange={(event) => {
                      setLoginEmail(event.target.value);
                  }}
              />

            <h5>Password</h5>
              <input
                  type={"password"}
                  placeholder="Password"
                  onChange={(event) => {
                      setLoginPassword(event.target.value);
                  }}
              />
              <button onClick={login} className='login_signin_button'>Sign In</button>
          </form>

            <hr className="my-4" />

            <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">OR</p>
            </div>

            <button onClick={signInWithGoogle} type="button" className="login-with-google-btn">
                Sign in with Google
            </button>

          <p>
            By Signing-in you agree to Meow&Woof's Privacy Policy and Terms of Use.
          </p>
        </div>

        <h5>Don't have an account? </h5>
        <Link to="/signup">
            <button className='login_register_button'>Create Account</button>
        </Link>

        <button onClick={logout}> Sign Out </button>

    </div>
  )
}

export default Login
import React, {useEffect, useState} from 'react'
import './Login.css'
import logo from './images/logo.png'
import { Link } from "react-router-dom"
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import "./App.css";
import { auth } from "./firebase-config";

function Signup() {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div className='login'>
            <Link to='/'>
                <img className='login_logo' src={logo} alt=''/>
            </Link>

            <div className='login_container'>
                <h1>Create an Account</h1>
                <form>
                    <h5>Email</h5>
                    <input
                        placeholder="Email..."
                        onChange={(event) => {
                            setRegisterEmail(event.target.value);
                        }}
                    />

                    <h5>Password</h5>
                    <input
                        type="password"
                        placeholder="Password..."
                        onChange={(event) => {
                            setRegisterPassword(event.target.value);
                        }}
                    />
                    <button className='login_signin_button' onClick={register}>Create User</button>
                </form>

                <hr className="my-4" />
                <p>
                    By Signing-up you agree to Meow&Woof's Privacy Policy and Terms of Use.
                </p>
            </div>

            <Link to='/Login'>
                Back to Login Page
            </Link>

        </div>
    )
}

export default Signup
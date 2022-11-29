import React, {useEffect, useState} from 'react'
import './Login.css'
import logo from './images/logo.png'
import { Link } from "react-router-dom"
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    updateProfile
} from "firebase/auth";
import "./App.css";
import { auth, createUserDocument } from "./firebase-config";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";
import { storage } from "./firebase-config.js";
import { db } from "./firebase-config.js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";

function Signup() {

    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const register = async () => {
        try {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                     userCredential.user.updateProfile({
                        displayName: displayName
                    }).then(() => {
                         // Success
                     }).catch((e) => {
                         // Handle errors.
                     });
                })
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
                    <h5>Name</h5>
                    <input
                        placeholder="Name..."
                        onChange={(event) => {
                            setDisplayName(event.target.value);
                        }}
                    />

                    <h5>Email</h5>
                    <input
                        placeholder="Email..."
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}
                    />

                    <h5>Password</h5>
                    <input
                        placeholder="Password..."
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }}
                    />
                    <button className='login_signin_button' onClick={register}>Create User</button>
                </form>

                <hr className="my-4" />
                <p>
                    By Signing-up you agree to Meow&Woof's Privacy Policy and Terms of Use.
                </p>
            </div>

                <p>
                    Already have an account? <Link to="/login">Login</Link>
                </p>


        </div>
    )
}

export default Signup
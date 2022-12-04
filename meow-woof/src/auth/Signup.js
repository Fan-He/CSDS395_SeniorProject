import React, {useEffect, useState} from 'react'
import './Login.css'
import logo from '../images/logo.png'
import { Link } from "react-router-dom"
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    updateProfile
} from "firebase/auth";
import "../App.css";
// import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";
import { storage } from "../firebase-config.js";
import { db } from "../firebase-config.js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

function Signup() {

    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [name, setName] = useState('');
    const [orders, setOrders] = useState([]);

    const handleClickRegister = async () => {
        try {
            const auth = getAuth();
            const res = await createUserWithEmailAndPassword(auth, email, password);
            const user = res.user;
            const uid = user.uid;
            await setDoc(doc(db, 'users', uid), {
                name,
                phone,
                address,
                city,
                state,
                zip,
                orders
            });
            console.log(res);

            alert("Account created!");

        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        }
    }
    /*
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
    };*/

    return (
        <div className='login'>
            <Link to='/'>
                <img className='login_logo' src={logo} alt=''/>
            </Link>

            <div className="login_container">
                <h1>Create an Account</h1>
                <p>
                    <label>Email</label>
                    <br />
                    <input
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        type={'email'} placeholder={'Enter email'}/>
                </p>
                <p>
                    <label>Password</label>
                    <br />
                    <input
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type={'password'} placeholder={'Enter password'} />
                </p>
                <p>
                    <label>Name</label>
                    <br />
                    <input placeholder={'Enter your name'} value={name} onChange={e => setName(e.target.value)} />
                </p>
                <p>
                    <label>Phone Number</label>
                    <br />
                    <input type={'number'} placeholder={'Enter your phone number'} value={phone} onChange={e => setPhone(e.target.value)} />
                </p>
                <p>
                    <label>Address</label>
                    <br />
                    <input placeholder={'Street Address'} value={address} onChange={e => setAddress(e.target.value)} />
                    <input placeholder={'City'} value={city} onChange={e => setCity(e.target.value)} />
                    <input placeholder={'State'} value={state} onChange={e => setState(e.target.value)} />
                    <input placeholder={'Zip Code'} value={zip} onChange={e => setZip(e.target.value)} />
                </p>
                <button className='login_signin_button' onClick={handleClickRegister}>Create User</button>
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
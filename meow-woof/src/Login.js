import React, { useState } from 'react'
import './Login.css'
import logo from './images/logo.png'
import { Link } from "react-router-dom"
import { signInWithGoogle } from "./firebase-config";

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signIn = e => {
    //no refreshing in react
    e.preventDefault();

    //firebase login stuff

  }

  const register = e => {
    e.preventDefault();

    //firebase register stuff

  }

  return (
    <div className='login'>
        <Link to='/'>
            <img className='login_logo' src={logo} alt=''/>
        </Link>

        <div className='login_container'>
          <h1>Login</h1>

          <form>
            <h5>E-mail</h5>
            <input type='text' value={email} onChange=
            {e => setEmail(e.target.value)}/>

            <h5>Password</h5>
            <input type='password' value={password} onChange=
            {e => setPassword(e.target.value)}/>

            <button type='submit' onClick={signIn} className='login_signin_button'>Sign In</button>
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

        <div onClick={register} className='login_container'>
          <h5>Don't have an account? </h5>
          <button className='login_register_button'>Create Account</button>
        </div>
    </div>
  )
}

export default Login
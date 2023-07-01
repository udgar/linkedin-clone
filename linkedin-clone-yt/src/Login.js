import React, { useState } from 'react'
import './Login.css'
import { auth } from './FireBase'
import { useScrollTrigger } from '@mui/material';
import { createUserWithEmailAndPassword, updateProfile,signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';
import {login} from './features/userSlice.js'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch()

  const loginToApp = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth,email,password).then((userAuthObject)=>{
      dispatch(login({
        email:userAuthObject.user.email,
        uid:userAuthObject.user.uid,
        displayName:userAuthObject.user.displayName,
        photoURL:userAuthObject.user.photoURL
      }))
    }).catch((error)=>alert(error))
    

  };
  const register = () => {
    if (!name) {
      return alert("Please enter a full name");
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        updateProfile(userAuth, { displayName: name, photoURL: profilePic })
      }).then(() => {
        const user=auth.currentUser
        dispatch(login({
          email: user.email,
          uid:user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL
        }))
      });
  };

  return (
    <div className='login'>
      <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png"></img>
      <form>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder='Full name(required)' type='text' />
        <input value={profilePic} onChange={(e) => setProfilePic(e.target.value)} placeholder='Profile pic url(optional)' type="text" />
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' type='email' />
        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' type="password" />
        <button type="submit" onClick={loginToApp}>Sign In</button>
      </form>

      <p>Not a member?
        <span className='login__register' onClick={register}>Register now</span>
      </p>
    </div>

  )
}

export default Login

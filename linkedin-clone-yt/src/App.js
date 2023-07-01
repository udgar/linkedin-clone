import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import SideBar from './SideBar';
import Feed from './Feed';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Login from './Login';
import {auth} from './FireBase'
import Widgets from './Widgets';


function App() {
  const user=useSelector(selectUser)
  const dispatch=useDispatch()

  useEffect(()=>{
    auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
          dispatch(login({
            email: userAuth.email,
            uid:userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL
          }))
      }
      else{
          dispatch(logout());
      }
    })
  },[])
  return (
    <div className="App">
        <Header></Header>
        {!user.user ?(<Login></Login>):(
                  <div className='app__body'>
                  <SideBar></SideBar>
                  <Feed></Feed>
                  <Widgets></Widgets>
                </div>
        )}
    </div>
  );
}

export default App;

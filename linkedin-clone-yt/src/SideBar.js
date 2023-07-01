import { Avatar } from '@mui/material'
import React from 'react'
import './SideBar.css'
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';

function SideBar() {

    const user=useSelector(selectUser)

    const recentItem=(topic)=>(
        <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    );
  return (
    <div className='sideBar'>
        <div className='sidebar__top'>
            <img src="https://i.pinimg.com/originals/f4/a8/57/f4a85754df5cd9a9c88c8bf296757d37.jpg" 
            alt=""></img>
            <Avatar src={user.user.photoUrl} className='sidebar__avatar'></Avatar>
            <h2>{user.user.displayName}</h2>
            <h4>{user.user.email}</h4>
            <div className='sidebar__stats'>
            <div className='sidebar_stat'>
                <p>Who viewed you</p>
                <p className='sidebar__statNumber'>
                    2,543
                </p>
            </div>
            <div className='sidebar_stat'>
                <p>Impressions on your post</p>
                <p className='sidebar__statNumber'>
                    1,45678
                </p>
            </div>
        </div>
        </div>
        <div className='sidebar__bottom'>
            <p>Recent</p>
            {recentItem('react.js')}
            {recentItem('programming')}
            {recentItem('Software Engineering')}
            {recentItem('Software Design')}
            {recentItem('Software Developer')}
        </div>
    </div>
  )
}

export default SideBar

import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';import HeaderOption from './HeaderOption';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './FireBase';

function Header() {
  const user=useSelector(selectUser)
  const dispatch=useDispatch()

  const logoutofApp=()=>{
      dispatch(logout())
      auth.signOut();
  }
  return (
    <div className='header'>
      <div class="header__left">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
             alt=""></img>
            <div className='header__search'>
                {/* Search icon */}
                <SearchIcon/>
                <input type="text"/>
            </div>
      </div>
      <div class="header__right">
           <HeaderOption Icon={HomeOutlinedIcon} title="Home"/>
           <HeaderOption Icon={SupervisorAccountOutlinedIcon} title="My Network"></HeaderOption>
            <HeaderOption Icon={BusinessCenterOutlinedIcon} title="Jobs"></HeaderOption>
            <HeaderOption Icon={ChatOutlinedIcon} title="Messages"></HeaderOption>
            <HeaderOption Icon={NotificationsNoneOutlinedIcon} title="Notification"></HeaderOption>
            <HeaderOption onClick={logoutofApp} avatar="https://media.licdn.com/dms/image/C4D03AQFO6JHyp6BXjQ/profile-displayphoto-shrink_800_800/0/1610458535423?e=2147483647&v=beta&t=7MAaBiBeen6kxBJH1KvyQIMqOt0uAl_BmLL_MfTGNFU" title={user?.displayName}></HeaderOption>

      </div>
    </div>
  )
}

export default Header

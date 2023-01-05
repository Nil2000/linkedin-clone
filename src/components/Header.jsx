import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import './header.css'
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch} from 'react-redux';
import { auth } from './firebase_config';
import { logout} from '../features/userSlice';

function Header() {

    const dispatch=useDispatch()

    const logoutOfApp=()=>{
        dispatch(logout())
        auth.signOut()
    }
    
  return (
    <div className='header'>
        <div className="header__left">
            <img src="./linkedin.svg" alt="" />
            <div className="header__search">
                <SearchIcon className="header__search__icon"/>
                <input type="text" placeholder='Search'/>
            </div>
        </div>
        <div className="header__right">
            <HeaderOption Icon={HomeIcon} title="Home"/>
            <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
            <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
            <HeaderOption Icon={MessageIcon} title="Messaging"/>
            <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
            <HeaderOption avatar="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" title="me"
                onClick={logoutOfApp}
            />
        </div>
    </div>
  )
}

export default Header
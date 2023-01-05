import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import './headeroption.css'

function HeaderOption({Icon,title,avatar,onClick}) {

    const user=useSelector(selectUser)


  return (
    <div onClick={onClick}className='header__option'>
        {Icon && <Icon className="headeroption__icon"/>}
        {avatar && <Avatar src={user?.photoUrl} className="headeroption__icon">
            {user?.email[0]}
        </Avatar>}
        <h3 className='headeroption__title'>{title}</h3>
    </div>
  )
}

export default HeaderOption
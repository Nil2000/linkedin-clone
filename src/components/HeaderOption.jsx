import { Avatar } from '@material-ui/core'
import React from 'react'
import './headeroption.css'

function HeaderOption({Icon,title,avatar}) {
  return (
    <div className='header__option'>
        {Icon && <Icon className="headeroption__icon"/>}
        {avatar && <Avatar src={avatar} className="headeroption__icon"/>}
        <h3 className='headeroption__title'>{title}</h3>
    </div>
  )
}

export default HeaderOption
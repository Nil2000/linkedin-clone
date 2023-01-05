import React from 'react'
import './widget.css'
import { Info } from '@material-ui/icons'
import { FiberManualRecord } from '@material-ui/icons'

function Widget() {

    const newsArticle=(heading,subtitle)=>{
        return <div className="widget__article">
            <div className="widget__articleLeft">
                <FiberManualRecord/>
            </div>
            <div className="widget__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    }

  return (
    <div className='widget'>
        <div className="widget__header">
            <h2>LinkedIn News</h2>
            <Info/>
        </div>
        {newsArticle("First article","First subtitle")}
        {newsArticle("Second article","Second subtitle")}
        {newsArticle("Third article","Third subtitle")}
        {newsArticle("Fourth article","Fourth subtitle")}
        {newsArticle("Fifth article","Fifth subtitle")}
    </div>
  )
}

export default Widget
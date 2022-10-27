import React from 'react'
import CreateIcon from '@material-ui/icons/Create';
import './Feed.css'
import InputOptions from './InputOptions';
import PhotoIcon from '@material-ui/icons/Photo';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';


function Feed() {
  return (
    <div className="feed">
        <div className="feed__inputContainer">
            <div className="feed__input">
                <CreateIcon/>
                <form action="">
                    <input type="text" name="" id="" />
                    <button type="submit">Send</button>
                </form>
            </div>
            <div className="feed__options">
                <InputOptions Icon={PhotoIcon} title="Photo" color="#70B5F9"/>
                <InputOptions Icon={SubscriptionsIcon} title="Video" color="#E7A33E"/>
                <InputOptions Icon={EventNoteIcon} title="Event" color="#c0cbcd"/>
                <InputOptions Icon={CalendarViewDayIcon} title="Write article" color="#7fc15e"/>
            </div>
        </div>
    </div>
  )
}

export default Feed
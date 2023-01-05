import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import './sidebar.css'

function Sidebar() {

    const recentTopics=(topic)=>{
        return (
            <div className="sidebar__recentItem">
                <span className="sidebar__hash">#</span>
                <p>{topic}</p>
            </div>
        )
    }

    //retrieve form redux
    const user=useSelector(selectUser)

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1666390370561-2e2e9734a684?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=929&q=80" alt="" />
                <Avatar className="sidebar__avatar">
                    {user.email[0]}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed ur profile</p>
                    <p className="sidebar__statNo">2,543</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNo">2,453</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentTopics('reactJs')}
                {recentTopics('programming')}
                {recentTopics('softwareengineering')}
                {recentTopics('design')}
                {recentTopics('developer')}
            </div>
        </div>
    );
}

export default Sidebar;

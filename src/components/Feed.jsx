import React from "react";
import CreateIcon from "@material-ui/icons/Create";
import "./Feed.css";
import InputOptions from "./InputOptions";
import PhotoIcon from "@material-ui/icons/Photo";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Post from "./Post";
import { useState } from "react";
import { db } from "./firebase_config";
import { useEffect } from "react";
import firebase from "firebase/compat/app";

function Feed() {
    const [posts, setPost] = useState([]);
    const [input, setInput] = useState("");

    useEffect(() => {
        //Retrieving docs
        db.collection("posts").orderBy("timeStamp",'desc').onSnapshot((snapshot) => {
            setPost(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            );
        });
    }, []);
    const sendPost = (e) => {
        e.preventDefault();
        //addition of doc with fields on collection
        db.collection("posts").add({
            name: "Nilabhra",
            description: "This is a text",
            message: input,
            photoUrl: "",
            timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setInput("");
    };
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form action="">
                        <input
                            type="text"
                            name=""
                            id=""
                            value={input}
                            onChange={(e) => {
                                setInput(e.target.value);
                            }}
                        />
                        <button onClick={sendPost} type="submit">
                            Send
                        </button>
                    </form>
                </div>
                <div className="feed__options">
                    <InputOptions
                        Icon={PhotoIcon}
                        title="Photo"
                        color="#70B5F9"
                    />
                    <InputOptions
                        Icon={SubscriptionsIcon}
                        title="Video"
                        color="#E7A33E"
                    />
                    <InputOptions
                        Icon={EventNoteIcon}
                        title="Event"
                        color="#c0cbcd"
                    />
                    <InputOptions
                        Icon={CalendarViewDayIcon}
                        title="Write article"
                        color="#7fc15e"
                    />
                </div>
            </div>

            {/* posts */}

            {posts.map(
                ({ id, data: { name, description, message, photoUrl } }) => (
                    <Post
                        key={id}
                        name={name}
                        description={description}
                        message={message}
                        photoUrl={photoUrl}
                    />
                )
            )}

            <Post
                name="Nilabhra Adhikari"
                description="Wow its me"
                message="Whats up 😎"
                photoUrl="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
        </div>
    );
}

export default Feed;

import React from "react";
import { useState } from "react";
import "./login.css";
import { auth } from "./firebase_config";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();

    const register = () => {
        if (!name) {
            return alert("Please enter a full name!");
        }

        //firebase and redux actions
        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user
                    .updateProfile({
                        displayName: name,
                        photoURL: profilePic,
                    })
                    .then(() => {
                        dispatch(
                            login({
                                email: userAuth.user.email,
                                uid: userAuth.user.uid,
                                displayName: name,
                                photoURL: profilePic,
                            })
                        );
                    });
            })
            .catch((error) => alert(error));
    };

    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email,password).then(userAuth=>{
            dispatch(
                login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    profileUrl: userAuth.user.photoURL,
                })
            );
        })
    };
    return (
        <div className="login">
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGo_Rfn5wS_S3o1rKuwgtGuqKZDN7wVN4uiQ&usqp=CAU"
                alt=""
            />
            <form>
                <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Full name (required if registering)"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Profile pic URL (optional)"
                    name=""
                    id=""
                    value={profilePic}
                    onChange={(e) => setProfilePic(e.target.value)}
                />
                <input
                    type="email"
                    name=""
                    id=""
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    name=""
                    id=""
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={loginToApp}>Sign in</button>
            </form>
            <p>
                Not a member?
                <span className="login__register" onClick={register}>
                    Register Now
                </span>
            </p>
        </div>
    );
}

export default Login;

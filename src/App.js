import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widget from "./components/Widget";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { LocalDiningOutlined } from "@material-ui/icons";
import Login from "./components/Login";
import { auth } from "./components/firebase_config";
import { login } from "./features/userSlice";

function App() {
    // redux

    const user = useSelector(selectUser);
    const dispatch=useDispatch()

    useEffect(()=>{
        auth.onAuthStateChanged((userAuth)=>{
            if(userAuth){
                //user is logged in
                dispatch(
                    login({
                        email: userAuth.email,
                        uid: userAuth.uid,
                        displayName: userAuth.displayName,
                        photoURL: userAuth.profilePic,
                    })
                );
            }else{
                //user is logged out
            }
        })
    },[])

    return (
        <div className="App">
            <Header />

            {!user ? (
                <Login />
            ) : (
                <div className="app__body">
                    <Sidebar />
                    <Feed />
                    <Widget/>
                </div>
            )}
        </div>
    );
}

export default App;

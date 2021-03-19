import React from "react";
import "./login.css";
import {Url} from "../spotify";

function Login(){


    return(
        <div className="login">
            <img src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg"></img>
            <a href={Url}>Login With Spotify</a>
        </div>
    )
};

export default Login;
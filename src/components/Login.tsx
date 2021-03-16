import React from "react";
import "./login.css";
import {Url} from "../spotify";

function Login(){


    return(
        <div className="login">
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"></img>
            <a href={Url}>Login With Spotify</a>
        </div>
    )
};

export default Login;
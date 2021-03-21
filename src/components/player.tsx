import Sidebar from "./Sidebar";
import MainBody from "./MainBody";
import Footer from "./Footer";
import "./player.css";
import {Switch,Route,BrowserRouter as Router} from "react-router-dom";
import Search from "./search";
import React, { SetStateAction } from "react";


function Player(props:{smallScreen:boolean,sideBar:boolean,setSidebar:React.Dispatch<SetStateAction<boolean>>,setPlaylistId:React.Dispatch<SetStateAction<string>>}){

    return(
        <div className="player">
            <div className="player-body">
                <Router>
                    <Sidebar smallScreen={props.smallScreen} sideBar={props.sideBar} setSidebar={props.setSidebar} setPlaylistId={props.setPlaylistId}/>

                    <Switch>
                        <Route path="/" exact>
                            <MainBody smallScreen={props.smallScreen} sideBar={props.sideBar} setSidebar={props.setSidebar}/>
                        </Route>

                        <Route path="/search">
                            <Search smallScreen={props.smallScreen} sideBar={props.sideBar} setSidebar={props.setSidebar}/>
                        </Route>
                    </Switch>

                </Router>


            </div>
            
            {/* <Footer /> */}

        </div>
    )

}

export default Player;
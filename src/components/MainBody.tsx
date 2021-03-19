import React from "react";
import "./mainbody.css";
import MainHeader from "./MainHeader";
import {ContextType,useDataLayerValue} from "./dataLayer"
import { FavoriteOutlined, MoreHorizRounded, PlayCircleFilled } from "@material-ui/icons";
import Song from "./song";

function MainBody()
{
    const globalValueController:ContextType = useDataLayerValue();

    return(
        <div className="mainbody">
            <MainHeader />

             <div className="body_info">
                 <img src={globalValueController.contextState.discover_tracks?.images[0]?.url} alt="Discover Weekly image"></img>
                 <div className="body_text">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{globalValueController.contextState.discover_tracks?.description}</p>
                 </div>
            </div> 

            <div className="song_info">
                <div className="body_icons">
                    <PlayCircleFilled className="body_shuffle" />
                    <FavoriteOutlined fontSize="large" className="favIcon"/>
                    <MoreHorizRounded className="moreIcon"/>

                </div >

                {globalValueController.contextState.discover_tracks?.tracks.items.map((item)=>{
                     return   <Song track={item.track} />
                })}
            </div>          
        </div>
    )
}

export default MainBody;

import React, {useState,SetStateAction} from "react";
import "./mainbody.css";
import MainHeader from "./MainHeader";
import {ContextType,useDataLayerValue} from "./dataLayer"
import { FavoriteOutlined, MoreHorizRounded, PlayCircleFilled } from "@material-ui/icons";
import Song from "./song";
import {Track} from "./reducer";
import Footer from "./Footer";
import {Scrollbar} from "react-scrollbars-custom";

function MainBody(props:{smallScreen:boolean,sideBar:boolean,setSidebar:React.Dispatch<SetStateAction<boolean>>})
{
    const globalValueController:ContextType = useDataLayerValue();

    
    const [playingSong,setPlayingSong] = useState<Track>(); // needs fixing temp sol.

    const playSong =(track:Track)=>    //temporary solution needs fixing
    {
            setPlayingSong(track);
    }

    return(
        <div className={props.smallScreen?"mainbody active":"mainbody"}>
            <Scrollbar style={{width:`${props.smallScreen?"96vw":"76vw"}` , height:'100vh'}}>
                <div className="bodyBanner">
                <MainHeader smallScreen={props.smallScreen} sideBar={props.sideBar} setSidebar={props.setSidebar}/>
                <div className="body_info">
                    <img src={globalValueController.contextState.discover_tracks?.images[0]?.url} alt="Discover Weekly image"></img>
                    <div className="body_text">
                        <strong>{globalValueController.contextState.discover_tracks?.name}</strong>
                        <h2>{globalValueController.contextState.discover_tracks?.description}</h2>
                        <p>{globalValueController.contextState.discover_tracks?.description}</p>
                    </div>
                    </div> 

                </div>

                <div className="song_info">
                    <div className="body_icons">
                        <PlayCircleFilled className="body_shuffle" />
                        <FavoriteOutlined fontSize="large" className="favIcon"/>
                        <MoreHorizRounded className="moreIcon"/>

                    </div >

                    {globalValueController.contextState.discover_tracks?.tracks.items.map((item)=>{
                        return   <Song playSong={playSong} track={item.track} />
                    })}
                </div>
            </Scrollbar>
            <Footer trackUri={playingSong?.uri}/>
        </div>
    )
}

export default MainBody;

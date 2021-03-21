import React,{SetStateAction} from "react";
import "./sidebar.css";
import SidebarOptions from "./sidebar-options";
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import LibraryAddRoundedIcon from '@material-ui/icons/LibraryAddRounded';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import {ContextType,useDataLayerValue} from "./dataLayer";
import {Link} from "react-router-dom";

function Sidebar(props:{smallScreen:boolean,sideBar:boolean,setSidebar:React.Dispatch<SetStateAction<boolean>>,setPlaylistId:React.Dispatch<SetStateAction<string>>}){

    let Home: React.ReactElement<SvgIconProps> = <HomeRoundedIcon />;
    let Search: React.ReactElement<SvgIconProps> = <SearchRoundedIcon />;
    let Library: React.ReactElement<SvgIconProps> = <LibraryAddRoundedIcon />;

    const globalValueController:ContextType=useDataLayerValue()

    const closeSidebarIfSmall =()=>{
        if(!props.smallScreen) return 

        props.setSidebar(!props.sideBar);
    }

    return(

        <div className={props.sideBar?"sidebar-active":"sidebar"} onClick={()=>closeSidebarIfSmall()}>
            <img id = "logo" src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg" alt="spotifyLogo" />

            <Link to="/" style={{textDecoration:"none"}}><SidebarOptions title="Home" Icon ={Home} playlistId={"37i9dQZEVXcEWr24m9wM3D"} setPlaylistId={props.setPlaylistId} /></Link>
            <Link to="/search" style={{textDecoration:"none"}}><SidebarOptions title="Search" Icon ={Search} setPlaylistId = {props.setPlaylistId} playlistId ={""} /></Link>
            <SidebarOptions title="Your Library" Icon ={Library} setPlaylistId = {props.setPlaylistId} playlistId ={""}  />

            <br />
            <h4 className="sidebar_title">PLAYLISTS</h4>
            <hr />

            {/* {console.log(globalValueController.contextState.playlists)} */}
            {globalValueController.contextState.playlists?.map((item)=>{

                   return <Link to="/" style={{textDecoration:"none"}}><SidebarOptions title={item.name} setPlaylistId = {props.setPlaylistId} playlistId ={item.id} />
                   </Link>
            })}

        </div>
    )
}

export default Sidebar;
import React from "react";
import "./sidebar.css";
import SidebarOptions from "./sidebar-options";
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import LibraryAddRoundedIcon from '@material-ui/icons/LibraryAddRounded';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import {ContextType,useDataLayerValue} from "./dataLayer";

function Sidebar(){

    let Home: React.ReactElement<SvgIconProps> = <HomeRoundedIcon />;
    let Search: React.ReactElement<SvgIconProps> = <SearchRoundedIcon />;
    let Library: React.ReactElement<SvgIconProps> = <LibraryAddRoundedIcon />;

    const globalValueController:ContextType=useDataLayerValue()

    return(

        <div className="sidebar">
            <img id = "logo" src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg" alt="spotifyLogo"></img>

            <SidebarOptions title="Home" Icon ={Home} />
            <SidebarOptions title="Search" Icon ={Search} />
            <SidebarOptions title="Your Library" Icon ={Library} />

            <br />
            <h4 className="sidebar_title">PLAYLISTS</h4>
            <hr />

            {/* {console.log(globalValueController.contextState.playlists)} */}
            {globalValueController.contextState.playlists?.map((item)=>{

                   return <SidebarOptions title={item.name}  />
            })}

        </div>
    )
}

export default Sidebar;
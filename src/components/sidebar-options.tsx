import React,{SetStateAction} from "react";
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import "./sidebar-options.css";

function SidebarOption(props:{title:string,Icon?:React.ReactElement<SvgIconProps>,playlistId:string,setPlaylistId:React.Dispatch<SetStateAction<string>>}){
    const setPlaylistHandler=()=>{
        if(props.title==="Search" || props.title === "Your Library")
            return

        props.setPlaylistId(props.playlistId);
    }
    return(
        <div className="sidebar-options" onClick={()=>setPlaylistHandler()}>
            <span className="icon">{props.Icon && props.Icon}</span>
            {props.Icon?<h4>{props.title}</h4>:<p>{props.title}</p>}
           
        </div>
    )
}

export default SidebarOption;

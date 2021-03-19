import React from "react";
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import "./sidebar-options.css";

function SidebarOption(props:{title:string,Icon?:React.ReactElement<SvgIconProps>}){

    return(
        <div className="sidebar-options">
            <span className="icon">{props.Icon && props.Icon}</span>
            {props.Icon?<h4>{props.title}</h4>:<p>{props.title}</p>}
           
        </div>
    )
}

export default SidebarOption;

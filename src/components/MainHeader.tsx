import React from "react"
import "./mainHeader.css";
import SearchIcon from '@material-ui/icons/Search';
import {Avatar} from "@material-ui/core";
import {ContextType,useDataLayerValue} from "./dataLayer";

function MainHeader(){

  const globalValueController:ContextType = useDataLayerValue();
  // const imageUrl=globalValueController.contextState.user?.images[0]?.url; // dont know why it is happening

    return(
        <div className="mainHeader">

          <div className="headerLeft">
            <SearchIcon className="search"/>
            <input className="input" type="text" placeholder="Search Artist,Song,Podcast"></input>
          </div>

          <div className="headerRight">
              <Avatar src="" alt={globalValueController.contextState.user?.display_name}/>
              <h4>{globalValueController.contextState.user?.display_name}</h4>
          </div>
          
        </div>
   
    )
}

export default MainHeader;

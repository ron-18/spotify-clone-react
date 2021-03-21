import "./mainHeader.css";
import {SetStateAction} from "react";
import {Avatar} from "@material-ui/core";
import {ContextType,useDataLayerValue} from "./dataLayer";
import MenuIcon from "@material-ui/icons/Menu";

function MainHeader(props:{smallScreen:boolean,sideBar:boolean,setSidebar:React.Dispatch<SetStateAction<boolean>>}){

  const globalValueController:ContextType = useDataLayerValue();
  // const imageUrl=globalValueController.contextState.user?.images[0]?.url; // dont know why it is happening

    return(
        <div className={props.smallScreen?"mainHeader":"mainHeader large"}>
          {!props.sideBar?<MenuIcon onClick={()=>props.setSidebar(true)}/>:""}
          <div className="headerRight">
              <Avatar src="" alt={globalValueController.contextState.user?.display_name}/>
              <h4>{globalValueController.contextState.user?.display_name}</h4>
          </div>
        </div>
   
    )
}

export default MainHeader;

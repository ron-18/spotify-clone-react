// import React from "react";
// import "./footer.css";
// /* center footer portion icons */
// import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
// import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
// import SkipNextIcon from '@material-ui/icons/SkipNext';
// import ShuffleIcon from '@material-ui/icons/Shuffle';
// import RepeatIcon from '@material-ui/icons/Repeat';

//  /* right side footer icons */
// import {Grid, Slider} from '@material-ui/core';
// import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
// import VolumeDownIcon from '@material-ui/icons/VolumeDown';

// function Footer(){

//     return(
//         <div className="footer">

//             <div className="footer_left">
//                 <img className="songImage" src="https://a10.gaanacdn.com/images/song/85/29577385/crop_175x175_1581687258.jpg"></img>
//                 <div className="songDetails">
//                     <h4>Kutti Story</h4>
//                     <p>Anirudh Ravichandra</p>
//                 </div>
//             </div>

//             <div className="footer_center">
//                 <ShuffleIcon className="footer_green" />
//                 <SkipPreviousIcon className="footer_icon" />
//                 <PlayCircleFilledIcon className="footer_icon" />
//                 <SkipNextIcon className="footer_icon" />
//                 <RepeatIcon className="footer_green" />
//             </div>

//             <div className="footer_right">
//                 <Grid container spacing={2}>
//                     <Grid item>
//                         <PlaylistPlayIcon />
//                     </Grid>

//                     <Grid item>
//                         <VolumeDownIcon />
//                     </Grid>

//                     <Grid item xs>
//                         <Slider className="slider"/>
//                     </Grid>
//                 </Grid>
//             </div>



//         </div>
//     )
// }

import SpotifyPlayer from "react-spotify-web-playback";
import {ContextType,useDataLayerValue} from "./dataLayer";
import {useState,useEffect} from "react";
import "./footer.css";

function Footer(props:{trackUri:string | undefined}){
    const globalValueController:ContextType=useDataLayerValue();
    const token = globalValueController.contextState.token;

    const [play,setPlay] = useState<boolean>(false);
    
    useEffect(()=>{
        setPlay(true);
    },[props.trackUri])

    // console.log(props.trackUri);
    if(!props.trackUri) return (<div></div>);
    return(
        <div className="footer">
        <SpotifyPlayer 
        token={token}
        showSaveIcon
        callback={state=>{
            if(!state.isPlaying)setPlay(false)
        }}
        play={play}
        styles = {{bgColor:"#282828" ,color:"#FFFFFF",sliderColor:"#67b70b",trackNameColor:"#FFFFFF",trackArtistColor:"#FFFFFF" }}
        uris={props.trackUri?[props.trackUri]:[]}
         />
         </div>
    )
}

export default Footer;


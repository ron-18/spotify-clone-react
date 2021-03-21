import {Track} from "./reducer";
import "./song.css";
import {ContextType,useDataLayerValue} from "./dataLayer"

function Song(props:{playSong:(track:Track)=>void,track:Track}){

    const globalValueController:ContextType = useDataLayerValue();

    const product = globalValueController.contextState.user.product;
    
    const handlePlaySong = () =>{

        if(product==="open" || product==="free")
        {
            alert("Your Account needs to be Premium for this operation");
            return;
        }
        props.playSong(props.track)
    }

    return(
        <div className="song" style={{cursor:"pointer"}} onClick={()=>handlePlaySong()}>
            <img src={props.track.album?.images[0]?.url} alt="Song Image"></img>
            <div className="song_info">
                <h1>{props.track.name}</h1>
                <p>{props.track.artists?.map((artist)=>artist.name).join(", ")}</p>
            </div>
        </div>
    )
}

export default Song;
import {Track} from "./reducer";
import "./song.css";


function Song(props:{playSong:(track:Track)=>void,track:Track}){

    return(
        <div className="song" style={{cursor:"pointer"}} onClick={()=>props.playSong(props.track)}>
            <img src={props.track.album?.images[0]?.url} alt="Song Image"></img>
            <div className="song_info">
                <h1>{props.track.name}</h1>
                <p>{props.track.artists?.map((artist)=>artist.name).join(", ")}</p>
            </div>
        </div>
    )
}

export default Song;
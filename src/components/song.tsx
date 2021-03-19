import {Track} from "./reudcer";
import "./song.css";

function Song(props:{track:Track}){

    return(
        <div className="song">
            <img src={props.track.album?.images[0]?.url} alt="Song Image"></img>
            <div className="song_info">
                <h1>{props.track.name}</h1>
                <p>{props.track.artists?.map((artist)=>artist.name).join(", ")}</p>
            </div>
        </div>
    )
}

export default Song;
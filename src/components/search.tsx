import React,{useState,SetStateAction} from "react";
import SearchIcon from '@material-ui/icons/Search';
import spotifyWeb from "spotify-web-api-js";
import {Track} from "./reducer";
import Song from "./song";
import "./search.css";
import Footer from "./Footer";
import MenuIcon from "@material-ui/icons/Menu";

function Search(props:{smallScreen:boolean,sideBar:boolean,setSidebar:React.Dispatch<SetStateAction<boolean>>}){

    const [songs,setSongs] = useState<Track[]>([]);
    const spotify = new spotifyWeb();

    const search = (searchText:string)=>{
        //console.log(event);
        if(searchText==="")
           return;

        spotify.searchTracks(searchText).then((res)=>{
          setSongs(res.tracks.items)}
        );
        
    }
    const [playingSong,setPlayingSong] = useState<Track>();

    const playSong =(track:Track)=>
    {
            setPlayingSong(track);
    }

    return(
            <div className={props.smallScreen?"searchPage large":"searchPage"}>
                <div className="extra">
                    <div className="top">
                        {!props.sideBar?<MenuIcon onClick={()=>props.setSidebar(true)}/>:""}
                        <div className="searchBar">
                            <SearchIcon className="search"/>
                            <input className="input" type="text" placeholder="Search Artist,Song,Podcast" onChange={(e)=>search(e.target.value)}></input>
                        </div>
                    </div>

                    
                    <div className="searchSong">

                        {songs.map((song)=>{
                        return <Song playSong={playSong} track={song}/>
                        })}
                </div>
                </div>
                <Footer trackUri={playingSong?.uri}/>

            </div>
    )
}

export default Search;

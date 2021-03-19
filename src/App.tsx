import './App.css';
import Login from "./components/Login";
import {extractTokenFromResponse} from "./spotify";
import {useState,useEffect} from "react";
import spotifyWeb from "spotify-web-api-js";
import {ContextType,useDataLayerValue} from "./components/dataLayer";
import Player from "./components/player";

function App() {

  const [token ,setToken] = useState<string>(extractTokenFromResponse().access_token);

  const globalValueController:ContextType  = useDataLayerValue();

  const spotify = new spotifyWeb();
  
  useEffect(()=>{
    window.location.hash="";

    if(token)
    {
        globalValueController.stateDispatch({type:"SET_TOKEN",token})
        spotify.setAccessToken(token);
        spotify.getMe().then((user)=>{
            console.log(user);
            globalValueController.stateDispatch({
              type:"SET_USER",user
            })
        });

        spotify.getUserPlaylists().then((playlists)=>{

            // console.log(playlists);
            globalValueController.stateDispatch({
              type:"SET_PLAYLISTS",playlists:playlists.items
            })
        });

        spotify.getPlaylist("37i9dQZEVXcEWr24m9wM3D").then((discover_tracks)=>{
              globalValueController.stateDispatch({
                type:"SET_DISCOVER_TRACKS",
                discover_tracks
              })
        })
    }

  },[])
  
  
  return (
    <div className="App">
     {token?<Player />:<Login />} 
     {console.log(token)}     
    </div>

  );
}

export default App;

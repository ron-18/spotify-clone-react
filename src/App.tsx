import './App.css';
import Login from "./components/Login";
import {extractTokenFromResponse} from "./spotify";
import {useState,useEffect} from "react";
import spotifyWeb from "spotify-web-api-js";
import {ContextType,useDataLayerValue} from "./components/dataLayer";
import Player from "./components/player";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function App() {

  const [token ,setToken] = useState<string>(extractTokenFromResponse().access_token);

  const globalValueController:ContextType  = useDataLayerValue();

  const smallScreen = useMediaQuery("(max-width:600px)");
  const [sidebar,setSidebar] = useState<boolean>(!smallScreen);
  const [playlistId, setPlaylistId] = useState<string>("37i9dQZEVXcEWr24m9wM3D");

  useEffect(()=>{
      setSidebar(!smallScreen)
  },[smallScreen])

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

    }

  },[])

  useEffect(()=>{
    spotify.getPlaylist(playlistId).then((discover_tracks)=>{
      globalValueController.stateDispatch({
        type:"SET_DISCOVER_TRACKS",
        discover_tracks
      })
  })
  },[playlistId]);
  
  
  return (
    <div className="App">
     {token?<Player smallScreen = {smallScreen} sideBar={sidebar} setSidebar={setSidebar} setPlaylistId={setPlaylistId} />:<Login />} 
     {console.log(token)}     
    </div>

  );
}

export default App;

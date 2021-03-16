import './App.css';
import Login from "./components/Login";
import {extractTokenFromResponse} from "./spotify";
import {useState,useEffect} from "react";
import spotifyWeb from "spotify-web-api-js";
import {ContextType,useDataLayerValue} from "./components/dataLayer";

function App() {

  const [token ,setToken] = useState<string>(extractTokenFromResponse().access_token);

  const globalValueController:ContextType  = useDataLayerValue();

  const spotify = new spotifyWeb();
  
  useEffect(()=>{
    window.location.hash="";

    if(token)
    {
        spotify.setAccessToken(token);
        spotify.getMe().then((user)=>{
            console.log(user);
        });
    }

  },[])
  
  return (
    <div className="App">
      <Login />
      {console.log(token)}      
    </div>

  );
}

export default App;

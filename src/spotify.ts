export const authEndPoint='https://accounts.spotify.com/authorize';

const redirectUri ="https://my-spotify-clone-01.web.app/";

const clientId="cc8273fe1b71491594342aba83c74dc4";

const scopes=[
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
    "streaming",
    "user-read-email",
    "user-read-private",
    "user-library-read",
    "user-library-modify"
];

export const extractTokenFromResponse = ()=>{
    return window.location.hash
            .substring(1)
            .split("&")
            .reduce((acc:any,current)=>{

                let temp = current.split("=");
                acc[temp[0]] = decodeURIComponent(temp[1]);
                return acc;
            },{})
}

// console.log(extractTokenFromResponse());

export const Url = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`

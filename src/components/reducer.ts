import { PlaylistAddSharp } from "@material-ui/icons";

export type InitialState = {
    user:User;
    playlists:Playlist[];
    playing:boolean;
    item:string;
    discover_tracks:Discover_Tracks;
    token:string;
}

export interface Playlist{
    collaborative:boolean;
    description:string | null;
    external_urls:Eurls;
    href:string;
    id:string;
    images:Image[]|  undefined;
    name:string;
    owner:User;
    primary_color?:undefined;
    public:boolean;
    snapshot_id:string;
    tracks:Followers;
    type:string;
    uri:string;
}

// export interface Discover_Tracks extends Playlist{

//         followers:Followers;
// }
export interface Discover_Tracks{
   
    collaborative: boolean;
    description:string | null;
    external_urls: Eurls;
    followers: Followers;
    href:string;
    id: string;
    images: Image[];
    name: string;
    owner: User;
    primary_color?: null
    public:boolean;
    snapshot_id: string;
    tracks:Tracks;
    type: string;
    uri: string;
    
}

export interface Eurls{
    spotify:string;
}

export interface Followers{
        href:string;
        total:number;
}

export interface Image{
    height?:number|undefined;
    url:string;
    width?:number|undefined;
}

export interface User{
        display_name?: string | undefined,
        external_urls: Eurls,
        followers?: Followers | undefined,
        href: string,
        id: string,
        images?: Image[],
        type: string,
        uri: string

}

export interface Artist{
        external_urls: Eurls;
        href: string;
        id: string;
        name: string;
        type: string;
        uri: string;  
}

export interface Album{
        album_type:string;
        artists?: Artist[];
        available_markets?: string[] | undefined;
        external_urls: Eurls;
        href: string;
        id: string;
        images: Image[];
        name: string;
        release_date?: string;
        release_date_precision?: string;
        total_tracks?: number;
        type: string;
        uri: string;
}

export interface E_id{
    isrc?:string|undefined;
}

export interface Tracks{
    href: string;
    items: Item[];
    limit: number;
    next: string|null;
    offset: number;
    previous: string|null;
    total: number;
}

export interface Track{
    album?:Album;
    artists?: Artist[];
    available_markets?: string[] | undefined;
    disc_number?: number;
    duration_ms: number;
    episode?: boolean;
    explicit: boolean;
    external_ids?: E_id;
    external_urls:Eurls;
    href: string;
    id: string;
    is_local?: boolean;
    name: string;
    popularity?: number;
    preview_url?: string;
    track?: boolean;
    track_number?: number;
    type: string;
    uri: string;
}

export interface Added_at{
    external_urls: Eurls;
    href: string;
    id:string;
    type: string;
    uri: string;
}

export interface Item{

    added_at: string;
    added_by: Added_at;
    is_local: boolean;
    primary_color?: null;
    track: Track;
    video_thumbnail?: {url: null}

}

export const initialState:InitialState={
    user:{
        display_name:"",
        external_urls: {
            spotify: ""
        },
        followers: {
            href: "",
            total: 0
        },
        href: "",
        id: "",
        images: [],
        type: "",
        uri: ""
    },
    playlists:[],
    playing:false,
    item:"",
    token:"",
    discover_tracks:{
        collaborative: false,
        description: "",
        external_urls: {spotify: ""},
        followers: {href:"", total: 0},
        href: "",
        id: "",
        images: [],
        name: "",
        owner: {
            display_name:"",
            external_urls: {
                spotify: ""
            },
            followers: {
                href: "",
                total: 0
            },
            href: "",
            id: "",
            images: [],
            type: "",
            uri: ""
        },
        primary_color:null,
        public: false,
        snapshot_id: "",
        tracks: {
            href: "",
            items: [],
            limit:0,
            next: null,
            offset:0,
            previous: null,
            total:0,
        },
        type:"",
        uri: ""
    }
}


export type Action =
|{type:"SET_USER",user:User}
|{type:"SET_TOKEN",token:string}
|{type:"SET_PLAYLISTS",playlists:Playlist[]}
|{type:"SET_DISCOVER_TRACKS",discover_tracks:Discover_Tracks}


// type:"SET_USER" | "SET_TOKEN";
    // user:User;
    // token:string;



export const reducer = (state:InitialState,action:Action)=>{

    console.log(action); // good debugging

    switch(action.type)
    {
        case "SET_USER":
            return({
                ...state,
                user:action.user
            })
        
        case "SET_TOKEN":
            return({
                ...state,
                token:action.token
            })

        case "SET_PLAYLISTS":
            return({
                ...state,
                playlists:action.playlists
            })

        case "SET_DISCOVER_TRACKS":
            return({
                ...state,
                discover_tracks:action.discover_tracks
            })
        //     console.log(action.discover_tracks);
        //    return(state);
        
        default: return state
    }
}

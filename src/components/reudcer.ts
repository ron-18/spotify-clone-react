export type InitialState = {
    user:string;
    playlist:[];
    playing:boolean;
    item:string;
}

export const initialState:InitialState={
    user:"",
    playlist:[],
    playing:false,
    item:""
}


export interface Action {
    type:"SET_USER";
    user:string;
}


export const reducer = (state:InitialState,action:Action)=>{

    console.log(action); // good debugging

    switch(action.type)
    {
        case "SET_USER":
            return({
                ...state,
                user:action.user
            })
        
        default: return state
    }
}

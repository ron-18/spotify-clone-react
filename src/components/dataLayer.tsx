import {createContext,useContext,useReducer} from "react";
import React from "react";
import {InitialState,initialState,reducer,Action} from "./reducer";

export interface ContextType{
    contextState:InitialState;
    stateDispatch: React.Dispatch<Action>;
}

const DataLayerContext = createContext<ContextType>({contextState:initialState, stateDispatch: () =>{}});

export const DataLayer= (props:{children:any})=>{

    const[stateReturned,stateDispatcher] = useReducer(reducer,initialState);

    const globalPasser:ContextType={
        contextState:stateReturned,
        stateDispatch:stateDispatcher
    }
    
    return(<DataLayerContext.Provider value={globalPasser}>
        {props.children}
    </DataLayerContext.Provider>
)}

export const useDataLayerValue = ()=>useContext(DataLayerContext);

import React, { createContext, useState } from "react";

export const GlobalState = createContext()

export const DataProvider = ({children}) =>{
    
    const [userData,setUserData] = useState(()=>{
        const saved = localStorage.getItem("userData");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
    })

const state = {
    data: [userData,setUserData]
}
    return(
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}
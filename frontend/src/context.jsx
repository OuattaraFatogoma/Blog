import { createContext, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({children}) =>{
    return (
        <AppContext.Provider value="hi mom!!!!!!">
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(AppContext); 
}
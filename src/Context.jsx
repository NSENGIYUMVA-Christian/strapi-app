import { createContext, useState,useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({children})=>{
 const [isSideBarOpen, setSideBarOpen] = useState(false);

 // state value to handle submenu in big screen based on pageId
 const[pageId, setPageId] = useState(null)

 const openSideBar = ()=>{
    setSideBarOpen(true)
 }

 const closeSideBar = ()=>{
    setSideBarOpen(false)
 }
 
 return <AppContext.Provider value={{isSideBarOpen,closeSideBar,openSideBar,pageId, setPageId}} >
    {children}
 </AppContext.Provider>

}

// custom hook

export const useGlobalContext = () =>{
    return useContext(AppContext)
}


import React from 'react'
import{useContext,useState} from 'react'


const AppContext = React.createContext()
const AppProvider = ({children}) => {
    const[light,setLight] = useState()
    return(
        <AppContext.Provider value={{light,setLight}}>{children}</AppContext.Provider>
    )
}
export const useGlobalContext = () =>{
    return useContext(AppContext)
}
export {AppContext,AppProvider}
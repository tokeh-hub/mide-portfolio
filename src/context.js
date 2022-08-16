import React from 'react'
import{useContext,useState} from 'react'


const AppContext = React.createContext()
const AppProvider = ({children}) => {
    const[light,setLight] = useState()
    const[x,setX] = useState([])

    return(
        <AppContext.Provider value={{light,setLight,x,setX}}>{children}</AppContext.Provider>
    )
}
export const useGlobalContext = () =>{
    return useContext(AppContext)
}
export {AppContext,AppProvider}
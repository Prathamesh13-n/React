import { use } from "react";
import {createContext , useContext} from "react";



export const themeContext = createContext({
    Thememode: "light" ,
    darktheme:() => {},
    lighttheme: () => {}
})


export const themeProvider = themeContext.Provider


export default function useTheme(){
    return useContext(themeContext)
}
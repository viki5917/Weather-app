import React,{useState} from "react";
import { createContext } from "react";

export const Locationdetails=createContext();

export const Context=({children})=>{
    const [location,setLocation]=useState('');

    const [weatherData, setWeatherData] = useState(null);

    return(
        <Locationdetails.Provider value={{location,setLocation,weatherData,setWeatherData}}>
            {children}
        </Locationdetails.Provider>
    )
}
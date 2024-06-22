import React, { useEffect, useState } from 'react'
import weatherData from "./WeatherData.json"
const useApi = () => {
const [weather,setWeather]= useState(null)
const API =async ()=>{
try {
    const url = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/delhi/2024-01-17/2024-01-17/?key=FCZ8PW2RDBM9AYB9K4GLFQ3PE")
    const data = await url.json()

    console.log(data)
    setWeather(data)


} catch (error) {
    
}
}


useEffect(()=>{
API()

},[])


  return weather
}

export default useApi
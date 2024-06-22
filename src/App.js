import React, { useState } from 'react'
import useApi from './useApi'
import weather from "./WeatherData.json"
import "./App.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const App = () => {
const [time,setTime]= useState("00:00:00")
// const weather = useApi()
if(!weather) return

const handleOption =(e)=>{
  console.log(e.target.value)
  setTime(e.target.value)
}



const hourlyData = weather.days[0].hours.find((elm)=>{
  return elm.datetime===time
})

const  Myicons=(elm)=>{
  const {icon}=elm
  if(icon == "cloudy"){
    return "fluent:weather-cloudy-48-filled"
  }
  else if(icon=="fog"){
    return "solar:fog-bold"
  }
  else if(icon=="Partially cloudy"){
    return "material-symbols:partly-cloudy-day"
  }
  else if(icon=="clear-day"){
    return "material-symbols:sunny"
  }
  else if(icon=="clear-night"){
    return "material-symbols-light:clear-night"
  }
}

const WeatherIcons =  Myicons(hourlyData)

// console.log(WeatherIcons)

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 2
};


const hourlyCard = weather.days[0].hours


  return (
    <div className='weather'>
    <div>
    {hourlyData?(<div className='weather-head'>
      <h1 className='address'>{weather.address}</h1>
      <iconify-icon icon={WeatherIcons} style={{color:"gray",fontSize:"80px"}}></iconify-icon>
      <h4 className='condition'>{hourlyData.conditions}</h4>
         </div>):(<div className='weather-head'>
          <h1 className='address'>{weather.address}</h1>
          <iconify-icon icon="solar:fog-bold" style={{color:"gray",fontSize:"40px"}}></iconify-icon>
          <h4 className='condition'>{weather?.days[0]?.conditions}</h4>
             </div>)}
    </div>
    <div className="cards">

    
    <div className="right-card">
    <h3> Day: {weather.days[0].datetime}</h3>
    <h4> Temp: {weather.days[0].temp} °C</h4>
    </div>


    <div className="right-card">
    <label>search by hours</label>
    <select value={time} onChange={handleOption}>
  {weather.days[0].hours.map((elm,index)=>{
    return(
    <option value={elm.datetime} key={index}>
    {elm.datetime}
    </option>
    
    )
    })}
    </select>
    <p className='hourData'>Humidity: {hourlyData.humidity}</p>
    <p className='hourData'>Windspeed: {hourlyData.windspeed}</p>
    <p className='hourData'> Pressure: {hourlyData.pressure}</p>
    <p className='hourData'>Temp: {hourlyData.temp}</p>
    </div>
    </div>



<div>
<Slider {...settings}>
{hourlyCard.map((elm,index)=>{
  const icons = Myicons(elm)
  // console.log(icons)
  return(
    <div className='hourly-card' key={index}>
    <div className='hourly-inr-card'>
    <div>
    <iconify-icon icon={icons} style={{color:"white",fontSize:"40px"}}></iconify-icon>
    <h2 className='crouse-Card'>Temp: {elm.temp}</h2>
    <h2 className='crouse-Card'>Humidity: {elm.humidity}</h2>
    </div>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:'10px'}}>
    <h2 className='crouse-Card'>Windspeed: {elm.windspeed}</h2>
    <h2 className='crouse-Card'>Wind Pressure: {elm.pressure}</h2>
    </div>
    </div>
    </div>
  )
})}
</Slider>
</div>



    </div>
  )
}

export default App
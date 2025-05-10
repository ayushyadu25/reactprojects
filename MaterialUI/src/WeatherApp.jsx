import SearchBox from "./SearchBox.jsx"
import InfoBox from "./InfoBox.jsx"
import { useState } from "react"


export default function WeatherApp() {
    let [weatherInfo, setWeatherInfo]=useState({
        city:"Wonderland",
        feelslike : 24.23,
        temp:34.34,
        tempMin:34.32,
        tempMax:34.34,
        humidity:34,
        weather:"haze",
    });
    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
        <div>
        <SearchBox updateInfo = {updateInfo}></SearchBox>
        <InfoBox info={weatherInfo}  ></InfoBox>
        </div>
    )
}
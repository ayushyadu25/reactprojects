import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react'
const API_URL  = import.meta.env.VITE_API_URL;
const API_KEY  = import.meta.env.VITE_API_KEY;

import "./SearchBox.css";

export default function SearchBox({updateInfo}) {
  
    let [city,setCity] = useState("");
    let [error,setError] = useState(false);
    
    let getWeatherInfo = async ()=>{
     try{
        let response =   await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result = {
          city:city,
          temp: jsonResponse.main.temp,
          tempMin : jsonResponse.main.temp_min,
          tempMax : jsonResponse.main.temp_max,
          humidity: jsonResponse.main.humidity,
          feelsLike: jsonResponse.main.feels_like,
          weather : jsonResponse.weather[0].description,
        }
        console.log(result);
        return result;
     }catch(err){
        throw err;
    }
    }
    let handleChange = (evt)=>{
        setCity(evt.target.value);
    }
    let handleSubmit = async (evt)=>{
       try{
        evt.preventDefault();
        console.log(city);
        setCity("");
       let info  = await getWeatherInfo();
       updateInfo(info);
       }catch(err){
        setError(true);
       }
    }
    return <div>
        <h2>Search for the weather</h2>
        <form action="">
            <TextField onChange={handleChange} id='outlined-basic' label="City Name" variant='outlined' required value={city}></TextField>
            <br /><br />
            <Button onClick={handleSubmit} type='submit' variant="contained">Search</Button>
        {error && <p style={{color:"red"}}> No such location exists</p>}
        </form>
    </div>
}
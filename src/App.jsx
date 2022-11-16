import './App.scss';
import {useState, useEffect} from 'react';
import Nav from './Components/Nav/Nav';
import WeatherInfo from './Components/WeatherInfo/WeatherInfo';

function App() {
   const [weather, setWeather] = useState([]);//"current",: {
  //   "last_updated_epoch": 1668592800,
  //   "last_updated": "2022-11-16 10:00",
  //   "temp_c": 9.0,
  //   "temp_f": 48.2,
  //   "is_day": 1,
  //   "condition": {
  //       "text": "Sunny",
  //       "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
  //       "code": 1000
  //   });
  const [position, setPosition] = useState("London");
const getLocation=()=> {
      navigator.geolocation.getCurrentPosition(showPosition);
  }
const showPosition =(position)=> {
  const {
    latitude,
    longitude
} = position.coords;
setPosition(`${latitude},${longitude}`);
  }
  const getWeather = async () => {
    getLocation();
    const url = `http://api.weatherapi.com/v1/forecast.json?key=0641b73f07204297941142843220911&q=${position}&days=1&aqi=no&alerts=no`;
    const res = await fetch(url);
    const data = await res.json();
    setWeather(data);
  };
 useEffect(() => {
   getWeather();
 },[]);

  const currentHour = new Date().getHours();
  let greetingTime = "Morning!";

  if (currentHour >= 12) {
    greetingTime = "Afternoon!";
  }

  if (currentHour >= 18) {
    greetingTime = "Evening!";
  }
      //<p>{weather.current.condition.text}</p>
     // <p>{weather.current.condition.text}</p>
      //<img src={weather.current.condition.icon} alt={weather.current.condition.text} />
  return (
    <div className="App">
      <Nav greeting={greetingTime}/>
       <WeatherInfo text={weather.current.condition.text} img={weather.current.condition.icon}/>  
    </div>
  );

}

export default App;

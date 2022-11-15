import './App.scss';
import {useState,useEffect} from 'react';
import Nav from './Components/Nav/Nav';
import WeatherInfo from './Components/WeatherInfo/WeatherInfo';

function App() {
  const [weather, setWeather] = useState([]);
  const [position, setPosition] = useState("London");
const getLocation=()=> {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
     alert = "Geolocation is not supported by this browser.";
    }
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
   console.log(weather);
 }, [weather]);

  const currentHour = new Date().getHours();
  let greetingTime = "Morning!";

  if (currentHour >= 12) {
    greetingTime = "Afternoon!";
  }

  if (currentHour >= 18) {
    greetingTime = "Evening!";
  }
      //<p>{weather.current.condition.text}</p>
  return (
    <div className="App">
      <Nav greeting={greetingTime}/>
      <p>{weather.current.condition.text}</p>
      <img src={weather.current.condition.icon} alt={weather.current.condition.text} />
      {/* <WeatherInfo/> */}
    </div>
  );

}

export default App;

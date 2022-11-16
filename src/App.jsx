import './App.scss';
import {useState, useEffect} from 'react';
import Nav from './Components/Nav/Nav';
import WeatherInfo from './Components/WeatherInfo/WeatherInfo';
function App() {
   const [weather, setWeather] = useState([]);
  const [position, setPosition] = useState("London");
  const [loading,setLoading] = useState(true);
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
    setLoading(false);
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
       {!loading &&<WeatherInfo text={weather.current.condition.text} img={weather.current.condition.icon} temp={weather.current.temp_c}/>  }
    </div>
  );

}

export default App;

import React from 'react';
import { useEffect, useState } from 'react';
import Loader from "./components/Loader";
import Weather from "./components/Weather";
import './App.css';

function App() {
  const cities = ['marseille', 'paris', 'lyon'];
  const [currentCity, setCurrentCity] = useState("paris");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetchWeather();
  }, [currentCity]);

  const fetchWeather = async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=31fbf609e536f570b92805e907a76ccc&units=metric`);
    const data = await response.json();

    setWeather(data);
  }

  const handleChangeCity = city => {
    setCurrentCity(city)
  }

  return (
    <div className="App">
      { !weather ? <Loader /> : <Weather weather={weather} cities={cities} changeCity={handleChangeCity}/> }
    </div>
  );
}

export default App;

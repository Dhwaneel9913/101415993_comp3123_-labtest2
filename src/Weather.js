import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const API_KEY = 'edc3aa08b45dc65c8e819082117e86ae'; // Your OpenWeatherMap API key
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

    axios.get(url)
      .then(response => {
        setWeatherData(response.data);
      })
      .catch(error => {
        console.error("Error fetching weather data:", error);
      });
  }, [city]);

  if (!weatherData) return <div>Loading...</div>;

  const iconCode = weatherData.weather[0].icon;
  const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;

  return (
    <div>
      <h2>Weather in {city}</h2>
      <p>Temperature: {weatherData.main.temp}°K</p>
      <p>Condition: {weatherData.weather[0].main}</p>
      <img src={iconUrl} alt="Weather Icon" />
    </div>
  );
};

export default Weather;

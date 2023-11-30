import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherCard from './WeatherCard';
import './App.css';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('Berlin'); 
  const API_KEY = 'edc3aa08b45dc65c8e819082117e86ae'; 

  useEffect(() => {
    if (city) {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

      axios.get(url)
        .then(response => {
          const newWeatherData = {
            city: response.data.name,
            temperature: response.data.main.temp,
            minTemp: response.data.main.temp_min,
            maxTemp: response.data.main.temp_max,
            humidity: response.data.main.humidity,
            windSpeed: response.data.wind.speed,
            weatherCondition: response.data.weather[0].main,
            icon: response.data.weather[0].icon
          };
          setWeatherData(newWeatherData);
        })
        .catch(error => {
          console.error("Error fetching weather data:", error);
        });
    }
  }, [city]);

  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      setCity(event.target.value);
    }
  };

  return (
    <div className="App">
      <input 
        type="text" 
        placeholder="Enter city name" 
        onKeyPress={handleSearch}
      />
      {weatherData && <WeatherCard weatherData={weatherData} />}
    </div>
  );
};

export default App;

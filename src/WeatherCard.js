import React from 'react';
import { getBackgroundColor } from './utils';
import './WeatherCard.css';

const WeatherCard = ({ weatherData }) => {
  const {
    temperature,
    minTemp,
    maxTemp,
    city,
    humidity,
    windSpeed,
    weatherCondition,
    icon
  } = weatherData;

  const backgroundColor = getBackgroundColor(weatherCondition);
  const iconUrl = `http://openweathermap.org/img/wn/${icon}.png`;

  return (
    <div className="weather-card" style={{ backgroundColor }}>
      <img src={iconUrl} alt="Weather Icon" />
      <div className="weather-info">
      <h2 className="city-name">{city}</h2> 
        <div className="temperature">{temperature}°C</div>
        <div className="condition">{weatherCondition}</div>
        <div className="extra-info">
          <p>Low: {minTemp}°C</p>
          <p>High: {maxTemp}°C</p>
          <p>Humidity: {humidity}%</p>
          <p>Wind: {windSpeed} km/h</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;

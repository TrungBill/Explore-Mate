import React, { Component } from 'react';
import { Typography, Card, CardContent, Grid, CircularProgress } from '@material-ui/core';
import './style.css'
import  MoonSvg  from '../../assets/svgs/moon.svg?react';
import  CloudSvg  from '../../assets/svgs/cloud.svg?react';




const WeatherInfo = ({ weatherData, isLoading }) => {
  
  if (!weatherData || !weatherData.weather) {
    return <div>Loading weather data...</div>;
  }
  const kelvinToCelsius = (kelvin) => (kelvin - 273.15).toFixed(2);
  const {
    name,
    weather,
    main: { temp, feels_like, temp_min, temp_max, humidity },
  } = weatherData;
 
  return (
   
       <div className='weather-info-container'>
         {isLoading && (
        <div className="loading-overlay">
          <CircularProgress size="3rem" />
        </div>
      )}
        <MoonSvg className = 'moon'/>
        <div className='cloud-container'>
            <CloudSvg className='cloud'/>
        </div>
        <div className = 'location-text'> Current Location</div>
        <div className = 'location'>{name}</div>
        <div className = 'temperature'>{Math.round(kelvinToCelsius(temp))}°C</div>
        <div className = 'weather'>{weather[0].main}</div>
        <div className = 'low-high'>L: {Math.round(kelvinToCelsius(temp_min))}°  H:{Math.round(kelvinToCelsius(temp_max))}°</div>
        <div className = 'humidity'>Humidity: {humidity}%</div>
        
      </div>
   
     
    
  );
};

export default WeatherInfo;

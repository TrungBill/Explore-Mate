import React, { Component } from 'react';
import { Typography, Card, CardContent, Grid } from '@material-ui/core';
import './style.css'
import  MoonSvg  from '../../assets/svgs/moon.svg?react';
import  CloudSvg  from '../../assets/svgs/cloud.svg?react';




const WeatherInfo = ({ weatherData }) => {
 
  return (
   <Card>
       <div className='weather-info-container'>
        <MoonSvg className = 'moon'/>
        <div className='cloud-container'>
            <CloudSvg className='cloud'/>
        </div>
      </div>
   </Card>
     
    
  );
};

export default WeatherInfo;

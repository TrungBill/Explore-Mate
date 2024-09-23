import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { Typography, useMediaQuery } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import useStyles from './style';


const Map = ({ setCoordinates, setBounds, coordinates }) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery('(min-width:600px)');
  

 

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: import.meta.env.VITE_google_maps_key_1}}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });         
        }}
        
      >
      
      </GoogleMapReact>
    </div>
  );
}; 

export default Map;

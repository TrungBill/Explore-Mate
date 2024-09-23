import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { useLoadScript } from '@react-google-maps/api';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from '@reach/combobox';
import useStyles from './style';
import '@reach/combobox/styles.css';
import SearchIcon from '@material-ui/icons/Search';

// Define the libraries array outside of the component
const libraries = ['places'];

const Header = ({ setCoordinates }) => {
  const classes = useStyles();

  // Load the Google Maps script with the Places library
  const { isLoaded } = useLoadScript({
    googleMapsApiKey:  import.meta.env.VITE_google_maps_key_1,
    libraries,
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <AppBar position="static" >
      <Toolbar className={classes.toolbar}>
      <div className={classes.logoContainer}>
          <Typography variant="h5" className={classes.logo}>
            Explore Mate
          </Typography>
        </div>

        {/* Pass setCoordinates to PlacesAutocomplete */}
        <PlacesAutocomplete setCoordinates={setCoordinates} className={classes.inputInput} />
      </Toolbar>
    </AppBar>
  );
};

const PlacesAutocomplete = ({ setCoordinates }) => {
  const classes = useStyles()
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    const results = await getGeocode({ address });   
    const { lat, lng } = await getLatLng(results[0]);
    setCoordinates({ lat, lng }); // This updates the coordinates in the parent component
  };

  return (
    <div className={classes.searchContainer}>
      <SearchIcon />
      <Combobox onSelect={handleSelect}>
      <ComboboxInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!ready}
        className={classes.inputInput}
        placeholder="Search an address"
      />
      <ComboboxPopover>
        <ComboboxList className={classes.comboboxList}>
          {status === "OK" &&
            data.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} value={description} />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
    </div>
    
  );
};

export default Header;
import axios from 'axios';


export const getPlaceData = async (type, sw, ne) => {


    try {
        const { data: { data } } = await axios.get('https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary', {
            params: {
                bl_latitude: sw.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
                tr_latitude: ne.lat,
               
               
            },
            headers: {
                'x-rapidapi-key': import.meta.env.VITE_travel_advisor_apis,
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            }
        });
        return data;
    } catch (error) {
        console.error('Error fetching place data:', error);
        return [];
    }
};

export const getWeatherData = async (lat, lng) => {
    try {
        const { data } = await axios.get(`https://open-weather13.p.rapidapi.com/city/latlon/${lat}/${lng}`, {
            params: {
                lon: lng,
                lat: lat,
                units: 'metric',
              },

            headers: {
                'x-rapidapi-key': '933f56daeamshfb94892f490f81cp19a12ejsn88bbfe9bf943',
                'x-rapidapi-host':  'open-weather13.p.rapidapi.com',
              }
        });
        return data
        console.log(data)
    }catch (error) {
        console.error('Error fetching weather data:', error);
        return [];
    }
};



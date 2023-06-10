import React from 'react';
import { useLocation } from 'react-router-dom';

const WeatherDetails = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const cityName = searchParams.get('city');
  const country = searchParams.get('country');

  return (
    <div>
      <h1>Weather Details</h1>
      <p>City Name: {cityName}</p>
      <p>Country: {country}</p>
      {/* Display the rest of the weather details here */}
    </div>
  );
};

export default WeatherDetails;

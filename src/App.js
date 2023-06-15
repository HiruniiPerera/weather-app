import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WeatherCard from './WeatherCard';
import './App.css';

const App = () => {
  const [formattedWeatherData, setFormattedWeatherData] = useState([]);
  
  const getdate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const options = { month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const gettime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    var hours = date.getHours();
    var minutes = '0' + date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes.slice(-2); // take the last two digits of minutes
    var strTime = hours + '.' + minutes + ' ' + ampm;
    return strTime;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const citiesResponse = await axios.get('cities.json');
        const jsonData = citiesResponse.data;
        const cityCodes = jsonData.List.map(city => city.CityCode);
        console.log(cityCodes);

        const apiKey = 'ce07fffd66d70be96fd56dd388459ff2';
        const response = await axios.get('http://api.openweathermap.org/data/2.5/group', {
          params: {
            id: cityCodes.join(','),
            units: 'metric',
            appid: apiKey
          }
        });

        const weatherData = response.data;

        const formattedData = weatherData.list.map(city => {
          const cityName = city.name;
          const countryCode = city.sys.country;
          const temperature = city.main.temp;
          const weatherDescription = city.weather[0].description;
          const pressure = city.main.pressure;
          const humidity = city.main.humidity;
          const visibility = city.visibility;
          const windSpeed = city.wind.speed;
          const windDirection = city.wind.deg;
          const sunrise = gettime(city.sys.sunrise);
          const sunset = gettime(city.sys.sunset);
          const date = getdate(city.dt);
          const time = gettime(city.dt);

          return {
            cityName,
            countryCode,
            date,
            time,
            weatherDescription,
            pressure,
            humidity,
            visibility,
            temperature,
            temp_min: city.main.temp_min,
            temp_max: city.main.temp_max,
            windSpeed,
            windDirection,
            sunrise,
            sunset
          };
        });

        setFormattedWeatherData(formattedData);
        console.log(formattedData);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
        <h1><img src="weathericon.png" alt="Weather Icon" width="30" height="30"></img> Weather App</h1>
        <div class="search-container">
          <input type="text" class="search-input" placeholder="Enter a city" style={{color:"white"}}></input>
          <button class="search-button">Add city</button>
        </div>
        {formattedWeatherData.map((city, index) => {
        if (index % 2 === 0) {
          // Render two cards in a row
          const nextCity = formattedWeatherData[index + 1];
          const colorClasses = [
            'card-color-1',
            'card-color-2',
            'card-color-3',
            'card-color-4',
            'card-color-5',
            'card-color-6',
            'card-color-7',
            'card-color-8',
          ];
          const color1 = colorClasses[index % colorClasses.length]; // Assign color to first card
          const color2 = colorClasses[(index + 1) % colorClasses.length]; // Assign color to second card
          return (
            <div className="card-row" key={index}>
              <WeatherCard {...city} color={color1} />
              {nextCity && <WeatherCard {...nextCity} color={color2} />}
            </div>
          );
        }
        return null; // Skip odd-indexed cards
      })}
      <div class="footer">
        2023 
      </div>
    </div>
  );
};

export default App;

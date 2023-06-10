import React from 'react';
import ReactDOM from 'react-dom/client';
import city from './city';
import './WeatherCard.css';

const WeatherCard = ({ cityName, countryCode, date, time, weatherDescription, pressure, humidity, visibility, temperature, temp_min, temp_max, windSpeed, windDirection, sunrise, sunset, color }) => {
  const returnback = () => {
    window.location.href = "http://localhost:3000"; // Use window.location instead of location
  };
  
  const handleClick = () => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <h1><img src="weathericon.png" alt="Weather Icon" width="30" height="30" /> Weather App</h1>

        <div className={`card ${color}`} style={{ flex: "0 0 calc(50% - 10px)", width: "500px", height: "300px", borderRadius: "5px", textAlign: "center", fontSize: "24px", fontWeight: "100px", cursor: "pointer", marginTop: "80px", marginLeft: "30%", marginRight: "20%", overflow: "hidden" }}>
          <div className="card-content" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
            <div className="card-title" id="card" style={{ backgroundColor: `${color}`, width: "500px", display: "flex", justifyContent: 'center', height: "200px" }}>
              <div className='top' style={{ textAlign: "left", color: 'white', width: "60px", paddingLeft: "10px", paddingTop: "10px" }}>
                <div className="btn" style={{ color: "white", borderColor: "white",borderWidth:"1px", backgroundColor: `${color}` }} onClick={returnback}>
                  <img src="backbtn.png" width="20px" height="30px" alt="Back Button" />
                </div>
              </div>

              <div className="card-title-left" style={{ flex: "1", fontSize: "30px", textAlign: "center", color: "white", paddingLeft: "30px", paddingTop: "30px" }}>
                <span id="city"><b>{cityName},{countryCode}</b><br /></span>
                <span className="small-font">{time},{date}<br />{weatherDescription}</span>
              </div>

              <div className="card-title-right" style={{ flex: "1", fontSize: "30px", textAlign: "right", color: "white", paddingRight: "30px", paddingTop: "30px" }}>
                <span id="city">
                  <span className="larger-font"><b>{temperature}</b></span><br />
                  <span className="small-font">Min Temp:{temp_min}<br />Max Temp:{temp_max}</span>
                </span>
              </div>
            </div>

            <div className="card-description" style={{ width: "500px", height: "150px", paddingTop: "20px" }}>
              <div className="bottom-left" style={{ paddingTop: "20px" }}>
                <span>Pressure: {pressure}hPa <br /> Humidity: {humidity}%<br />Visibility: {visibility}km</span>
              </div>
              <div className="bottom-mid" style={{ paddingTop: "20px" }}>
                <span><img src="arrow.png" width="20px" height="15px" alt="Arrow Icon" /><br />{windSpeed} m/s | {windDirection} Degree </span>
              </div>
              <div className="bottom-right" style={{ paddingTop: "20px" }}>
                <span>Sunrise:{sunrise}<br />Sunset:{sunset}</span>
              </div>
            </div>
          </div>
        </div>
        <br /><br /><br /><br /><br /><br />
        <div className="footer" style={{ marginBottom: "0px", height: "50px" }}>
          2023 Fidenz Technologies
        </div>
      </React.StrictMode>
    );
  };

  return (
    <div className={`card ${color}`} onClick={handleClick}>
      <div className="card-content">
        <div className="card-title">
          <div className="card-title-left">
            <span id="city"><b>{cityName},{countryCode}</b><br /></span>
            <span className="small-font">{time},{date}<br />{weatherDescription}</span>
          </div>
          <div className="card-title-right">
            <span id="city">
              <span className="larger-font"><b>{temperature}</b></span><br />
              <span className="small-font">Min Temp:{temp_min}<br />Max Temp:{temp_max}</span>
            </span>
          </div>
        </div>
        <div className="card-description">
          <div className="bottom-left">
            <span>Pressure: {pressure}hPa <br /> Humidity: {humidity}%<br />Visibility: {visibility}km</span>
          </div>
          <div className="bottom-mid">
            <span><img src="arrow.png" width="20px" height="15px" alt="Arrow Icon" /><br />{windSpeed} m/s | {windDirection} Degree </span>
          </div>
          <div className="bottom-right">
            <span>Sunrise:{sunrise}<br />Sunset:{sunset}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;

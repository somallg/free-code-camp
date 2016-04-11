import React from 'react';

import CurrentDate from './current_date';

const WeatherDetail = ({ weather, units, toggleUnits }) => {
  if (!weather) {
    return <div>Loading weather...</div>;
  }

  const { icon, description } = weather.weather[0];
  const { temp, humidity, pressure } = weather.main;

  return (
    <div className="weather-detail">
      <CurrentDate />
      <p className="text-capitalize">Weather: {description}</p>
      <hr/>
      <div className="weather-detail-container">
        <div className="item toggle-units" onClick={toggleUnits}>
          <img className="img-lg" src={`http://openweathermap.org/img/w/${icon}.png`}/>
          <span className="text-lg">{temp}</span>
          <div className="icon">
            <i className={`wi ${units === 'metric' ? 'wi-celsius' : 'wi-fahrenheit'} icon-lg`}/>
          </div>
        </div>

        <div className="item">
          <p>Humidity: {humidity} %</p>
          <p>Pressure: {pressure} hPa</p>
        </div>
      </div>
    </div>);
};

export default WeatherDetail;

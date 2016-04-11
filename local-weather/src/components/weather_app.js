import React, { Component } from 'react';

import LocationDetail from './location_detail';
import WeatherDetail from './weather_detail';
import { fetchLocation, fetchWeather } from '../actions';

const getCurrentTimeInSeconds = () => {
  return new Date().getTime() / 1000;
};

let cachedWeatherData = {
  metric: null,
  imperial: null,
  timeStamp: getCurrentTimeInSeconds()
};

class WeatherApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: null,
      weather: null,
      units: 'metric'
    };

    fetchLocation()
      .then(({data}) => { this.setState({ location: data }); return { city: data.city, country: data.country } })
      .then(fetchWeather)
      .then(({data}) => { this.setState({ weather: data }); cachedWeatherData.metric = data });
  }

  toggleUnits() {
    let { units } = this.state;
    const { city, country } = this.state.location;
    if (units === 'metric') {
      units = 'imperial';
    } else {
      units = 'metric';
    }

    if (! cachedWeatherData[units] || cachedWeatherData.timeStamp + 60 < getCurrentTimeInSeconds()) {
      fetchWeather({ city, country, units })
        .then(({data}) => {
          this.setState({ weather: data, units: units });
          cachedWeatherData[units] = data;
          cachedWeatherData.timeStamp = new Date().getTime() / 1000;
        });
    } else {
      this.setState({ weather: cachedWeatherData[units], units: units });
    }
  }

  render() {
    return (
      <div className="well no-select">
        <LocationDetail location={this.state.location} />
        <WeatherDetail
          weather={this.state.weather}
          units={this.state.units}
          toggleUnits={this.toggleUnits.bind(this)}
        />
      </div>
    );
  }
}

export default WeatherApp;

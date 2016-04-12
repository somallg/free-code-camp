import React, { Component } from 'react';

import LocationDetail from './location_detail';
import WeatherDetail from './weather_detail';
import { fetchLocation, fetchWeather } from '../actions';

import CacheManager from '../actions/cache';

const cacheManager = CacheManager();

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
      .then(({data}) => { this.setState({ weather: data }); cacheManager.putToCache('metric', data) });
  }

  toggleUnits() {
    let { units } = this.state;
    const { city, country } = this.state.location;
    if (units === 'metric') {
      units = 'imperial';
    } else {
      units = 'metric';
    }

    if (cacheManager.isCacheExpired()) {
      cacheManager.flushCache();
    }

    if (! cacheManager.isInCache(units)) {
      fetchWeather({ city, country, units })
        .then(({data}) => {
          this.setState({ weather: data, units: units });
          cacheManager.putToCache(units, data);
        });
    } else {
      this.setState({ weather: cacheManager.getData(units), units: units });
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

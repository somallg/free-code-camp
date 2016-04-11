// import scss
import 'bootstrap-loader';
import '../style/style.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import WeatherApp from './components/weather_app';

ReactDOM.render(<WeatherApp />, document.querySelector('#weather-app'));

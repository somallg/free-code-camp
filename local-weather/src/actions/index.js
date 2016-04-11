import axios from 'axios';

const LOCATION_API_URL = 'http://ipinfo.io';
const WEATHER_API_KEY = '6c186bd312fb6c44839158e1da4c8d1e';
const WEATHER_API_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${WEATHER_API_KEY}`;

export const fetchLocation = () => {
  return axios.get(LOCATION_API_URL);
};

export const fetchWeather = ({ city, country, units = 'metric' }) => {
  return axios.get(`${WEATHER_API_URL}&q=${city},${country}&units=${units}`);
};

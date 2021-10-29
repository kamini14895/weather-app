import axios from 'axios';

const corsUrl =  'http://cors-anywhere.herokuapp.com/';
const metWeatherBaseUrl = 'https://www.metaweather.com/api/';

const MET_WEATHER_API = axios.create({
  baseURL: corsUrl + metWeatherBaseUrl
  
});


export default MET_WEATHER_API;
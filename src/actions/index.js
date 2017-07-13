import axios from 'axios'


const API_KEY = '4f66c35905e554705ce85f0d5580fdbd'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`  //template string (ES6 syntax)
export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`
  const request = axios.get(url)
  console.log('request:', request)
  //promise
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}

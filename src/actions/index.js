const API_KEY = '4f66c35905e554705ce85f0d5580fdbd'
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`  //template string (ES6 syntax)
export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather() {
  return {
    type: FETCH_WEATHER
  }
}

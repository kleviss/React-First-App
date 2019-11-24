import axios from "axios";

const API_KEY = "45c18ffa0e13f9b4430c4d6f7ce33b2d";
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city}`;
  const request = axios.get(url);

  console.log("Action Request:", request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}

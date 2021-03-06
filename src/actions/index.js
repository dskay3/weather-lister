import axios from "axios";

import * as types from "./types";

const API_KEY = "8e9dc87386eab029e3a031ced7913fbd";
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
const COUNTRY_CODE = "us";

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},${COUNTRY_CODE}`;

  const request = axios.get(url);

  return {
    type: types.FETCH_WEATHER,
    payload: request
  };
}

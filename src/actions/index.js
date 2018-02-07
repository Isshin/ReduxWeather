import axios from 'axios';

const API_KEY = 'e0f2ce67a9ca64a50c315a3c88551c05';
const URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${URL}&q=${city},se`;
    const request = axios.get(url);

    return {
        type:FETCH_WEATHER,
        payload : request
    }
}
import React, { useState } from "react";
import WeatherContext from "./WeatherContext";
import secret from "../Config/config";
function WeatherState(props) {
  // Error State
  const [error, setError] = useState(false);

  // FOund State
  const [found, setFound] = useState(true);

  // Loader state
  const [loader, setLoader] = useState(false);

  // Defining state
  const [weather, setWeather] = useState({
    temp: "",
    feels_like: "",
    cloudPCT: "",
    min_temp: "",
    max_temp: "",
    city: "",
    humidity: "",
    wind_speed: "",
    wind_degrees: "",
  });

  // Fetching key host and link from config
  const { api, host, key } = secret;

  // getweather function get weather
  const getWeather = async (city) => {
    try {
      setLoader(true);
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": key,
          "X-RapidAPI-Host": host,
        },
      };

      const res = await fetch(`${api}${city}`, options);
      const data = await res.json();
      if (data.error) {
        setFound(false);
        setError(false);
        setLoader(false);
      }else{
        setFound(true);
      }
      setWeather({
        temp: data.temp,
        feels_like: data.feels_like,
        cloudPCT: data.cloud_pct,
        min_temp: data.min_temp,
        max_temp: data.max_temp,
        city: `Weather of ${city}`,
        wind_speed: data.wind_speed,
        humidity: data.humidity,
      });
      setError(false);
      setLoader(false);
    } catch (err) {
      setLoader(true);
      setError(true);
      setLoader(false);
    }
  };

  return (
    <WeatherContext.Provider
      value={{ getWeather, weather, error, loader, found }}
    >
      {props.children};
    </WeatherContext.Provider>
  );
}

export default WeatherState;

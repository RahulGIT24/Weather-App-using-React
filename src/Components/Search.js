import React, { useContext, useEffect, useState } from "react";
import weatherContext from "../context/weather/WeatherContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Search() {
  const context = useContext(weatherContext);

  // Creating a City State
  const [city, setCity] = useState("London");

  // Fetching function and objects from context
  const { getWeather } = context;

  const handleClick = (e) => {
    e.preventDefault();
    getWeather(city);
  };

  const onChange = (e) => {
    setCity(e.target.value);
  };

  
  return (
    <>
      <div className="search flex justify-center items-center mt-12 flex-row">
        <input
          type="search"
          id="search"
          name="search"
          className="pl-1 py-1 w-80 border-2 rounded border-black outline-none mx-2"
          value={city}
          onChange={onChange}
          required
        />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="cursor-pointer"
          onClick={handleClick}
        />
      </div>
    </>
  );
}

export default Search;

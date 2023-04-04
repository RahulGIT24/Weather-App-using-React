import React, { useContext, useEffect, useState } from "react";
import weatherContext from "../context/weather/WeatherContext";

function Search() {
  // Creating context
  const context = useContext(weatherContext);

  // Creating a City State
  const [city, setCity] = useState("London");

  // Fetching function and objects from context
  const { getWeather } = context;

  // Handling event to get weather when user search for city
  const handleClick = (e) => {
    e.preventDefault();
    getWeather(city);
  };

  // It will update the city when user enter
  const onChange = (e) => {
    setCity(e.target.value);
  };

  // Using useEffect
  useEffect(() => {
    getWeather(city);
  }, ["city"]);

  return (
    <>
      <div className="mt-32 flex justify-center items-center flex-row">
        <input
          type="search"
          id="search"
          name="search"
          value={city}
          onChange={onChange}
          className="block p-2.5  z-20 text-sm w-80 border-2 rounded-2xl border-black outline-none"
          placeholder="Enter City Name"
          required
        />
        <button
          disabled = {
            city.length === 0 
          }
          type="submit"
          onClick={handleClick}
          className="p-2.5 ml-2 text-sm font-medium text-white bg-black rounded-lg border border-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-black dark:bg-black dark:hover:bg-black dark:focus:ring-black"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </div>
    </>
  );
}

export default Search;

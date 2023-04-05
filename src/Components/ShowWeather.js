import React, { useContext } from "react";
import weatherContext from "../context/weather/WeatherContext";
import Error from "./Error";
import Loader from "./Loader";
import Main from "../Assets/main.gif";
import NotFound from "./NotFound";

function ShowWeather() {
  const context = useContext(weatherContext);

  // Fetching function and objects from context
  const { weather, error, loader, found } = context;

  return (
    <>
      {found === false && error === false && loader===false? <NotFound /> : ""}
      {error === true && loader === false ? <Error /> : ""}
      {loader && <Loader />}
      {error === false && loader === false && found === true ? (
        <div className="weather mt-3 flex justify-center items-center flex-col">
          <h1 className="text-center text-4xl text-white">
            <b>{weather.city}</b>
          </h1>
          <section className=" body-font">
            <div className="container px-5 py-5 mx-auto my-1">
              <div className="flex justify-center items-center">
                <div className="w-96 p-4 border-2 rounded-xl border-black bg-purple text-white">
                  <div className=" bg-opacity-40 rounded-lg">
                    <img
                      className="h-40 rounded w-full object-cover object-center mb-6"
                      src={Main}
                      alt="content"
                    />

                    <h3 className="tracking-widest  text-lg title-font">
                      <b>TEMPERATURE</b>
                    </h3>
                    <h2 className="text-lg my-1  font-medium title-font mb-4">
                      {" "}
                      {weather.temp}°C
                    </h2>
                    <div className="flex flex-row justify-between">
                      <div>
                        <p className="leading-relaxed text-xl ">
                          Feels Like: {weather.feels_like}°C
                        </p>
                        <p className="leading-relaxed text-xl">
                          Cloud PCT: {weather.cloudPCT}
                        </p>
                        <p className="leading-relaxed text-xl">
                          Min Temp: {weather.min_temp}°C
                        </p>
                      </div>
                      <div>
                        <p className="leading-relaxed text-xl">
                          Max Temp: {weather.max_temp}°C
                        </p>
                        <p className="leading-relaxed text-xl">
                          Humidity: {weather.humidity}
                        </p>
                        <p className="leading-relaxed text-xl">
                          Wind Speed: {weather.wind_speed}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default ShowWeather;

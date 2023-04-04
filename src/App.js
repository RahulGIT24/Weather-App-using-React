import "./App.css";
import WeatherState from "./context/weather/WeatherState";
import ShowWeather from "./Components/ShowWeather";
import Ribbon from "./Components/Ribbon";
import Search from "./Components/Search";

function App() {
  return (
    <WeatherState>
      <Ribbon />
      <Search />
      <ShowWeather />
    </WeatherState>
  );
}

export default App;

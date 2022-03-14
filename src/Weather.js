import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const apiKey = "9b6ab42afd13023a4cf84fa0a2741900";
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState(null);
  const [description, setDescription] = useState("");
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [icon, setIcon] = useState("");

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  let iconUrl = ` https://openweathermap.org/img/wn/${icon}@2x.png`;

  function searchWeather(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function getWeather(event) {
    event.preventDefault();
    axios.get(url).then(displayWeather);
  }
  function displayWeather(response) {
    console.log(response.data.weather[0].description);
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(response.data.weather[0].icon);
  }

  if (temperature === null) {
    return (
      <div className="searchBar">
        <form onSubmit={getWeather}>
          <input
            type="text"
            placeholder="Search for a city"
            onChange={searchWeather}
          />
          <input type="submit" value="search" />
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <form onSubmit={getWeather}>
          <input
            type="text"
            placeholder="Search for a city"
            onChange={searchWeather}
          />
          <input type="submit" value="search" />
        </form>

        <ul>
          <li>Temperature: {Math.round(temperature)}°C</li>
          <li>Description: {description}</li>
          <li>Humidity: {humidity}%</li>
          <li>Wind: {wind}km/h</li>
          <li>
            <img src={iconUrl} alt={description} />
          </li>
        </ul>
      </div>
    );
  }
}

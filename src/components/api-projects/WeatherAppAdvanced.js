import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../key/Navbar";
import ContactLinks from "../key/ContactLinks";
import DailyWeather from "./DailyWeather";
import LocationButton from "./LocationButton";

function WeatherAppAdvanced(props) {
  const [weatherRequest, setWeatherRequest] = useState({
    location: "",
    latitude: 0,
    longitude: 0,
    imageUrl: "",
    sunrise: "",
    sunset: "",
    button: true,
  });

  const [weatherData, setWeatherData] = useState([]);

  const [locationButton, setLocationButton] = useState([true]);

  const [searchString, setSearchString] = useState("");

  let dailyTempArr = [];

  const api_key = "$$$$$$$";

  // Gets user geolocation

  const getPosition = () => {
    navigator.geolocation.getCurrentPosition(getWeatherData, errorHandler);
  };

  // Pulls in data from the OpenWeather API before calling setWeather with the data

  const getWeatherData = (e) => {
    var latitude = e.coords.latitude;
    var longitude = e.coords.longitude;
    const api = "https://api.openweathermap.org/data/2.5/forecast?";
    fetch(
      `${api}lat=${latitude}&lon=${longitude}&appid=${api_key}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => setWeather(data));
  };

  // Submits search location text to API

  const enterSearch = (e) => {
    if (e.key === "Enter") {
      submitSearch();
    }
  };

  const submitSearch = (e) => {
    if (searchString) {
      fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${searchString}&limit=1&appid=${api_key}`
      )
        .then((response) => response.json())
        .then((data) => searchWeatherData(data));
    } else alert("Please enter a location to search.");
  };

  // Uses search location data to fetch 5 day forecast

  const searchWeatherData = (e) => {
    var latitude = e[0].lat;
    var longitude = e[0].lon;
    const api = "https://api.openweathermap.org/data/2.5/forecast?";
    console.log(`${api}london&appid=${api_key}&units=metric`);
    fetch(
      `${api}lat=${latitude}&lon=${longitude}&appid=${api_key}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => setWeather(data));
  };

  // Function filters data for 12pm each day

  const setWeather = (data) => {
    for (let i = 0; i < data.list.length; i++) {
      if (i == 0 || i % 8 == 0 || i % 4 == 0) {
        dailyTempArr.push(data.list[i]);
      }
    }

    // Updates state with weather data
    setWeatherRequest({
      location: data.city.name,
      latitude: data.city.coord.lat,
      longitude: data.city.coord.lon,
      sunrise: timeConverter(data.city.sunrise),
      sunset: timeConverter(data.city.sunset),
    });
    setWeatherData({ dailyTempArr });
    setLocationButton({ locationButton: false });
  };

  // Weather search function

  const updateSearch = (e) => {
    setSearchString(e.target.value);
  };

  // converts UNIX into readable 12hr time

  const timeConverter = (UNIX_timestamp) => {
    var a = new Date(UNIX_timestamp * 1000);
    var hour = a.getHours();
    var min = a.getMinutes();
    var time = hour + ":" + min;
    return time;
  };

  const errorHandler = (err) => {
    if (err.code == 1) {
      alert("Error: Access is denied!");
    } else if (err.code == 2) {
      alert("Error: Position is unavailable!");
    }
  };

  useEffect(() => {
    setWeatherData(dailyTempArr);
  }, []);

  useEffect(() => {
    setLocationButton(locationButton);
  }, []);

  {
    return (
      <>
        <Helmet>
          <title>Weather App</title>
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v6.1.1/css/all.css"
            crossorigin="anonymous"
          />
        </Helmet>
        <Navbar />
        <div className="page-body">
          <div className="project-body">
            <div id="weather-app">
              <div>
                <div className="content">
                  <h1>
                    Weather App <i className="fa-solid fa-cloud-moon-rain"></i>
                  </h1>
                  <div className="location">
                    <LocationButton
                      getPosition={getPosition}
                      switch={locationButton}
                    />
                    <input
                      className="weather-search-input"
                      placeholder="Search Location"
                      onChange={updateSearch}
                      onKeyUp={enterSearch}
                    ></input>
                    <button
                      className="weather-search-button find-location-btn"
                      onClick={submitSearch}
                    >
                      Submit Search{" "}
                      <i className="fa-solid fa-magnifying-glass-location"></i>
                    </button>
                  </div>
                  <div id="weather-tiles">
                    <DailyWeather
                      weather={weatherData.dailyTempArr}
                      location={weatherRequest.location}
                      latitude={weatherRequest.latitude}
                      longitude={weatherRequest.longitude}
                    />
                  </div>
                  <div className="day-length"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ContactLinks />
      </>
    );
  }
}

export default WeatherAppAdvanced;

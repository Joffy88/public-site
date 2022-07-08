import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../key/Navbar";
import ContactLinks from "../key/ContactLinks";

function WeatherApp(props) {
  const [weatherRequest, setWeatherRequest] = useState({
    location: "",
    latitude: 0,
    longitude: 0,
    main: "",
    description: "",
    temp: "",
    imageUrl: "",
    feels: "",
    sunrise: "",
    sunset: "",
    windspeed: "",
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(showPosition, errorHandler);
  }, []);

  const showPosition = (e) => {
    var latitude = e.coords.latitude;
    var longitude = e.coords.longitude;
    const Http = new XMLHttpRequest();
    const api = "https://weather-proxy.freecodecamp.rocks/";

    Http.open("GET", `${api}api/current?lat=${latitude}&lon=${longitude}`);
    Http.send();
    Http.onreadystatechange = (e) => {
      if (Http.readyState === 4 && Http.status === 200 && Http.responseText) {
        var json = JSON.parse(Http.responseText);
        setWeatherRequest({
          location: json.name,
          latitude: json.coord.lat,
          longitude: json.coord.lon,
          main: json.weather[0].main,
          description: json.weather[0].description,
          temp: json.main.temp,
          imageUrl: json.weather[0].icon,
          feels: json.main.feels_like,
          sunrise: timeConverter(json.sys.sunrise),
          sunset: timeConverter(json.sys.sunset),
          windspeed: json.wind.speed,
        });
      }
    };
  };

  const timeConverter = (UNIX_timestamp) => {
    var a = new Date(UNIX_timestamp * 1000);
    var hour = a.getHours();
    var min = a.getMinutes();
    var time = hour + ":" + min;
    return time;
  };

  const errorHandler = (err) => {
    if (err.code === 1) {
      alert("Error: Access is denied!");
    } else if (err.code === 2) {
      alert("Error: Position is unavailable!");
    }
  };

  {
    return (
      <>
        <Helmet>
          <title>Weather App</title>
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.12.1/css/all.css"
            crossorigin="anonymous"
          />
        </Helmet>
        <Navbar />
        <div className="page-body">
          <div className="project-body">
            <div id="weather-app">
              <div id="fake-phone">
                <div className="content">
                  <h2>Weather App</h2>
                  <div className="location">
                    <p>Location: {weatherRequest.location}</p>
                    <p>Latitude: {weatherRequest.latitude}°</p>
                    <p>Longitude: {weatherRequest.longitude}°</p>
                  </div>
                  <div className="temperature">
                    <p>Temperature: {weatherRequest.temp}°C</p>
                    <p>Feels Like: {weatherRequest.feels}°C</p>
                    <p>Wind Speed: {weatherRequest.windspeed} Mph</p>
                  </div>
                  <div className="weather-type">
                    <p>Weather: {weatherRequest.main}</p>
                    <p>Description: {weatherRequest.description}</p>
                  </div>
                  <img
                    src={weatherRequest.imageUrl}
                    className="weather-image"
                  />
                  <div className="day-length">
                    <p>Sunrise: {weatherRequest.sunrise} AM</p>
                    <p>Sunset: {weatherRequest.sunset} PM</p>
                  </div>
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

export default WeatherApp;

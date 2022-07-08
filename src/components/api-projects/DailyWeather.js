import React from "react";

function DailyWeather(props) {
  if (props.weather) {
    let weatherArray = props.weather;

    // Converts unix time into human readable
    const timeConverter = (UNIX_timestamp) => {
      var a = new Date(UNIX_timestamp * 1000);

      // Calculates day of the week
      const dayOfWeekName = new Date(a).toLocaleString("default", {
        weekday: "short",
      });

      var months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      var month = months[a.getMonth()];
      var date = a.getDate();
      var time = dayOfWeekName + " " + month + " " + date;
      return time;
    };

    // Converts weather descriptions to title case

    const uppercaseConvert = (weather) => {
      const words = weather.split(" ");

      for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
      }

      return words.join(" ");
    };
    return (
      <div className="container">
        <div id="location-info">
          <h2>{props.location}</h2>
          <p>
            <i className="fa-solid fa-up-down"></i> {props.latitude}°
          </p>
          <p>
            <i className="fa-solid fa-left-right"></i> {props.longitude}°
          </p>
        </div>
        <div className="daily-weather row ">
          {weatherArray.map((day, id) => {
            if (id % 2 == 0) {
              return (
                <div
                  className="ind-day col-sm"
                  key={"day" + id}
                  id={"day" + id / 2}
                >
                  <div className="flex-container">
                    <p className="weather-date">{timeConverter(day.dt)}</p>
                  </div>

                  <div className="row align-items-center weather-outlook">
                    <img
                      className="col-sm-4 weather-image"
                      src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`}
                    />
                    <p className=" col-sm-8 daily-outlook">
                      {uppercaseConvert(day.weather[0].description)}
                    </p>
                  </div>
                  {/* <hr className="weather-hr" /> */}
                  <div className="weather-overview">
                    <p className="daily-temp">
                      High
                      <br />
                      {day.main.temp}°
                    </p>
                    <p className="daily-low-temp">
                      Low
                      <br />
                      {weatherArray[id + 1].main.temp_min}°
                    </p>
                  </div>
                  {/* <hr className="weather-hr" /> */}

                  <p className="daily-feels">
                    Feels like: {day.main.feels_like}°
                  </p>
                  {/* <hr className="weather-hr" /> */}

                  <p className="daily-wind-speed">
                    Wind Speed: {day.wind.speed} Mph
                  </p>
                  <p className="daily-gust-speed">Gusts: {day.wind.gust} Mph</p>
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
export default DailyWeather;

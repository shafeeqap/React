import "./Weather.css";
import search_icon from "../assets/search.png";
import humidity_icon from "../assets/humidity.png";
import wind_icon from "../assets/wind.png";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { Oval } from "react-loader-spinner";

const Weather = () => {
  const [weatherData, setWeatherData] = useState({
    loading: false,
    error: false,
  });
  const inputRef = useRef();

  const toDate = () => {
    const months = [
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const currentDate = new Date();
    const date = `${daysOfWeek[currentDate.getDay()]} 
    ${currentDate.getDate()} ${months[currentDate.getMonth()]} 
    ${currentDate.getFullYear()}`;
    return date;
  };

  const search = async (city) => {
    if (city === "") {
      alert("Enter city name");
      return;
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_APP_ID
      }`;

      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      console.log(data, "data");

      const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      setWeatherData({
        loading: true,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        description: data.weather[0].description,
        country: data.sys.country,
        icon: icon,
        time: data.timezone,
      });
    } catch (error) {
      setWeatherData(false);
      console.log("Error in fetching weather data.", error);
    }
  };

  useEffect(() => {
    search("london");
  }, []);

  return (
    <div className="weather">
      <div className="search-bar">
        <input ref={inputRef} type="text" placeholder="Search..." />
        <img
          src={search_icon}
          alt=""
          onClick={() => search(inputRef.current.value)}
        />
      </div>
      {weatherData ? (
        <>
          <div className="weather-container">
            <img src={weatherData.icon} alt="" className="weather-icon" />
            <div>
              <p className="temperature">
                {weatherData.temperature}
                <span>°C</span>
              </p>
              <p className="description">{weatherData.description}</p>
            </div>
          </div>
          <p className="location">
            {weatherData.location} <span>{weatherData.country}</span>{" "}
          </p>
          <p className="date">{toDate()}</p>
          <div className="weather-data">
            <div className="col">
              <img src={humidity_icon} alt="" />
              <div>
                <p>{weatherData.humidity} %</p>
                <span>Humidity</span>
              </div>
            </div>
            <div className="col">
              <img src={wind_icon} alt="" />
              <div>
                <p>{weatherData.windSpeed} Km/h</p>
                <span>Wind Speed</span>
              </div>
            </div>
          </div>
          {/* {weatherData.loading && (
            <Oval type="Oval" color="green" height={70} width={70}></Oval>
          )} */}
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Weather;

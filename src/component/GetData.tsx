import { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

type GetDataProps = {
  children?: string;
};

const GetData = ({ children }: GetDataProps) => {
  const [weatherData, setWeatherData] = useState<any>(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/weather?city=" +
            encodeURIComponent(children || "Bucharest")
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };
    fetchWeatherData();
  }, [children]);

  function getWindDirection(deg: number | undefined) {
    if (deg === undefined) return "";
    const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW", "N"];
    const idx = Math.round((deg % 360) / 45);
    return directions[idx];
  }

  function getBootstrapWeatherIcon(owmIcon: string | undefined) {
    if (!owmIcon) return "bi-question-circle";
    const map: { [key: string]: string } = {
      "01d": "bi-sun",
      "01n": "bi-moon",
      "02d": "bi-cloud-sun",
      "02n": "bi-cloud-moon",
      "03d": "bi-cloud",
      "03n": "bi-cloud",
      "04d": "bi-clouds",
      "04n": "bi-clouds",
      "09d": "bi-cloud-drizzle",
      "09n": "bi-cloud-drizzle",
      "10d": "bi-cloud-rain",
      "10n": "bi-cloud-rain",
      "11d": "bi-cloud-lightning",
      "11n": "bi-cloud-lightning",
      "13d": "bi-cloud-snow",
      "13n": "bi-cloud-snow",
      "50d": "bi-cloud-fog",
      "50n": "bi-cloud-fog",
    };
    return map[owmIcon] || "bi-question-circle";
  }

  if (!weatherData) {
    return <div className="weather-loading">Loading...</div>;
  }

  return (
    <section className="weather-wrapper" aria-label="Weather">
      <div className="weather-card">
        <div className="weather-header">
          <div className="weather-title">
            Weather in <span>{children || "Bucharest"}</span>
          </div>
          <i
            className={`weather-icon bi ${getBootstrapWeatherIcon(
              weatherData.weather?.[0]?.icon
            )}`}
            aria-label={weatherData.weather?.[0]?.description ?? "Weather icon"}
          ></i>
          <div className="weather-desc">
            {weatherData.weather?.[0]?.description ?? "N/A"}
          </div>
        </div>
        <ul className="weather-list">
          <li>
            <span className="weather-label">Temperature:</span>
            <span>{weatherData.main?.temp ?? "N/A"} °C</span>
          </li>
          <li>
            <span className="weather-label">Feels like:</span>
            <span>{weatherData.main?.feels_like ?? "N/A"} °C</span>
          </li>
          <li>
            <span className="weather-label">Pressure:</span>
            <span>{weatherData.main?.pressure ?? "N/A"} hPa</span>
          </li>
          <li>
            <span className="weather-label">Humidity:</span>
            <span>{weatherData.main?.humidity ?? "N/A"} %</span>
          </li>
          <li>
            <span className="weather-label">Wind:</span>
            <span>
              {weatherData.wind?.speed != null
                ? (weatherData.wind.speed * 3.6).toFixed(1)
                : "N/A"}{" "}
              km/h
              {weatherData.wind?.deg != null &&
                ` • ${getWindDirection(weatherData.wind.deg)}`}
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default GetData;

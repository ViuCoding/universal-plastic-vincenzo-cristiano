import PropTypes from "prop-types";
import MapPin from "../assets/icons/mapPin.png";
import { useEffect, useState } from "react";
import WeatherInfoBlock from "./WeatherInfoBlock";

WeatherCard.propTypes = {
  weatherData: PropTypes.object,
};

export default function WeatherCard({ weatherData }) {
  // Fetched data destructuring
  const {
    sys: { sunrise, sunset },
    main: { humidity, temp, feels_like },
    weather,
    name,
  } = weatherData;

  // Get Weather Icon according to fetched data
  const weatherIcon = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  // Sunrise & Sunset formatting
  const formatTime = timestamp => {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const sunriseHoursMinutes = formatTime(sunrise);
  const sunsetHoursMinutes = formatTime(sunset);

  // Set class for humidity slider
  const [humidityClassName, setHumidityClassName] = useState("");
  useEffect(() => {
    if (humidity) {
      if (humidity) {
        if (humidity > 0 && humidity <= 16) {
          setHumidityClassName("w-1/6");
        } else if (humidity > 16 && humidity <= 33) {
          setHumidityClassName("w-2/6");
        } else if (humidity > 33 && humidity <= 50) {
          setHumidityClassName("w-3/6");
        } else if (humidity > 50 && humidity <= 66) {
          setHumidityClassName("w-4/6");
        } else if (humidity > 66 && humidity <= 83) {
          setHumidityClassName("w-5/6");
        } else if (humidity > 83 && humidity <= 100) {
          setHumidityClassName("w-6/6");
        }
      }
    }
  }, [humidity]);

  return (
    <section className='p-4 border-2 rounded-lg border-slider'>
      <div className='flex items-center flex-wrap'>
        <img src={weatherIcon} alt='' className='w-8 h-8 rounded-full border-icon-border border-2' />
        <div className='ml-2'>
          <WeatherInfoBlock label='Weather' value={weather[0].main} />
        </div>
        <div className='ml-4'>
          <WeatherInfoBlock label='Description' value={weather[0].description} />
        </div>
      </div>

      <div className='border border-input-divider my-4'></div>

      <div className='flex items-center gap-8 mb-4 flex-wrap'>
        <div>
          <WeatherInfoBlock label='Sunrise' value={sunriseHoursMinutes} />
        </div>
        <div>
          <WeatherInfoBlock label='Sunset' value={sunsetHoursMinutes} />
        </div>
        <div>
          <p className='text-light-text text-sm uppercase mb-1'>Location</p>
          <p className='text-header-text flex items-center gap-1'>
            <img src={MapPin} alt='' />
            {name}
          </p>
        </div>
      </div>

      <div className='flex items-center gap-8 mb-2 flex-wrap'>
        <div>
          <WeatherInfoBlock label='Temperature' value={`${temp} °C`} />
        </div>
        <div>
          <WeatherInfoBlock label='Feels like' value={`${feels_like} °C`} />
        </div>
      </div>

      <div className='flex justify-end mb-2'>
        <p className='text-light-text text-sm'>{humidity}% umidity</p>
      </div>

      <div className='w-full bg-input-divider h-2 rounded-lg'>
        <div className={`${humidityClassName} bg-slider h-2 rounded-lg`}></div>
      </div>
    </section>
  );
}

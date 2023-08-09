import PropTypes from "prop-types";
import PlaceHolder from "../assets/icons/mapIcon.png";
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

  // Sunrise & Sunset formatting
  const formatTime = timestamp => {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const sunriseHoursMinutes = formatTime(sunrise);
  const sunsetHoursMinutes = formatTime(sunset);

  const [humidityClassName, setHumidityClassName] = useState("");

  // Updating humidity slider according to the fetched humidity data
  const calculateHumidityClassName = humidity => {
    const ranges = [16, 33, 50, 66, 83, 100];
    const rangeIndex = ranges.findIndex(range => humidity <= range);
    return `w-${rangeIndex + 1}/6`;
  };

  useEffect(() => {
    if (humidity) {
      const newHumidityClass = calculateHumidityClassName(humidity);
      setHumidityClassName(newHumidityClass);
    }
  }, [humidity]);

  return (
    <section className='p-4 border-2 rounded-lg border-slider'>
      <div className='flex items-center'>
        <div>
          <img src={PlaceHolder} alt='' className='w-8 h-8 p-1 rounded-full border-[crimson] border' />
        </div>
        <div className='ml-2'>
          <WeatherInfoBlock label='Weather' value={weather[0].main} />
        </div>
        <div className='ml-4'>
          <WeatherInfoBlock label='Description' value={weather[0].description} />
        </div>
      </div>

      <div className='border border-input-divider my-4'></div>

      <div className='flex items-center gap-8 mb-4'>
        <div>
          <WeatherInfoBlock label='Sunrise' value={sunriseHoursMinutes} />
        </div>
        <div>
          <WeatherInfoBlock label='Sunset' value={sunsetHoursMinutes} />
        </div>
        <div>
          <p className='text-light-text uppercase mb-1'>Location</p>
          <p className='font-semibold text-header-text flex items-center gap-1'>
            <img src={MapPin} alt='' />
            {name}
          </p>
        </div>
      </div>

      <div className='flex items-center gap-8 mb-2'>
        <div>
          <WeatherInfoBlock label='Temperature' value={`${temp} °C`} />
        </div>
        <div>
          <WeatherInfoBlock label='Feels like' value={`${feels_like} °C`} />
        </div>
      </div>

      <div className='flex justify-end mb-2'>
        <p className='text-light-text'>{humidity}% umidity</p>
      </div>

      <div className='w-full bg-input-divider h-2 rounded-lg'>
        <div className={`${humidityClassName} bg-slider h-2 rounded-lg`}></div>
      </div>
    </section>
  );
}

import PropTypes from "prop-types";
import PlaceHolder from "../assets/icons/mapIcon.png";
import MapPin from "../assets/icons/mapPin.png";
import { useEffect } from "react";

WeatherCard.propTypes = {
  weatherData: PropTypes.object,
};

export default function WeatherCard({ weatherData }) {

  const sunset = new Date(weatherData.sys.sunset * 1000);
  const sunsetHours = sunset.getHours().toString().padStart(2, "0");
  const sunsetMinutes = sunset.getMinutes().toString().padStart(2, "0");

  const sunrise = new Date(weatherData.sys.sunrise * 1000);
  const riseHours = sunrise.getHours().toString().padStart(2, "0");
  const riseMinutes = sunrise.getMinutes().toString().padStart(2, "0");

  useEffect(() => {}, [weatherData]);

  return (
    <section className='p-4 border-2 rounded-lg border-slider'>
      <div className='flex items-center'>
        <div>
          <img src={PlaceHolder} alt='' className='w-8 h-8 p-1 rounded-full border-[crimson] border' />
        </div>
        <div className='ml-2'>
          <p className='text-light-text uppercase mb-1'>Weather</p>
          <p className='font-semibold lowercase text-header-text'>{weatherData.weather[0].main}</p>
        </div>
        <div className='ml-4'>
          <p className='text-light-text uppercase mb-1'>Description</p>
          <p className='font-semibold text-header-text'>{weatherData.weather[0].description}</p>
        </div>
      </div>

      <div className='border border-input-divider my-4'></div>

      <div className='flex items-center gap-8 mb-4'>
        <div>
          <p className='text-light-text uppercase mb-1'>Sunrise</p>
          <p className='font-semibold text-header-text'>
            {riseHours}:{riseMinutes}
          </p>
        </div>
        <div>
          <p className='text-light-text uppercase mb-1'>Sunset</p>
          <p className='font-semibold text-header-text'>
            {sunsetHours}:{sunsetMinutes}
          </p>
        </div>
        <div>
          <p className='text-light-text uppercase mb-1'>Location</p>
          <p className='font-semibold text-header-text flex items-center gap-1'>
            <img src={MapPin} alt='' />
            {weatherData.name}
          </p>
        </div>
      </div>

      <div className='flex items-center gap-8 mb-2'>
        <div>
          <p className='text-light-text uppercase mb-1'>Temperature</p>
          <p className='font-semibold text-header-text'>{weatherData.main.temp} °C</p>
        </div>
        <div>
          <p className='text-light-text uppercase mb-1'>Feels like</p>
          <p className='font-semibold text-header-text'>{weatherData.main.feels_like} °C</p>
        </div>
      </div>

      <div className='flex justify-end mb-2'>
        <p className='text-light-text'>70% umidity</p>
      </div>
      <div className='w-full bg-input-divider h-1 rounded-lg'>
        <div className={`w-${32} bg-slider h-1 rounded-lg`}></div>
      </div>
    </section>
  );
}

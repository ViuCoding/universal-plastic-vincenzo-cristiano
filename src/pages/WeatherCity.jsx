import locations from "../locations.json";
import { useEffect, useState } from "react";
import { City, WeatherCard, LoadingSpinner } from "../components/index";
import axios from "axios";
import { Link } from "react-router-dom";

const API_KEY = "37f2111fdeb0f75bcb28fbd30c3c518c";

export default function WeatherCity() {
  const [city, setCity] = useState(locations[0]);

  // Data fetching state control
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Select input handler
  const handleCity = e => {
    const userSelection = e.target.value;
    setCity(locations.find(city => city.city === userSelection));
  };

  // API GET request
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${city.location.coordinates[0]}&lon=${city.location.coordinates[1]}&appid=${API_KEY}&units=metric`);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    }
    fetchData();
  }, [city]);

  return (
    <div className='container mx-auto px-2'>
      <Link to='/'>Area Selector</Link>
      <Link to='/weather'>Weather</Link>
      <h1 className='text-xl font-semibold text-center text-header-text py-2 '>Weather City</h1>
      <City locations={locations} handleCity={handleCity} />
      {isLoading && <LoadingSpinner />}
      {!isLoading && data && <WeatherCard weatherData={data} />}
      {error && <h2 className='text-3xl font-bold text-center text-error-text py-2 '>{error}</h2>}
    </div>
  );
}

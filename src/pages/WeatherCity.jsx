import { useState } from "react";
import City from "../components/City";
import locations from "../locations.json";

export default function WeatherCity() {
  const [city, setCity] = useState(locations[0]);

  const handleCity = e => {
    const userSelection = e.target.value;
    setCity(locations.find(city => city.city === userSelection));
  };
  console.log(city);
  return (
    <div className='container mx-auto px-2'>
      <h1 className='text-3xl font-bold text-center text-header-text py-2 '>Weather City</h1>
      <City locations={locations} handleCity={handleCity} />
    </div>
  );
}

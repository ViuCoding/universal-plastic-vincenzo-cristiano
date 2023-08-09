import { useEffect, useState } from "react";
import { Area, Location } from "../components/index";
import { Link } from "react-router-dom";

const latRegex = /^(-?((90(\.0{1,7})?)|(\d{1,2}(\.\d{1,7})?)))?$/;
const lonRegex = /^(?:-?180(?:\.0{1,7})?|(?:-?(?:1?[0-7]?[0-9]|180))(?:\.\d{1,7})?|)$/;

export default function AreaSelector() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [range, setRange] = useState(1000);

  // Used to show error message if lat/long format is incorrect
  const [isValid, setIsValid] = useState(true);

  // Latitude input handler
  const handleLatitude = e => {
    const latValue = e.target.value;
    if (latRegex.test(latValue)) {
      setLatitude(latValue);
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  // Longitude input handler
  const handleLongitude = e => {
    const lonValue = e.target.value;
    if (lonRegex.test(lonValue)) {
      setLongitude(lonValue);
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  // Range slider handler
  const handleRange = e => {
    setRange(Number(e.target.value));
  };


  // Geolocation services permissions
  const success = pos => {
    const location = pos.coords;
    const latString = location.latitude.toString();
    const lonString = location.longitude.toString();
    setLatitude(latString);
    setLongitude(lonString);
  };

  const error = err => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
  }, []);

  return (
    <div className='container mx-auto px-2'>
      <Link to='/'>Area Selector</Link>
      <Link to='/weather'>Weather</Link>
      <h1 className='text-xl font-semibold text-center text-header-text py-2 '>Area selector</h1>
      <Location handleLatitude={handleLatitude} handleLongitude={handleLongitude} latitude={latitude} longitude={longitude} isValid={isValid} />
      <Area range={range} handleRange={handleRange} latitude={latitude} longitude={longitude} />
    </div>
  );
}

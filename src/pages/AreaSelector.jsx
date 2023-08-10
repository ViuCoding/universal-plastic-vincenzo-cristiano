import { useEffect, useState } from "react";
import { AnimatePage, Area, Location, Navbar } from "../components/index";

export default function AreaSelector() {
  const [latitude, setLatitude] = useState("");
  const [validLatitude, setValidLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [validLongitude, setValidLongitude] = useState("");
  const [range, setRange] = useState(1000);

  // Used to show error message if lat/long format is incorrect
  const [isValid, setIsValid] = useState(true);

  // Latitude input handler and validation
  const handleLatitude = e => {
    const latValue = e.target.value;
    setLatitude(latValue);
    setIsValid(true);

    const isValidInput = /^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,6})?))$/.test(latValue);
    if (isValidInput) {
      setValidLatitude(latValue);
    } else {
      setIsValid(false);
    }
  };

  // Longitude input handler and validation
  const handleLongitude = e => {
    const lonValue = e.target.value;
    setLongitude(lonValue);
    setIsValid(true);

    const isValidInput = /^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,6})?))$/.test(lonValue);
    if (isValidInput) {
      setValidLongitude(lonValue);
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
    setValidLatitude(latString);
    setLongitude(lonString);
    setValidLongitude(lonString);
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
    <AnimatePage>
      <div className='container mx-auto px-2' id='App'>
        <h1 className='text-xl font-semibold text-center text-header-text py-2 '>Area selector</h1>
        <Location handleLatitude={handleLatitude} handleLongitude={handleLongitude} latitude={latitude} longitude={longitude} isValid={isValid} />
        <Area range={range} handleRange={handleRange} validLatitude={validLatitude} validLongitude={validLongitude} />
        <Navbar />
      </div>
    </AnimatePage>
  );
}

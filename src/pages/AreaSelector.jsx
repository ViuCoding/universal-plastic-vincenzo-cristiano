import { useEffect, useState } from "react";
import Area from "../components/Area";
import Location from "../components/Location";

import { Link } from "react-router-dom";

const latRegex = /^(-?((90(\.0{1,7})?)|(\d{1,2}(\.\d{1,7})?)))?$/;
const lonRegex = /^(?:-?180(?:\.0{1,7})?|(?:-?(?:1?[0-7]?[0-9]|180))(?:\.\d{1,7})?|)$/;

export default function AreaSelector() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [range, setRange] = useState(1000);

  const handleLatitude = e => {
    setIsValid(true);
    const latValue = e.target.value;
    if (latRegex.test(latValue)) {
      setLatitude(latValue.substring(0, 11));
    } else {
      setIsValid(false);
    }
  };
  const handleLongitude = e => {
    setIsValid(true);
    const lonValue = e.target.value;
    if (lonRegex.test(lonValue)) {
      setLongitude(lonValue.substring(0, 11));
    } else {
      setIsValid(false);
    }
  };

  const handleRange = e => {
    setRange(Number(e.target.value));
  };

  const success = pos => {
    const location = pos.coords;
    const latString = location.latitude.toString();
    const lonString = location.longitude.toString();
    setLatitude(latString.substring(0, 11));
    setLongitude(lonString.substring(0, 11));
  };

  const errors = err => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.permissions.query({ name: "geolocation" }).then(function (result) {
        if (result.state === "granted") {
          navigator.geolocation.getCurrentPosition(success, errors);
        } else if (result.state === "prompt") {
          navigator.geolocation.getCurrentPosition(success, errors);
        } else if (result.state === "denied") {
          alert("Please enable the geolocation services!");
        }
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div className='container mx-auto px-2'>
      <Link to='/'>Area Selector</Link>
      <Link to='/weather'>Weather</Link>
      <h1 className='text-3xl font-bold text-center text-header-text py-2 '>Area selector</h1>
      <Location handleLatitude={handleLatitude} handleLongitude={handleLongitude} latitude={latitude} longitude={longitude} isValid={isValid} />
      <Area range={range} handleRange={handleRange} latitude={latitude} longitude={longitude} />
    </div>
  );
}

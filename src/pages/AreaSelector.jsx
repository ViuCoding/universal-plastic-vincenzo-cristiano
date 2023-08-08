import { useEffect, useState } from "react";
import Area from "../components/Area";
import Location from "../components/Location";

import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const notify = () => toast.error("Location value is incorrect...");

const latRegex = /^[-+]?(?=.{0,11}$)([1-8]?\d(?:\.\d{0,7})?|90(?:\.0{0,7})?|\.\d{1,7})$/;
const lonRegex = /^[-+]?(?=.{0,11}$)(?:180(?:\.0{0,7})?|(?:(?:1[0-7]\d{0,1})|(?:[1-9]?\d{0,2}))(?:\.\d{0,7})?)$/;

export default function AreaSelector() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [range, setRange] = useState(1000);

  const handleLatitude = e => {
    const latValue = e.target.value;
    if (latRegex.test(latValue)) {
      setLatitude(parseFloat(latValue));
    } else {
      notify();
    }
  };
  const handleLongitude = e => {
    const lonValue = e.target.value;
    if (lonRegex.test(lonValue)) {
      setLongitude(parseFloat(lonValue));
    } else {
      notify();
    }
  };

  const handleRange = e => {
    setRange(Number(e.target.value));
  };

  const success = pos => {
    const location = pos.coords;
    setLatitude(parseFloat(location.latitude));
    setLongitude(parseFloat(location.longitude));
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
      <Location handleLatitude={handleLatitude} handleLongitude={handleLongitude} latitude={latitude} longitude={longitude} />
      <Area range={range} handleRange={handleRange} latitude={latitude} longitude={longitude} />
      <Toaster />
    </div>
  );
}

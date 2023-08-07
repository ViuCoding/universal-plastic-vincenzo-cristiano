import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const notify = () => toast.error("Location value is incorrect...");

const latRegex = /^[-+]?(?=.{1,11}$)([1-8]?\d(?:\.\d{0,7})?|90(?:\.0{0,7})?)$/;
const lonRegex = /^[-+]?(?=.{1,11}$)(?:180(?:\.0{0,7})?|(?:(?:1[0-7]\d)|(?:[1-9]?\d))(?:\.\d{0,7})?)$/;

export default function Location() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const success = pos => {
    const location = pos.coords;
    setLatitude(location.latitude);
    setLongitude(location.longitude);
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

  const handleLatitude = e => {
    const latValue = e.target.value;
    if (latRegex.test(latValue)) {
      setLatitude(latValue);
    } else {
      notify();
    }
  };
  const handleLongitude = e => {
    const lonValue = e.target.value;
    if (lonRegex.test(lonValue)) {
      setLongitude(lonValue);
    } else {
      notify();
    }
  };

  return (
    <section>
      <h2 className='text-2xl font-bold text-header-text py-2'>Location</h2>

      <div className='grid grid-cols-2 mb-2'>
        <label className='uppercase text-light-text font-semibold' htmlFor='lat'>
          Latitude
        </label>
        <label className='uppercase text-light-text font-semibold' htmlFor='lon'>
          Longitude
        </label>
      </div>
      <div className='bg-input-bg py-2 rounded-lg'>
        <div className='grid grid-cols-2 bg-slider'>
          <input className='bg-input-bg text-input-text font-medium p-3 focus:outline-none' type='number' name='lat' id='lat' value={latitude} onChange={handleLatitude} />
          <input className='bg-input-bg text-input-text font-medium p-3 border-l border-input-divider focus:outline-none' type='number' name='lon' id='lon' value={longitude} onChange={handleLongitude} />
        </div>
      </div>

      <Toaster />
    </section>
  );
}

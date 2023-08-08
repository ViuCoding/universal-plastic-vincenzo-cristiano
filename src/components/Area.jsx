import { useState } from "react";
import { MapContainer, TileLayer, Marker, Circle } from "react-leaflet";
import L from "leaflet";

import mapMarker from "../assets/icons/mapIcon.png";

const customMarker = L.icon({
  iconUrl: mapMarker,
  iconSize: [24, 24],
});

export default function Area() {
  const [range, setRange] = useState(1000);

  const handleRange = e => {
    setRange(e.target.value);
  };

  return (
    <section>
      <div className='flex items-center justify-between'>
        <h2 className='text-2xl font-bold text-header-text py-2'>Area</h2>
        <p className='font-normal text-light-text pr-2'>max 20 km</p>
      </div>
      <div className='slider-container mb-4'>
        <span className='edge-left'></span>
        <input className='w-full slider' type='range' name='km' id='km' min={1000} max={20000} value={range} onChange={handleRange} />
        <span className='edge-right'></span>
      </div>

      <MapContainer className='leaflet-container' center={[38.3643697, 15.8552571]} zoom={13} scrollWheelZoom={false} zoomControl={true}>
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
        <Marker position={[38.3643697, 15.8552571]} icon={customMarker}></Marker>
        <Circle
          center={[38.3643697, 15.8552571]}
          pathOptions={{
            color: "#42c3ee",
            weight: 1,
          }}
          radius={range}
        />
      </MapContainer>
    </section>
  );
}

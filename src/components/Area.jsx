import { MapContainer, TileLayer, Marker, Circle, useMap } from "react-leaflet";
import PropTypes from "prop-types";
import L from "leaflet";
import mapMarker from "../assets/icons/mapIcon.png";

const customMarker = L.icon({
  iconUrl: mapMarker,
  iconSize: [24, 24],
});

Area.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  range: PropTypes.number,
  handleRange: PropTypes.func,
  center: PropTypes.array,
};

export default function Area({ range, handleRange, latitude, longitude }) {
  const ChangeMapView = ({ center }) => {
    const map = useMap();
    map.setView(center, map.getZoom());
    return null;
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

      <MapContainer className='leaflet-container' center={[latitude, longitude]} zoom={13} scrollWheelZoom={false} zoomControl={true}>
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
        <Marker position={[latitude, longitude]} icon={customMarker}></Marker>
        <Circle
          center={[latitude, longitude]}
          pathOptions={{
            color: "#42c3ee",
            weight: 1,
          }}
          radius={range}
        />
        <ChangeMapView center={[latitude, longitude]} />
      </MapContainer>
    </section>
  );
}

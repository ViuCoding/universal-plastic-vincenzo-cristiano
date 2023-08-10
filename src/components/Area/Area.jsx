import { MapContainer, TileLayer, Marker, Circle } from "react-leaflet";
import PropTypes from "prop-types";
import L from "leaflet";
import mapMarker from "../../assets/icons/mapIcon.png";
import "./Area.css";
import ChangeMapView from "../ChangeMapView";
import ChangeZoomLevel from "../ChangeZoomLevel";

const customMarker = L.icon({
  iconUrl: mapMarker,
  iconSize: [24, 24],
});

Area.propTypes = {
  validLatitude: PropTypes.string,
  validLongitude: PropTypes.string,
  range: PropTypes.number,
  handleRange: PropTypes.func,
  center: PropTypes.array,
};

export default function Area({ range, handleRange, validLatitude, validLongitude }) {
  return (
    <section>
      <div className='flex items-center justify-between'>
        <h2 className='text-base font-bold text-header-text py-2'>Area</h2>
        <p className='font-normal text-sm text-light-text pr-2'>max 20 km</p>
      </div>
      <div className='slider-container mb-4'>
        <span className='edge-left'></span>
        <input className='w-full slider' type='range' name='km' id='km' min={1000} max={20000} value={range} onChange={handleRange} />
        <span className='edge-right'></span>
      </div>

      <MapContainer className='leaflet-container' center={[validLatitude, validLongitude]} zoom={13} scrollWheelZoom={false} zoomControl={true}>
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
        <Marker position={[validLatitude, validLongitude]} icon={customMarker}></Marker>
        <Circle
          center={[validLatitude, validLongitude]}
          pathOptions={{
            color: "#42c3ee",
            weight: 1,
          }}
          radius={range}
        />
        <ChangeMapView center={[validLatitude, validLongitude]} />
        <ChangeZoomLevel range={range} />
      </MapContainer>
    </section>
  );
}

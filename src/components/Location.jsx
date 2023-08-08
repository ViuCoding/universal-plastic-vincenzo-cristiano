import PropTypes from "prop-types";

Location.propTypes = {
  handleLatitude: PropTypes.func,
  handleLongitude: PropTypes.func,
  latitude: PropTypes.number,
  longitude: PropTypes.number,
};

export default function Location({ handleLatitude, handleLongitude, latitude, longitude }) {
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
    </section>
  );
}

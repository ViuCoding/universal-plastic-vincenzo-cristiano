import PropTypes from "prop-types";
import WarningIcon from "../assets/icons/warning.png";

Location.propTypes = {
  handleLatitude: PropTypes.func,
  handleLongitude: PropTypes.func,
  latitude: PropTypes.string,
  longitude: PropTypes.string,
  isValid: PropTypes.bool,
};

export default function Location({ handleLatitude, handleLongitude, latitude, longitude, isValid }) {
  return (
    <section>
      <h2 className='text-base font-semibold text-header-text py-2'>Location</h2>

      <div className='grid grid-cols-2 mb-2'>
        <label className='uppercase text-sm text-light-text font-semibold' htmlFor='lat'>
          Latitude
        </label>
        <label className='uppercase text-sm text-light-text font-semibold' htmlFor='lon'>
          Longitude
        </label>
      </div>
      <div className='bg-input-bg py-2 rounded-lg'>
        <div className='grid grid-cols-2 bg-slider'>
          <input className='bg-input-bg text-base text-input-text p-3 focus:outline-none' type='text' name='lat' id='lat' value={latitude} onChange={handleLatitude} />
          <input className='bg-input-bg text-base text-input-text p-3 border-l border-input-divider focus:outline-none' type='text' name='lon' id='lon' value={longitude} onChange={handleLongitude} />
        </div>
      </div>
      {!isValid && (
        <div className='bg-error-bg text-sm text-error-text p-2 rounded-lg my-1 flex items-center gap-1'>
          <img className='w-4 min-w-4' src={WarningIcon} alt='Warning Icon' />
          Please enter valid numerical coordinates.
        </div>
      )}
    </section>
  );
}

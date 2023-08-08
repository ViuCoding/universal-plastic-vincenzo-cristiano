import PropTypes from "prop-types";

City.propTypes = {
  locations: PropTypes.array,
  handleCity: PropTypes.func,
};

export default function City({ locations, handleCity }) {
  return (
    <section>
      <h2 className='text-2xl font-bold text-header-text py-2 '>City</h2>
      <select name='locations' id='locations' className='bg-input-bg text-input-text font-medium p-3 focus:outline-none w-full rounded-lg mb-4' onChange={handleCity}>
        {locations.map(city => {
          return (
            <option key={city.id} value={city.city} className='outline-none'>
              {city.city}
            </option>
          );
        })}
      </select>
    </section>
  );
}

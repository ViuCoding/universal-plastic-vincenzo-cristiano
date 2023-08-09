import PropTypes from "prop-types";

City.propTypes = {
  locations: PropTypes.array,
  handleCity: PropTypes.func,
};

export default function City({ locations, handleCity }) {
  return (
    <section>
      <h2 className='text-base font-semibold text-header-text py-2 '>City</h2>
      <select name='locations' id='locations' className='bg-input-bg text-input-text text-base p-3 focus:outline-none w-full rounded-lg mb-4' onChange={handleCity}>
        {locations.map(({id, city}) => {
          return (
            <option key={id} value={city} className='outline-none'>
              {city}
            </option>
          );
        })}
      </select>
    </section>
  );
}

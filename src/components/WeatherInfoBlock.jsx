import PropTypes from "prop-types";

WeatherInfoBlock.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string || PropTypes.number,
};
export default function WeatherInfoBlock({ label, value }) {
  return (
    <>
      <p className='text-light-text uppercase mb-1'>{label}</p>
      {!value.includes(" °C") ? <p className='font-semibold lowercase text-header-text'>{value}</p> : <p className='font-semibold text-header-text'>{value}</p>}
    </>
  );
}

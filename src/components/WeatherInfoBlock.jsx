import PropTypes from "prop-types";

WeatherInfoBlock.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string || PropTypes.number,
};
export default function WeatherInfoBlock({ label, value }) {
  return (
    <>
      <p className='text-light-text text-sm uppercase mb-1'>{label}</p>
      {!value.includes(" °C") ? <p className='lowercase text-base text-header-text'>{value}</p> : <p className='text-base text-header-text'>{value}</p>}
    </>
  );
}

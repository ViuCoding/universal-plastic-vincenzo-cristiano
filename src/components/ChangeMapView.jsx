import PropTypes from "prop-types";
import { useMap } from "react-leaflet";

ChangeMapView.propTypes = {
  center: PropTypes.array,
};

export default function ChangeMapView({ center }) {
  const map = useMap();
  map.setView(center, map.getZoom());
  return null;
}

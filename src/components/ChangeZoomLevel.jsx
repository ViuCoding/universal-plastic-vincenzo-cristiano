import PropTypes from "prop-types";
import { useEffect } from "react";
import { useMap } from "react-leaflet";

ChangeZoomLevel.propTypes = {
  range: PropTypes.number,
};

export default function ChangeZoomLevel({ range }) {
  const map = useMap();
  useEffect(() => {
    const zoomLevel = Math.max(1, 14 - Math.log2(range / 500));
    setTimeout(function () {
      map.setZoom(zoomLevel);
    }, 300);
  }, [map, range]);

  return null;
}

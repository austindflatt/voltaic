import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoiYXVzdGluZmxhdHQiLCJhIjoiY2w0cjd5emdwMDNxMTNjbXNtdzFvbWRnciJ9.qXo_uz5njzmO_yePHZs-Mw';

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-85.764771);
  const [lat, setLat] = useState(38.328732);
  const [zoom, setZoom] = useState(11);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/austinflatt/cl4raapof001815qmtlzpfcnr',
      center: [lng, lat],
      zoom: zoom
    });
  });
  
  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
  )
}

export default Map;
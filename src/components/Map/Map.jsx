import React, { useRef, useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  height: '1100px',
};

const center = {
  lat: 38.2563789,
  lng: -85.764802
};

const Map = () => {
  
  return (
    <div>
      <LoadScript
      googleMapsApiKey={process.env.GOOGLE_MAPS}
      >
        <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={7}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
    </div>
  )
}

export default Map;
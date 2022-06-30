import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px',
  borderRadius: '4px',
};

const center = {
  lat: 38.2563789,
  lng: -85.764802
};


const StationMap = ({ latitudeProp, longitudeProp }) => {
  return (
    <div>
      <LoadScript
      googleMapsApiKey={process.env.GOOGLE_MAPS}
      >
        <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
        >
          <Marker
          />
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
    </div>
  )
}

export default StationMap;
import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px',
  borderRadius: '4px',
};

const onLoad = marker => {
  console.log('marker: ', marker)
}

const StationMap = ({ latitudeProp, longitudeProp, titleProp }) => {
  const position = { lat: parseFloat(latitudeProp), lng: parseFloat(longitudeProp)};

  return (
    <div>
      <LoadScript
      googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY}
      >
        <GoogleMap
        mapContainerStyle={containerStyle}
        center={position}
        zoom={17}
        >
          <Marker
          onLoad={onLoad}
          position={position}
          clickable
          />
          <></>
        </GoogleMap>
      </LoadScript>
    </div>
  )
}

export default StationMap;
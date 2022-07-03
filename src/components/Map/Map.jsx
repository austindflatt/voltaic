import React, { useContext, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { StationContext } from '../../context/stationContext/StationContext';
import { getStations } from '../../context/stationContext/apiCalls';

const containerStyle = {
  height: '1100px',
};

const onLoad = marker => {
  console.log('marker: ', marker)
}

const Map = () => {
  const { stations, isFetching, dispatch } = useContext(StationContext);

  useEffect(() => {
    getStations(dispatch);
  }, [dispatch]);
  
  return (
    <div>
      <LoadScript
      googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY}
      >
        <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat: 40.037553610713836, lng: -99.62907762197115 }}
        zoom={7}
        >
          {
            stations.map((station, idx) => {
              return (
                <Marker
                onLoad={onLoad}
                position={{ lat: parseFloat(station.lat), lng: parseFloat(station.long) }}
                clickable
                />
              )
            })
          }
          <></>
        </GoogleMap>
      </LoadScript>
    </div>
  )
}

export default Map;
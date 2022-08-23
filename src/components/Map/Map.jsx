import React, { useContext, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { StationContext } from '../../context/stationContext/StationContext';
import { AuthContext } from '../../context/authContext/AuthContext';
import { getStations } from '../../context/stationContext/apiCalls';

const containerStyle = {
  height: '1100px',
};

const Map = () => {
  const { stations, dispatch } = useContext(StationContext);
  const { user } = useContext(AuthContext);

  // Used ternary below to get current users lat & lng and if there is no user in the state
  // then display United States lat & lng
  const lat = user ? user.lat : 37.09024;
  const lng = user ? user.long : -95.712891;

  useEffect(() => {
    getStations(dispatch);
  }, [dispatch]);
  
  return (
    <div>
      <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
      >
        <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat: parseFloat(lat), lng: parseFloat(lng)}}
        zoom={user ? 12 : 5}
        >
          {
            stations.map((station, idx) => {
              return (
                <Marker
                position={{ lat: parseFloat(station.lat), lng: parseFloat(station.long) }}
                clickable
                />
              )
            })
          }
        </GoogleMap>
      </LoadScript>
    </div>
  )
}

export default Map;
import React, { useContext, useEffect } from 'react'
import MapStation from './MapStation'
import { SimpleGrid, Loader } from '@mantine/core';
import { StationContext } from '../context/stationContext/StationContext';
import { getStations } from '../context/stationContext/apiCalls';

const MapStations = () => {
  const { stations, isFetching, dispatch } = useContext(StationContext);

  useEffect(() => {
    getStations(dispatch);
  }, [dispatch]);

  return (
  <>
  { isFetching ?
    <Loader color="indigo" size="xl" variant="dots" style={{ padding: '20px', width: '100%', display: 'flex', justifyContent: 'center' }}/>
    :
    <SimpleGrid cols={2} style={{ marginTop: '20px' }} breakpoints={[
      { maxWidth: 'sm', cols: 1 },
    ]}>
      {
        stations
        .map((station, idx) => {
          return (
            <MapStation
            key={idx}
            chargerName={station.name}
            image={station.image}
            payment={station.paymentRequired}
            checkIns={station.checkIns.length}
            favorites={station.favorites.length}
            stationType={station.homeCharger}
            />
          )
        })
      }
    </SimpleGrid>
  }
  </>
  )
}

export default MapStations;
import React, { useContext, useEffect } from 'react'
import StationCard from './StationCard'
import { SimpleGrid } from '@mantine/core';
import { StationContext } from '../context/stationContext/StationContext';
import { getStations } from '../context/stationContext/apiCalls';

const StationsHome = () => {
  const { stations, isFetching, dispatch } = useContext(StationContext);

  useEffect(() => {
    getStations(dispatch);
  }, [dispatch]);

  return (
  <>
    <SimpleGrid cols={4} style={{ marginTop: '20px' }} breakpoints={[
      { maxWidth: 'lg', cols: 4 },
      { maxWidth: 'md', cols: 3 },
      { maxWidth: 'sm', cols: 1 },
    ]}>
      {
        stations
        .map((station, idx) => {
          return (
            <StationCard
            key={idx}
            chargerName={station.name}
            image={station.image}
            />
          )
        })
      }
    </SimpleGrid>
  </>
  )
}

export default StationsHome;
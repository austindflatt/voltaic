import React, { useContext, useEffect } from 'react'
import StationCard from '../Stations/StationCard'
import { SimpleGrid, Loader } from '@mantine/core';
import { StationContext } from '../../context/stationContext/StationContext';
import { getStations } from '../../context/stationContext/apiCalls';

const StationsHome = () => {
  const { stations, isFetching, dispatch } = useContext(StationContext);

  useEffect(() => {
    getStations(dispatch);
  }, [dispatch]);

  return (
  <>
  { isFetching ?
    <Loader color="indigo" size="xl" variant="dots" style={{ padding: '20px', width: '100%', display: 'flex', justifyContent: 'center' }}/>
    :
    <SimpleGrid cols={4} style={{ marginTop: '20px' }} breakpoints={[
      { maxWidth: 'lg', cols: 4 },
      { maxWidth: 'md', cols: 2 },
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
            payment={station.paymentRequired}
            checkIns={station.checkIns.length}
            favorites={station.favorites.length}
            stationType={station.homeCharger}
            rating={station.rating}
            id={station._id}
            />
          )
        })
      }
    </SimpleGrid>
  }
  </>
  )
}

export default StationsHome;
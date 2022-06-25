import React, { useContext, useEffect } from 'react';
import { Helmet } from "react-helmet";
import StationCard from './StationCard';
import { SimpleGrid } from '@mantine/core';
import { StationContext } from '../context/stationContext/StationContext';
import { getStations } from '../context/stationContext/apiCalls';

const Stations = () => {
  const { stations, isFetching, dispatch } = useContext(StationContext);

  useEffect(() => {
    getStations(dispatch);
  }, [dispatch]);

  return (
  <>
  <Helmet>
    <title>Stations | Voltaic</title>
    <meta name='description' content='Stations' />
  </Helmet>
  
  <>
  <SimpleGrid cols={4} style={{ marginTop: '20px' }} breakpoints={[
    { maxWidth: 'lg', cols: 4 },
    { maxWidth: 'md', cols: 3 },
    { maxWidth: 'sm', cols: 1 },
  ]}>
    <StationCard
    />
  </SimpleGrid>
  </>
  </>
  )
}

export default Stations;
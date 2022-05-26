import React from 'react';
import { Helmet } from "react-helmet";
import StationCard from './StationCard';
import { SimpleGrid } from '@mantine/core';

const Stations = () => {
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
    { maxWidth: 'sm', cols: 2 },
  ]}>
    <StationCard />
  </SimpleGrid>
  </>
  </>
  )
}

export default Stations;
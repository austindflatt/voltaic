import React from 'react'
import StationCard from './StationCard'
import { SimpleGrid, Loader } from '@mantine/core';

const StationsHome = () => {
  return (
  <>
  <SimpleGrid cols={4} style={{ marginTop: '20px' }} breakpoints={[
    { maxWidth: 'lg', cols: 4 },
    { maxWidth: 'md', cols: 3 },
    { maxWidth: 'sm', cols: 1 },
  ]}>
    <StationCard />
    <StationCard />
    <StationCard />
    <StationCard />
    <StationCard />
    </SimpleGrid>
  </>
  )
}

export default StationsHome;
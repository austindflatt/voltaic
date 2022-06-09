import React from 'react'
import BigLayout from '../components/BigLayout'
import { createStyles } from '@mantine/core';
import MapStations from '../components/MapStations';
import Map from '../components/Map';

const useStyles = createStyles((theme) => ({
  mainSection: {
    paddingLeft: theme.spacing.sm,
    paddingRight: theme.spacing.sm,
    paddingBottom: theme.spacing.sm,
  },
}));

const StationsMap = () => {
  const { classes } = useStyles();
  return (
    <BigLayout>
      <div className={classes.mainSection}>
      <div
      className="flex flex-col flex-grow w-screen h-full lg:flex-row"
      style={{ height: `100vh` }}
    >
      <MapStations />
      <Map />
      </div>
      </div>
    </BigLayout>
  )
}

export default StationsMap
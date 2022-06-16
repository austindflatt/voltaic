import React from 'react'
import BigLayout from '../../components/Layout/BigLayout'
import { createStyles } from '@mantine/core';
import MapStations from '../../components/Map/MapStations';
import Map from '../../components/Map/Map';

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
      <div className='row'>
      <div class="column left">
      <MapStations />
      </div>
      <div class="column right">
      <Map />
      </div>
      </div>
      </div>
    </BigLayout>
  )
}

export default StationsMap
import React from 'react'
import { Tabs } from '@mantine/core';
import { GasStation, Heart } from 'tabler-icons-react';
import ProfileStations from './ProfileStations';
import ProfileFavorites from './ProfileFavorites';

const ProfileLower = () => {
  return (
    <Tabs variant="outline" tabPadding="md" style={{ marginTop: '20px' }}>
      <Tabs.Tab label="Hosted Chargers" icon={<GasStation size={14} />}><ProfileStations /></Tabs.Tab>
      <Tabs.Tab label="Favorites" icon={<Heart size={14} />}><ProfileFavorites /></Tabs.Tab>
    </Tabs>
  )
}

export default ProfileLower
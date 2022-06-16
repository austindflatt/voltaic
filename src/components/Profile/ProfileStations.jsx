import React from 'react'
import { Title, Button } from '@mantine/core';
import UsersStations from './UsersStations';

const ProfileStations = () => {
  return (
    <>
      <div style={{ width: '100%', marginLeft: 'auto', marginRight: 'auto', marginTop: '10px' }}><Title order={3}>Austin's Hosted Charging Stations</Title></div>
      <UsersStations />
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
        <Button variant="light" size="sm" color="indigo">Load More</Button>
      </div>
    </>
  )
}

export default ProfileStations
import React from 'react'
import { Title, Button } from '@mantine/core';
import UsersFavStations from './UsersFavStations';

const ProfileFavorites = () => {

  return (
    <>
      <div style={{ width: '100%', marginLeft: 'auto', marginRight: 'auto', marginTop: '10px' }}><Title order={3}>Austin's Favorite Stations</Title></div>
      <UsersFavStations />
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
        <Button variant="light" size="sm" color="indigo">Load More</Button>
      </div>
    </>
  )
}

export default ProfileFavorites
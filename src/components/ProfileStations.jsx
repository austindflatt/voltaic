import React from 'react'
import { Title, Button } from '@mantine/core';
import StationsHome from '../components/StationsHome'
import { Link } from 'react-router-dom';

const ProfileStations = () => {
  return (
    <>
      <div style={{ width: '100%', marginLeft: 'auto', marginRight: 'auto', marginTop: '10px' }}><Title order={3}>Austin's Hosted Charging Stations</Title></div>
      <StationsHome />
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
        <Link to='/user/austin/favorites'>
          <Button variant="light" size="sm" color="indigo">Load More</Button>
        </Link>
      </div>
    </>
  )
}

export default ProfileStations
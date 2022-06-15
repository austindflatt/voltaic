import React from 'react'
import { Title, Button } from '@mantine/core';
import { Link } from 'react-router-dom';
import StationsHome from '../components/StationsHome'

const ProfileFavorites = () => {

  return (
    <>
      <div style={{ width: '100%', marginLeft: 'auto', marginRight: 'auto', marginTop: '10px' }}><Title order={3}>Austin's Favorite Stations</Title></div>
      <StationsHome />
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
        <Link to='/user/austin/favorites'>
          <Button variant="light" size="sm" color="indigo">Load More</Button>
        </Link>
      </div>
    </>
  )
}

export default ProfileFavorites
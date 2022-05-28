import React from 'react'
import ProfileLeftSide from '../components/ProfileLeftSide'
import { SimpleGrid } from '@mantine/core';
import ProfileRightSide from '../components/ProfileRightSide';

const Profile = () => {
  return (
    <>
    <SimpleGrid cols={2} style={{ marginTop: '20px' }} breakpoints={[
    { maxWidth: 'lg', cols: 2 },
    { maxWidth: 'md', cols: 2 },
    { maxWidth: 'sm', cols: 1 },
    ]}>
      <ProfileLeftSide />
      <ProfileRightSide />
    </SimpleGrid>
    </>
  )
}

export default Profile
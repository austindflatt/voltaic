import React from 'react'
import ProfileTop from '../components/ProfileTop'
import ProfileFavorites from '../components/ProfileFavorites'
import ProfileStations from '../components/ProfileStations'
import Layout from '../components/Layout'

const Profile = () => {
  return (
    <>
    <Layout>
      <ProfileTop />
      <ProfileFavorites />
      <ProfileStations />
    </Layout>
    </>
  )
}

export default Profile
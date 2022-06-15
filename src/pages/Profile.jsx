import React from 'react'
import ProfileTop from '../components/ProfileTop'
import ProfileLower from '../components/ProfileLower'
import Layout from '../components/Layout'

const Profile = () => {
  return (
    <>
    <Layout>
      <ProfileTop />
      <ProfileLower />
    </Layout>
    </>
  )
}

export default Profile
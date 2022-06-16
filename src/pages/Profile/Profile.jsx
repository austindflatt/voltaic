import React from 'react'
import ProfileTop from '../../components/Profile/ProfileTop'
import ProfileLower from '../../components/Profile/ProfileLower'
import Layout from '../../components/Layout/Layout'

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
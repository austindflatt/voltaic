import React from 'react'
import Layout from '../../components/Layout/Layout'
import StationComments from '../../components/Station/StationComments'
import StationDetails from '../../components/Station/StationDetails'

const StationPage = () => {
  return (
    <Layout>
      <StationDetails />
      <StationComments />
    </Layout>
  )
}

export default StationPage
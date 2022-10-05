import React from 'react'
import Banner from '../../components/Home/Banner'
import Layout from '../../components/Layout/Layout'
import StationsHome from '../../components/Home/StationsHome'
import Filters from '../../components/Home/Filters'

const Home = () => {
  return (
  <Layout>
    <Banner />
    {/* <Filters /> */}
    <StationsHome />
  </Layout>
  )
}

export default Home
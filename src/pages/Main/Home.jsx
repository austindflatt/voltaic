import React from 'react'
import Banner from '../../components/Home/Banner'
import Layout from '../../components/Layout/Layout'
import StationsHome from '../../components/Home/StationsHome'

const Home = () => {
  return (
  <Layout>
    <Banner />
    <StationsHome />
  </Layout>
  )
}

export default Home
import React from 'react'
import Layout from '../components/layout'
import { HeroImage } from '../components/styles'
import Home from '../components/home'

const IndexPage = () => (
  <Layout>
    <HeroImage>
      <Home />
    </HeroImage>
  </Layout>
)

export default IndexPage

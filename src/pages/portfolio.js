import React from 'react'
import Layout from '../components/layout'
import Portfolio from '../components/portfolio'
import { HeroImage } from '../components/styles'

const PortfolioPage = () => (
  <Layout>
    <HeroImage>
      <Portfolio />
    </HeroImage>
  </Layout>
)

export default PortfolioPage

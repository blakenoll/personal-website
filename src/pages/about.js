import React from 'react'
import Layout from '../components/layout'
import About from '../components/about'
import { HeroImage } from '../components/styles'

const AboutPage = () => (
  <Layout>
    <HeroImage>
      <About />
    </HeroImage>
  </Layout>
)

export default AboutPage

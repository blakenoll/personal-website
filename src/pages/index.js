import React from 'react'
import {
  Globalstyle,
  Wrapper,
  Container,
  Row,
  Column,
  HeroImage,
  SocialButton,
} from '../components/styles'
import About from '../components/about'
import Portfolio from '../components/portfolio'
import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <Globalstyle />
    <HeroImage>
      <Container>
        <Row mobile>
          <Column
            flex="1"
            style={{
              background: 'rgba(0,0,0,.48)',
              padding: '20px',
              borderRadius: '20px',
              boxShadow:
                '0 7px 14px -3px rgba(45,35,66,0.3), 0 2px 4px 0 rgba(45,35,66,0.4), inset -1px -1px 0 0 rgba(0,0,0,0.1)',
            }}
          >
            <h1>
              Software Engineer
              <br />
              <small>Located in Los Angeles</small>
            </h1>
            <p>
              With a record of helping teams identify needs, solve problems and
              contribute to an end goal, I desire to take the skill set I have
              developed working in higher education and apply it to something
              that shapes the future.
            </p>
            <SocialButton href="https://github.com/blakenoll">
              <i className="fa fa-github" />
            </SocialButton>
            <SocialButton href="https://www.linkedin.com/in/blake-noll">
              <i className="fa fa-linkedin" />
            </SocialButton>
            <SocialButton href="mailto:nollblake@gmail.com">
              <i className="fa fa-envelope-square" />
            </SocialButton>
          </Column>
          <Row flex="1" margin="0px 30px 0px 0px" justifyContent="center">
            <div
              style={{
                maxWidth: '300px',
                marginBottom: '1.45rem',
                width: '300px',
              }}
            >
              <Image />
            </div>
          </Row>
        </Row>
      </Container>
    </HeroImage>
    <Wrapper>
      <About />
    </Wrapper>
    <Portfolio />
  </Layout>
)

export default IndexPage

import React from 'react'
import { Link } from 'gatsby'
import {
  Globalstyle,
  Wrapper,
  Container,
  Row,
  Column,
  HeroImage,
  SocialButton,
} from '../components/styles'
import TextForm from '../components/textForm'
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
            }}
          >
            <h1>
              Software Engineer
              <br />
              <small>Located in Los Angeles</small>
            </h1>
            <p>
              Currently working at The Master's University just north of LA as
              the web content strategist. In charge of changing website design
              and content to reflect our change to university status. I have
              experience in HTML, Javascript, CSS, PHP, MySQL, Node.js, Ruby,
              Rails, Java, algorithum efficiency, and computer architecture.
            </p>
            <SocialButton href="#" bgcolor="dodgerblue">
              <i className="fa fa-github" />
            </SocialButton>
            <SocialButton href="#" bgcolor="dodgerblue">
              <i className="fa fa-linkedin" />
            </SocialButton>
            <SocialButton href="#" bgcolor="dodgerblue">
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
              <Image image="gatsby-astronaut.png" />
            </div>
          </Row>
        </Row>
      </Container>
    </HeroImage>
    <Wrapper>
      <TextForm />
    </Wrapper>
    <Portfolio />
  </Layout>
)

export default IndexPage

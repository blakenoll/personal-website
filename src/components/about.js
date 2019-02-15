import React from 'react'
import styled from 'styled-components'
import { Container, Button } from './styles'

const About = ({ className }) => (
  <div className={className}>
    <Container>
      <h1>About</h1>
      <p>
        Currently working at The Master's University just north of LA as the web
        content strategist. In charge of changing website design and content to
        reflect our change to university status. I have experience in HTML,
        Javascript, CSS, PHP, MySQL, Node.js, Ruby, Rails, Java, algorithum
        efficiency, and computer architecture.
      </p>
      <p className="center">
        <Button href="#">Resume</Button>
      </p>
    </Container>
  </div>
)

const StyledAbout = styled(About)`
  color: var(--jet);
  h1 {
    text-align: center;
  }
  .center {
    text-align: center;
  }
`

export default StyledAbout

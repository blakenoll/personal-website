import React from 'react'
import styled from 'styled-components'
import { Container, Column } from './styles'
import Image from './image'
import ResumeButton from './resumeButton'

const About = ({ className }) => (
  <Container className={className}>
    <Column>
      <StyledImage />
      <h1>About</h1>
      <p>
        Currently working at The Master's University just north of LA as the Web
        Content Strategist. In charge of developing and maintaining all web
        content for the University. I have experience in Javascript (React,
        Node, ES6 and above), HTML/CSS, SQL, MongoDB, Rails, Git and course work
        in Java.
      </p>
      <ResumeButton />
    </Column>
  </Container>
)

const StyledAbout = styled(About)`
  ${Column} {
    color: var(--p-color);
    background: var(--jet);
    border-radius: 20px;
    border: 2px solid var(--green);
    box-shadow: var(--box-shadow);
    padding: 0 1rem;
  }

  h1 {
    text-align: center;
    color: var(--picton-blue);
  }
  code {
    color: var(--green);
    margin-left: 5px;
  }
`
const StyledImage = styled(Image)`
  border-radius: 50%;
  max-width: 300px;
  margin: 20px auto;
  box-shadow: var(--box-shadow);
  img {
    border-radius: 50%;
  }
`

export default StyledAbout

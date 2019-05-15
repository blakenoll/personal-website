import React from 'react'
import styled from 'styled-components'
import { Container } from './styles'
import ResumeButton from './resumeButton'

const About = ({ className }) => (
  <div className={className}>
    <Container>
      <h1>About</h1>
      <p>
        Currently working at The Master's University just north of LA as the Web
        Content Strategist. In charge of developing and maintaining all web
        content for the University. I have experience in Javascript (React,
        Node, ES6 and above), HTML/CSS, SQL, MongoDB, Rails, Git and course work
        in Java.
      </p>
      <ResumeButton />
    </Container>
  </div>
)

const StyledAbout = styled(About)`
  color: var(--p-color);
  background: var(--jet);
  h1 {
    text-align: center;
    color: var(--red);
  }
  code {
    color: var(--green);
    margin-left: 5px;
  }
  .center {
    text-align: center;
  }
`

export default StyledAbout

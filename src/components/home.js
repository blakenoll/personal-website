import React from 'react'
import styled from 'styled-components'
import ResumeButton from './resumeButton'
import HomeNav from './homeNav'
import SocialButtons from './socialButtons'
import { Container, Row, Column } from '../components/styles'

const Home = ({ className }) => (
  <Container className={className}>
    <Row mobile>
      <Column flex="1">
        <h1>
          Software Engineer
          <br />
          <small>Located in Los Angeles</small>
        </h1>
        <p>
          With a record of helping teams identify needs, solve problems and
          contribute to an end goal, I desire to take the skill set I have
          developed working in higher education and apply it to something that
          shapes the future.
        </p>
        <HomeNav />
        <ResumeButton />
        <SocialButtons />
      </Column>
    </Row>
  </Container>
)

const StyledHome = styled(Home)`
  ${Column} {
    padding: 20px;
    border-radius: 20px;
    border: 2px solid var(--green);
    box-shadow: 0 7px 14px -3px rgba(45, 35, 66, 0.3),
      0 2px 4px 0 rgba(45, 35, 66, 0.4), inset -1px -1px 0 0 rgba(0, 0, 0, 0.1);
  }
  h1 {
    color: var(--picton-blue);
    small {
      font-size: 1.4rem;
      color: var(--p-color);
    }
  }
`

export default StyledHome

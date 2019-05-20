import React from 'react'
import styled from 'styled-components'
import { Container, Column } from './styles'
import SocialButtons from './socialButtons'

const Contact = ({ className }) => (
  <Container className={className}>
    <Column>
      <h1>Contact Info</h1>
      <SocialButtons />
    </Column>
  </Container>
)

const StyledContact = styled(Contact)`
  ${Column} {
    text-align: center;
    border-radius: 20px;
    border: 2px solid var(--green);
    box-shadow: var(--box-shadow);
    padding: 1rem 0;
  }

  h1 {
    color: var(--picton-blue);
  }
`

export default StyledContact

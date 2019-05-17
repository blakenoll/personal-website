import React from 'react'
import styled from 'styled-components'
import { Container } from './styles'
import SocialButtons from './socialButtons'

const Contact = ({ className }) => (
  <Container className={className}>
    <h1>Contact Info</h1>
    <SocialButtons />
  </Container>
)

const StyledContact = styled(Contact)`
  text-align: center;
  h1 {
    color: var(--picton-blue);
  }
`

export default StyledContact

import React from 'react'
import styled from 'styled-components'
import { Container, SocialButton } from './styles'

const Footer = ({ className }) => (
  <footer className={className}>
    <Container>
      <h1>Contact Info</h1>
      <SocialButton href="#">
        <i className="fa fa-github" />
      </SocialButton>
      <SocialButton href="#">
        <i className="fa fa-linkedin" />
      </SocialButton>
      <SocialButton href="#">
        <i className="fa fa-envelope-square" />
      </SocialButton>
    </Container>
  </footer>
)

const StyledFooter = styled(Footer)`
  background: var(--white);
  padding: 3rem 0;
  text-align: center;
  h1 {
    color: var(--jet);
  }
`

export default StyledFooter

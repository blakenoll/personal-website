import React from 'react'
import styled from 'styled-components'
import { Container, SocialButton } from './styles'

const Footer = ({ className }) => (
  <footer className={className}>
    <Container>
      <h1>Contact Info</h1>
      <SocialButton href="https://github.com/blakenoll" alt="github">
        <i className="fa fa-github" />
      </SocialButton>
      <SocialButton
        href="https://www.linkedin.com/in/blake-noll"
        alt="linkedin"
      >
        <i className="fa fa-linkedin" />
      </SocialButton>
      <SocialButton href="mailto:nollblake@gmail.com" alt="email">
        <i className="fa fa-envelope-square" />
      </SocialButton>
    </Container>
  </footer>
)

const StyledFooter = styled(Footer)`
  background: var(--jet);
  padding: 3rem 0;
  text-align: center;
  h1 {
    color: var(--green);
  }
`

export default StyledFooter

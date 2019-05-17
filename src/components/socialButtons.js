import React from 'react'
import { SocialButton } from './styles'

const SocialButtons = () => (
  <>
    <SocialButton href="https://github.com/blakenoll" alt="github">
      <i className="fa fa-github" />
    </SocialButton>
    <SocialButton href="https://www.linkedin.com/in/blake-noll" alt="linkedin">
      <i className="fa fa-linkedin" />
    </SocialButton>
    <SocialButton href="mailto:nollblake@gmail.com" alt="email">
      <i className="fa fa-envelope-square" />
    </SocialButton>
  </>
)

export default SocialButtons

import React from 'react'
import { SocialButton } from './styles'

const SocialButtons = () => (
  <>
    <SocialButton href="https://github.com/blakenoll">
      <i className="fa fa-github" alt="github" />
    </SocialButton>
    <SocialButton href="https://www.linkedin.com/in/blake-noll">
      <i className="fa fa-linkedin" alt="linkedin" />
    </SocialButton>
    <SocialButton href="mailto:nollblake@gmail.com">
      <i className="fa fa-envelope-square" alt="email" />
    </SocialButton>
  </>
)

export default SocialButtons

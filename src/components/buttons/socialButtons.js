import React from "react";
import { SocialButton } from "../styledComponents";

const SocialButtons = () => (
  <>
    <SocialButton href="https://github.com/blakenoll" aria-label="github">
      <i className="fa fa-github" />
    </SocialButton>
    <SocialButton
      href="https://www.linkedin.com/in/blake-noll"
      aria-label="linkedin"
    >
      <i className="fa fa-linkedin" />
    </SocialButton>
    <SocialButton href="mailto:nollblake@gmail.com" aria-label="email">
      <i className="fa fa-envelope-square" />
    </SocialButton>
  </>
);

export default SocialButtons;

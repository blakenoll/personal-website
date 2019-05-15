import React from 'react'
import styled from 'styled-components'
import { Button } from './styles'
import resume from '../pdfs/NollBlakeResume.pdf'

const ResumeButton = ({ className }) => (
  <div className={className}>
    <Button href={resume} className={className}>
      <i className="fa fa-download" />
      <span>Resume</span>
    </Button>
    <p>
      or <code>$ npm i -g blakenoll</code> then run <code>$ blakenoll</code>
    </p>
  </div>
)

const StyledResumeButton = styled(ResumeButton)`
  ${Button} {
    margin: 0px 0px 1.45rem 0px;
    display: inline-block;
  }
  code {
    color: var(--green);
  }
`
export default StyledResumeButton

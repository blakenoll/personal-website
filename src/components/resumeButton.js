import React from "react";
import styled from "styled-components";
import { Button } from "./styles";
import resume from "../pdfs/NollBlakeResume.pdf";

const ResumeButton = ({ className }) => (
  <div className={className}>
    <Button href={resume} className={className}>
      <i className="fa fa-download" />
      <span>Resume</span>
    </Button>
    <p>
      <h2>For a CLI version: </h2>
      <pre>
        <span className="prompt">$</span> <span>npm</span> i -g blakenoll <br />
        <i># then run</i> <br />
        <span className="prompt">$</span> <span>blakenoll</span>
      </pre>
    </p>
  </div>
);

const StyledResumeButton = styled(ResumeButton)`
  ${Button} {
    margin: 0px 0px 1.45rem 0px;
    display: inline-block;
  }
  pre {
    color: var(--med-emph);
    background: var(--dp-3);
    border-radius: 20px;
    span {
      color: var(--primary);
    }
    .prompt {
      color: var(--secondary);
    }
  }
`;
export default StyledResumeButton;

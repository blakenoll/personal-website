import React from "react";
import styled from "styled-components";
import { Container, Column } from "./styledComponents";
import SocialButtons from "./buttons/socialButtons";

const Contact = ({ className }) => (
  <Container className={className}>
    <Column>
      <h1>Contact Info</h1>
      <SocialButtons />
    </Column>
  </Container>
);

const StyledContact = styled(Contact)`
  ${Column} {
    text-align: center;
    background: var(--dp-1);
    border-radius: 20px;
    padding: 1rem 0;
  }

  h1 {
    color: var(--hi-emph);
  }
`;

export default StyledContact;

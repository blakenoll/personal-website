import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Header = ({ siteTitle, className }) => (
  <div className={className}>
    <div className="flex-row">
      <h1 style={{ margin: 0, zIndex: 1 }}>
        <Link
          to="/"
          style={{
            color: 'dodgerblue',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

const StyledHeader = styled(Header)`
  background: linear-gradient(to top left, #5b86e5, #36d1dc);
  box-shadow: 0 7px 14px -3px rgba(45, 35, 66, 0.3),
    0 2px 4px 0 rgba(45, 35, 66, 0.4), inset 0 -2px 0 0 transparent;
  position: fixed;
  width: 100%;
  z-index: 100;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    border-top: 47px solid #fff;
    border-right: 47px solid transparent;
    width: 40%;
  }

  .flex-row {
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    max-width: 960px;
    padding: 0.5rem 1.0875rem;
    h1 {
      font-size: 1.5rem;
    }
  }

  @media screen and (max-width: 768px) {
    &::before {
      width: 60%;
    }
  }
`

export default StyledHeader

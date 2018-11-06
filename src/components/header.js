import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Header = ({ siteTitle, className}) => (
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
  background: rgba(0, 0, 0, .48);
  box-shadow: 0 1px 4px rgba(0,0,0,.16);
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
    padding: .5rem 1.0875rem;
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

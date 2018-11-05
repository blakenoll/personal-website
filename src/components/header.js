import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Header = ({ siteTitle, className}) => (
  <div className={className}>
    <div
      className="flex-row"
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
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
  background: linear-gradient(to bottom right,rgba(196,202,208,.9),rgb(135,140,143));
  box-shadow: 0 1px 4px rgba(0,0,0,.16);
  position: fixed;
  width: 100%;
  z-index: 100;

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
`

export default StyledHeader

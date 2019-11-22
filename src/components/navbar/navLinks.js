import React from 'react'
import styled from 'styled-components'
import Link from '../link'

const NavLinks = ({ className }) => (
  <div className={className}>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/portfolio">Portfolio</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </div>
)

const StyledNavLinks = styled(NavLinks)`
  @media screen and (max-width: 992px) {
    display: none;
  }
  ul {
    list-style-type: none;
    display: block;
    margin: 0;
    li {
      display: inline;
      cursor: pointer;
      &:not(:first-child) {
        margin-left: 15px;
      }
      a {
        color: var(--med-emph);
        text-decoration: none;
        transition: color 0.2s linear;
        &:hover {
          color: var(--hi-emph);
        }
      }
    }
  }
`

export default StyledNavLinks

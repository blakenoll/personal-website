import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const HomeNav = ({ className }) => (
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

const StyledHomeNav = styled(HomeNav)`
  @media screen and (min-width: 992px) {
    display: none;
  }
  ul {
    list-style-type: none;
    display: block;
    margin: 0 0 1.45rem 0;
    li {
      display: inline;
      cursor: pointer;
      &:not(:first-child) {
        margin-left: 15px;
      }
      a {
        color: var(--hi-emph);
        text-decoration: none;
        transition: color 0.2s linear;
        &:hover {
          color: var(--white);
        }
      }
    }
  }
`

export default StyledHomeNav

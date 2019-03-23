import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import MobileMenu from './mobileMenu'

const Navbar = ({ siteTitle, className }) => (
  <div className={className}>
    <div className="flex-row">
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <MobileMenu />
    </div>
  </div>
)

const StyledNavbar = styled(Navbar)`
  background: var(--jet);
  box-shadow: 0 7px 14px -3px rgba(45, 35, 66, 0.3),
    0 2px 4px 0 rgba(45, 35, 66, 0.4), inset 0 -2px 0 0 rgba(0, 0, 0, 0.2);
  position: fixed;
  width: 100%;
  z-index: 200;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    border-top: 47px solid #fffaff;
    border-right: 47px solid transparent;
    width: 40%;
  }

  .flex-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 960px;
    padding: 0.5rem 1.0875rem;
    h1 {
      font-size: 1.5rem;
      margin: 0;
      z-index: 1;
      color: ;
      a {
        color: var(--picton-blue);
        text-decoration: none;
      }
    }
  }

  @media screen and (max-width: 768px) {
    &::before {
      width: 60%;
    }
  }
`

export default StyledNavbar

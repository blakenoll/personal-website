import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import MobileMenu from './mobileMenu'
import NavLinks from './navLinks'

const Navbar = ({ siteTitle, className }) => (
  <div className={className}>
    <div className="flex-row">
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <NavLinks />
      <MobileMenu />
    </div>
  </div>
)

const StyledNavbar = styled(Navbar)`
  background: var(--dp-2);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 200;

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
      a {
        color: var(--hi-emph);
        text-decoration: none;
        font-weight: 500;
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

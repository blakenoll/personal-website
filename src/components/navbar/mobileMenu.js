import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import StyledMobileDropdown from './mobileDropdown'
import { Link } from 'gatsby'

const listItems = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'About',
    link: '/about',
  },
  {
    title: 'Portfolio',
    link: '/portfolio',
  },
  {
    title: 'Contact',
    link: '/contact',
  },
]

const MobileMenu = ({ className }) => {
  const [visible, setVisible] = useState(false)

  function toggleMenu() {
    setVisible(!visible)
  }

  useEffect(() => {}, [])

  return (
    <div className={`${className} ${visible ? 'show' : ''}`}>
      <div className="menu" onClick={toggleMenu}>
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
      </div>
      <div className="mobile-side-menu">
        <ul>
          {listItems.map((item, index) => {
            if (item.dropdown) {
              return (
                <StyledMobileDropdown
                  title={item.title}
                  items={item.dropdown}
                  key={index + 'd'}
                />
              )
            } else {
              return (
                <li key={index + 'z'} onClick={toggleMenu}>
                  <Link to={item.link}>{item.title}</Link>
                </li>
              )
            }
          })}
        </ul>
      </div>
    </div>
  )
}

const StyledMobileMenu = styled(MobileMenu)`
  display: none;
  position: relative;

  .bar {
    width: 20px;
    height: 3px;
    background: var(--hi-emph);
    margin: 3px 0;
    transition: all 0.3s;
  }

  .mobile-side-menu {
    position: fixed;
    overflow-y: auto;
    overflow-x: auto;
    background: var(--dp-2);
    display: none;
    height: auto;
    width: auto;
    z-index: -1;
    padding: 1.45rem;
    border-radius: 20px 0 0 20px;
    top: 60px;
    right: -100vw;
    transition: right 0.25s ease-in;

    ul {
      list-style: none;
      margin: 0;
      li {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 20px;
        &:last-child {
          margin-bottom: 0;
        }
        a {
          text-decoration: none;
          color: var(--hi-emph);
        }
      }
    }
  }
  ${'' /* make menu visible and turn menu icon into an X */}
  &.show {
    .mobile-side-menu {
      right: 0;
      transition: right 0.3s ease-out;
    }
    .bar:first-child {
      transform: translateY(6px) rotate(45deg);
    }
    .bar:nth-child(2) {
      opacity: 0;
    }
    .bar:last-child {
      transform: translateY(-6px) rotate(-45deg);
    }
  }

  @media screen and (max-width: 992px) {
    display: block;
    .mobile-side-menu {
      display: block;
    }
  }
`

export default StyledMobileMenu

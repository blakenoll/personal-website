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
  console.log(visible)

  function toggleMenu() {
    setVisible(!visible)
    console.log(visible)
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
                <li key={index + 'z'}>
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
    background: var(--picton-blue);
    margin: 3px 0;
    transition: all 0.3s;
  }

  .mobile-side-menu {
    position: fixed;
    overflow-y: auto;
    overflow-x: auto;
    background: var(--jet);
    display: none;
    height: auto;
    width: 80vw;
    z-index: -1;
    padding-top: 20px;
    border-radius: 20px;
    border: 2px solid var(--picton-blue);
    box-shadow: rgba(45, 35, 66, 0.3) 0px 7px 14px -3px,
      rgba(45, 35, 66, 0.4) 0px 2px 4px 0px,
      rgba(0, 0, 0, 0.1) -1px -1px 0px 0px;
    top: 60px;
    right: -100vw;
    transition: right 0.2s ease-out;

    ul {
      list-style: none;
      li {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 20px;
        a {
          text-decoration: none;
          color: var(--picton-blue);
        }
      }
    }
  }
  ${'' /* make menu visible and turn menu icon into an X */}
  &.show {
    .mobile-side-menu {
      right: 10vw;
      transition: right 0.25s ease-in;
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

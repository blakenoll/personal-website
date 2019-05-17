import React from 'react'
import styled from 'styled-components'
import { Button } from './styles'
import Icon from './icons'

const Card = ({ item, className }) => {
  return (
    <div className={className}>
      <div className="fader">
        <div className="card-body">
          <h3>{item.title}</h3>
          <p>Tech used:</p>
          {item.tech.map((t, i) => (
            <Icon key={i} name={t} />
          ))}
        </div>
      </div>
      <div className="hover-menu">
        <Button href={item.link}>View</Button>
      </div>
    </div>
  )
}

const StyledCard = styled(Card)`
  width: 250px;
  border-radius: 20px;
  margin: 10px;
  background: var(--jet);
  box-shadow: 0 7px 14px -3px rgba(45, 35, 66, 0.3),
    0 2px 4px 0 rgba(45, 35, 66, 0.4), inset 0 -2px 0 0 var(--jet);
  border: 2px solid var(--green);
  transition: transform 0.2s ease-in;
  position: relative;

  .card-body {
    padding: 12px 15px;
    h3 {
      font-size: 17px;
      margin-bottom: 0.5rem;
      color: var(--picton-blue);
    }
    p {
      font-size: 14px;
      margin-bottom: 5px;
      font-weight: 500;
    }
    svg {
      margin: 0 3px;
    }
  }

  .fader {
    opacity: 1;
    transition: opacity 0.2s ease-in;
  }

  .hover-menu {
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    transition: opacity 0.2s ease-in;
  }

  img {
    width: 100%;
    border-radius: 20px 20px 0 0;
  }

  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease-out;
    .fader {
      opacity: 0.3;
      transition: opacity 0.3s ease-out;
    }
    .hover-menu {
      opacity: 1;
      transition: opacity 0.3s ease-out;
    }
  }

  @media screen and (max-width: 768px) {
    width: 300px;
  }
`
export default StyledCard

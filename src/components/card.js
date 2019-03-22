import React from 'react'
import styled from 'styled-components'
import Icon from './icons'

const Card = ({ item, className }) => {
  return (
    <div className={className}>
      <img src={item.image} />
      <div className="card-body">
        <h3>{item.title}</h3>
        <p>
          <a href={item.link}>View</a>
        </p>
        <p>Tech used:</p>
        {item.tech.map((t, i) => (
          <Icon key={i} name={t} />
        ))}
      </div>
    </div>
  )
}

const StyledCard = styled(Card)`
  width: 250px;
  border-radius: 20px;
  margin: 10px;
  background: var(--white);
  box-shadow: 0 7px 14px -3px rgba(45, 35, 66, 0.3),
    0 2px 4px 0 rgba(45, 35, 66, 0.4), inset 0 -2px 0 0 #cfd1e3;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.09);
  }
  .card-body {
    padding: 5px 10px;
    h3 {
      font-size: 17px;
      margin-bottom: 0.5rem;
    }
    p {
      font-size: 14px;
      margin-bottom: 5px;
      font-weight: 500;
      a {
        color: var(--white);
        text-decoration: none;
        text-align: center;
        background: var(--united-nations-blue);
        padding: 5px 15px;
        margin-bottom: 15px;
        border-radius: 20px;
        box-shadow: 0 7px 14px -3px rgba(45, 35, 66, 0.3),
          0 2px 4px 0 rgba(45, 35, 66, 0.4), inset -1px -1px 0 0 #5b86e5;
      }
    }
    svg {
      margin: 0 3px;
    }
  }

  @media screen and (max-width: 768px) {
    width: 300px;
  }
  img {
    width: 100%;
    border-radius: 20px 20px 0 0;
  }
`
export default StyledCard

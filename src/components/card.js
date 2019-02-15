import React from 'react'
import styled from 'styled-components'

const Card = ({ item, className }) => {
  return (
    <div className={className}>
      <img src={item.image} />
      <h3>{item.title}</h3>
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

  @media screen and (max-width: 768px) {
    width: 300px;
  }
  h3 {
    text-align: center;
  }
  img {
    width: 100%;
    border-radius: 20px 20px 0 0;
  }
`
export default StyledCard

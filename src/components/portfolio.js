import React from 'react'
import Card from './card'
import { Row, Container } from './styles'
import styled from 'styled-components'

const websites = [
  {
    image: 'https://blakenoll.com/img/masters.png',
    title: 'masters.edu',
  },
  {
    image: 'https://blakenoll.com/img/gottabudget.png',
    title: 'Gotta Budget',
  },
  {
    image: 'https://blakenoll.com/img/collegesearch.png',
    title: 'College Search',
  },
  {
    image: 'https://blakenoll.com/img/wekreative.jpeg',
    title: 'Wekreative',
  },
  {
    image: 'https://blakenoll.com/img/gottabudget.png',
    title: 'Lux Solutions',
  },
  {
    image: 'https://blakenoll.com/img/gottabudget.png',
    title: 'The Pour Choice',
  },
]

class Portfolio extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: websites,
    }
  }

  render() {
    return (
      <div className={this.props.className}>
        <Container>
          <h1>Portfolio</h1>
          <Row justifyContent="center" wrap="wrap">
            {this.state.items.map((w, i) => (
              <Card key={i} item={w} />
            ))}
          </Row>
        </Container>
      </div>
    )
  }
}

const StyledPortfolio = styled(Portfolio)`
  background: linear-gradient(
    310deg,
    var(--jet) 30%,
    var(--united-nations-blue)
  );
  padding: 3rem 0;
  h1 {
    color: var(--white);
    font-weight: 200;
    letter-spacing: 1px;
    text-align: center;
  }
`

export default StyledPortfolio

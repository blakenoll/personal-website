import React from 'react'
import Card from './card'
import { Row, Container } from './styles'
import styled from 'styled-components'

const websites = [
  {
    image: 'https://blakenoll.com/img/portfolio/www.masters.edu_%20(1)-min.png',
    title: 'masters.edu',
    tech: ['jekyll'],
    link: 'https://masters.edu',
  },
  {
    image: 'https://blakenoll.com/img/portfolio/gottabudget-min.png',
    title: 'Gotta Budget',
    tech: ['rails', 'postgres', 'heroku'],
    link: 'https://vast-badlands-32950.herokuapp.com/',
  },
  {
    image: 'https://blakenoll.com/img/portfolio/collegesearch-min.png',
    title: 'College Finder',
    tech: ['react', 'graphql', 'heroku', 'node'],
    link: 'https://college-finder.netlify.com/',
  },
  {
    image: 'https://blakenoll.com/img/portfolio/wekreative-min.jpeg',
    title: 'Wekreative',
    tech: ['jekyll'],
    link: 'https://wekreative.com/',
  },
  {
    image: 'https://blakenoll.com/img/portfolio/luxsolutions.com_-min.png',
    title: 'Lux Solutions',
    tech: ['react', 'gatsby'],
    link: 'https://luxsolutions.com/',
  },
  {
    image: 'https://blakenoll.com/img/portfolio/pourchoice-min.png',
    title: 'The Pour Choice',
    tech: ['jekyll'],
    link: 'http://thepourchoice.com/',
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
  background: var(--jet);
  /* background by SVGBackgrounds.com */
  padding: 3rem 0;
  h1 {
    color: var(--red);
    text-align: center;
  }
`

export default StyledPortfolio

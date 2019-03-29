import React from 'react'
import { Link } from 'gatsby'

const StyledLink = ({ to, children }) => (
  <Link to={to} activeStyle={{ color: 'var(--white)' }}>
    {children}
  </Link>
)

export default StyledLink

import React from 'react'

import ReactLogo from './reactLogo'
import NodeLogo from './nodeLogo'
import RailsLogo from './railsLogo'
import PostgresLogo from './postGresLogo'
import HerokuLogo from './herokuLogo'
import JekyllLogo from './jekyllLogo'
import Aws from './awsLogo'
import GraphqlLogo from './graphql'
import GatsbyLogo from './gatsbylogo'

const Icon = props => {
  switch (props.name) {
    case 'react':
      return <ReactLogo {...props} />
    case 'node':
      return <NodeLogo {...props} />
    case 'rails':
      return <RailsLogo {...props} />
    case 'postgres':
      return <PostgresLogo {...props} />
    case 'heroku':
      return <HerokuLogo {...props} />
    case 'jekyll':
      return <JekyllLogo {...props} />
    case 'aws':
      return <Aws {...props} />
    case 'graphql':
      return <GraphqlLogo {...props} />
    case 'gatsby':
      return <GatsbyLogo {...props} />
    default:
      return
  }
}

export default Icon

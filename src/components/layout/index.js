import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import Navbar from "../navbar";
import Transition from "../transition";
import { Globalstyle, HeroImage } from "../styledComponents";
import "font-awesome/css/font-awesome.min.css";
import "./layout.css";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" },
          ]}
        >
          <html lang="en" />
          <link
            rel="stylesheet"
            url="https://fonts.googleapis.com/css?family=Karla|Lato"
          />
        </Helmet>
        <Globalstyle />
        <Navbar siteTitle={data.site.siteMetadata.title} />
        <HeroImage>
          <Transition>{children}</Transition>
        </HeroImage>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

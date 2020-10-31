import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import { Title } from "./styles"

export default function Layout({ title, children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650 }}>
      <div>
        <Title>{data.site.siteMetadata.title}</Title>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <h1>{title}</h1>
      {children}
    </div>
  )
}

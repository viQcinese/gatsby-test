import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

export default function Layout({ children }) {
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
        <h1>{data.site.siteMetadata.title}</h1>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      {children}
    </div>
  )
}

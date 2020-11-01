import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"

import { MainTitle } from "./styles"

export default function BlogPost({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <MainTitle>{post.frontmatter.title}</MainTitle>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

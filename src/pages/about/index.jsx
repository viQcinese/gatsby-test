import React from "react"
import Layout from "../../components/Layout"

import { Description } from "./_styles"

export default function About() {
  return (
    <Layout title="About">
      <Description>Something to describe</Description>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </Layout>
  )
}

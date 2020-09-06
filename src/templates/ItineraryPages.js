import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import componenttyles from "./roteiro.module.css"
import Itinerary from "../components/roteiros/Itinerary"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <Itinerary key={post.Id} post={post} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        photo
      }
    }
  }
`
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import componenttyles from "./roteiro.module.css"
import Itinerary from "../components/roteiros/Itinerary"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
    <div className = {componenttyles.background}>
      <div className = {componenttyles.text}>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </div>
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
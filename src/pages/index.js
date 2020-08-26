import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import componenttyles from "../components/roteiros/container.module.css"

import Container from "../components/roteiros/Container"
import ResumoRoteiro from "../components/roteiros/ResumoRoteiro"

import data from "../testObjects/posts.json"

const IndexPage = () => (
  <Layout>
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

const Index = () => {
  return (
      <>
          <Layout isHome={true}>
                <Container className={componenttyles.container}>
                    {data.posts.map(( post ) => (
                        <ResumoRoteiro key={post.id} post={post} />
                    ))}
                </Container>
          </Layout>
      </>
  )
}






export default Index

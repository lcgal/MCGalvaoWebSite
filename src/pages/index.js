import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import componenttyles from "../components/roteiros/container.module.css"

import ResumoRoteiro from "../components/roteiros/ResumoRoteiro"

import data from "../testObjects/posts.json"

const IndexPage = () => (
  <Layout>
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

const Index = () => {
  const posts = {data}
  
  return (
      <>
          <Layout isHome={true}>
              <div className={componenttyles.container}>
                  <section className="post-feed">
                      {data.posts.map(( post ) => (
                          <ResumoRoteiro post={post} />
                      ))}
                  </section>
              </div>
          </Layout>
      </>
  )
}






export default Index

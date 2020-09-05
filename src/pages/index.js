import React from "react"
import Layout from "../components/layout"

import componenttyles from "../components/roteiros/container.module.css"

import Container from "../components/roteiros/Container"
import ResumoRoteiro from "../components/roteiros/ResumoRoteiro"

import data from "../testObjects/Destinos.json"

const Index = () => {
  return (
      <>
          <Layout isHome={true}>
                <Container className={componenttyles.container}>
                    {data.map(( post ) => (
                        <ResumoRoteiro key={post.Id} post={post} />
                    ))}
                </Container>
          </Layout>
      </>
  )
}

export default Index

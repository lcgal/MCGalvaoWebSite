import React from "react"
import Layout from "../components/layout"

import Header from "../components/header"

import componenttyles from "../styles/index.module.css"

import PhotoSlider from "../components/slider/PhotoSlider"

import Container from "../components/roteiros/Container"
import ResumoRoteiro from "../components/roteiros/ResumoRoteiro"

import data from "../testObjects/Destinos.json"
import SliderImages from "../testObjects/SliderImages.json"

const Index = () => {
  return (
    <>
        <Header siteTitle={"teste"} />
        <div>
            <PhotoSlider className={componenttyles.sliderimages} images={SliderImages} />
        </div>
        <Container className={componenttyles.container}>
            {data.map(( post ) => (
                <ResumoRoteiro key={post.Id} post={post} />
            ))}
        </Container>

    </>
  )
}

export default Index

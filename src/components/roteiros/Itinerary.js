import React from "react"
import componenttyles from "./itinerary.module.css"
import Layout from "../layout"
import ItineraryPhoto from "./ItineraryPhoto.js"

const ItineraryPost = ({ post }) => {
  return (
    <div className = {componenttyles.background}>
    <div className = {componenttyles.text}>
        <h1>{post.frontmatter.title}</h1>
        <ItineraryPhoto filename={post.frontmatter.photo} />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
    </div>
  )
}


export default ItineraryPost
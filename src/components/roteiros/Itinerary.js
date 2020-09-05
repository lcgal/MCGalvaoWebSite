import React from "react"
import componenttyles from "./itinerary.module.css"


const ItineraryPost = ({ post }) => {
  return (
    <div className = {componenttyles.background}>
    <div className = {componenttyles.text}>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
    </div>
  )
}


export default ItineraryPost
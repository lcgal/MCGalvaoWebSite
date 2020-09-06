import React from 'react'
import componenttyles from "./itinerary.module.css"
import PropTypes from 'prop-types'
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

const Photo = ({ filename }) => (
<StaticQuery
    query={graphql`
    query {
        images: allFile {
        edges {
            node {
            relativePath
            name
            childImageSharp {
                fluid(maxWidth: 730) {
                    ...GatsbyImageSharpFluid
                }
            }
            }
        }
        }
    }
    `}

    render={(data) => {
        const image = data.images.edges.find(n => {
            return n.node.relativePath.includes(filename);
        });

        if (!image) { return <section className={componenttyles.duration}>{ filename } not found </section>}
        
        //return <section className={componenttyles.duration}>{ post.Days } dias e { post.Nights } noites </section>
        return <Img className={componenttyles.image} fluid={image.node.childImageSharp.fluid} alt=""></Img>
    }}
/>
)

Photo.propTypes = {
    filename: PropTypes.string.isRequired,
    }




export default Photo;